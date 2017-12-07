app.controller("userController", function ($scope, $state, $stateParams, userService) {
  // lists users in world ranking
  $scope.users = userService.getUsers();
  //Goes to individual card view when clicked in all users view
  if ($stateParams.id == null || $stateParams.id == "" || $stateParams.id == undefined) {
    $scope.user = userService.getUserById($stateParams.id)
  } else {
    $scope.user = userService.getUserById($stateParams.id)
  }

  //displays user routes
  if ($stateParams.id == null || $stateParams.id == "" || $stateParams.id == undefined) {
    $scope.routes = userService.getUserRoutes($stateParams.id)
  } else {
    $scope.routes = userService.getUserRoutes($stateParams.id)
  }
  // Form verification "required" ng-hide set to true at initial view load
  $scope.firstNameRequired = true;
  $scope.lastNameRequired = true;
  $scope.DOBRequired = true;
  $scope.emailRequired = true;
  $scope.passwordRequired = true;
  $scope.locationRequired = true;
  $scope.yearRequired = true;
  $scope.bioRequired = true;
  //checks for missing inputs and displays "required"
  $scope.newUserSubmit = function () {
    //if any form input is empty then run next if else 
    if (($scope.firstName == "" || $scope.firstName == null)
      || ($scope.lastName == "" || $scope.lastName == null)
      || ($scope.age == "" || $scope.age == null)
      || ($scope.email == "" || $scope.email == null)
      || ($scope.password == "" || $scope.password == null)
      || ($scope.location == "" || $scope.location == null)
      || ($scope.year == "" || $scope.year == null)
      || ($scope.bio == "" || $scope.bio == null)) {
      if ($scope.firstName == "" || $scope.firstName == null) {
        $scope.firstNameRequired = false;
      } else { $scope.firstNameRequired = true; }
      if ($scope.lastName == "" || $scope.lastName == null) {
        $scope.lastNameRequired = false;
      } else { $scope.lastNameRequired = true; }
      if ($scope.age == "" || $scope.age == null) {
        $scope.DOBRequired = false;
      } else { $scope.DOBRequired = true; }
      if ($scope.email == "" || $scope.email == null) {
        $scope.emailRequired = false;
      } else { $scope.emailRequired = true; }
      if ($scope.password == "" || $scope.password == null) {
        $scope.passwordRequired = false;
      } else { $scope.passwordRequired = true; }
      if ($scope.location == "" || $scope.location == null) {
        $scope.locationRequired = false;
      } else { $scope.locationRequired = true; }
      if ($scope.year == "" || $scope.year == null) {
        $scope.yearRequired = false;
      } else { $scope.yearRequired = true; }
      if ($scope.bio == "" || $scope.bio == null) {
        $scope.bioRequired = false;
      } else { $scope.bioRequired = true; }
    }
    //if everything is filled out in signup form this funciton is run and inputs passed in 
    else {
      userService.newUserForm($scope.firstName, $scope.lastName, $scope.age, $scope.email, $scope.password, $scope.location, $scope.year, $scope.bio)
      $state.go('app.userCard', {id: userService.getNewId()})
    }
  }

  // edit user button goes to new view with current stateParams.id of current logged in user
  $scope.editUserButton = function () {
    $state.go("app.editUser", { id: $stateParams.id });
  }
//update button uses what is currently in form and splices to current user array. 
  $scope.updateSubmitUser = function () {
    userService.spliceUpdate($stateParams.id, $scope.user.firstName, $scope.user.lastName, $scope.user.age, $scope.user.email, $scope.user.password, $scope.user.location, $scope.user.yearsClimbing, $scope.user.bio, $scope.user.routes, $scope.user.points)
    $state.go("app.userCard", { id: $stateParams.id });
  } 
  // goes to add route form when addroute button click
  $scope.addRouteForm = function () {
    userService.currentRouteNull()
    $state.go("app.routeForm")
  }
  //pushes input from routeForm to currentuser.route
  $scope.addRoute = function () {
    userService.addsRoute($scope.route.name, $scope.route.location, $scope.route.grade)
  }
  // editRoutesbutton goes to editRoute form, routeName is passed to function to find route in currentuser[i]
  $scope.editRouteButton = function (routeName) {
    userService.setRouteEdit(routeName)
    $state.go("app.routeForm")
  }
//for display of all currentuser routes in ng-repeat routes
  $scope.route = userService.getRoutesEdit();

// This function is needed to update grade, since points and grade cannot be binded through $scope. 
  $scope.updateRoute = function (grade) {
    userService.changePoints(grade)
    //after updatebutton clicked, state go back to dashboard
    $state.go("app.dashboard", { id: userService.getNewId() })
  }
  //delete
  $scope.deleteRouteButton = function (route) {
    userService.deleteRoute(route)
  }
// this function used to go to new page to confirm delete and goes back to dashboard. since live delete wasn't possible. 
  $scope.confirmDelete = function () {
    $state.go("app.dashboard", { id: userService.getNewId() })
  }
  // connects addButton in routeForm to service hides/show add button for add or edit
  $scope.showAddButton = function () {
    return userService.showingAdd()
  }
  //connects updated Button in routeForm to service hides/show update buttom for add or edit
  $scope.updateButton = function () {
    return userService.showingUpdate()
  }
})


