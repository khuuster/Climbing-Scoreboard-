// creates service and uses $state as a parameter to use from model 
app.service("userService", function ($state) {
  //empty array to store users information
  var _users = [];
  //gives userId a starting point increments with userId++ 
  var userId = 0;
  //currentUser is null when not logged in. Currentuser becomes currentUser[i] when logged in
  this.currentUser = null;

  //User constructor for signing up or editing User information
  var User = function (id, firstName, lastName, age, email, password, location, yearsClimbing, bio, routes) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.password = password;
    this.location = location;
    this.yearsClimbing = yearsClimbing;
    this.bio = bio;
    this.routes = routes;
    //Total points propertie are calculated here by looping in user routes and summing up points in each route
    this.points = function () {
      var totalPoints = 0;
      for (var i = 0; i < this.routes.length; i++) {
        totalPoints += this.routes[i].points;
      }
      return totalPoints;
    };
  }
//route constructor is nested inside user array, this is used when adding a route or editing a route. 
  var Route = function (name, points, rating, location, grade) {
    this.name = name;
    this.points = points;
    this.rating = rating
    this.location = location;
    this.grade = grade
  }


//Pushing dummy data into empty array of _users
  _users.push(new User(userId++, "Bob", "Lee", "30", "bobby@gmail.com", "boom", "Los Angeles", "10", "Loves to boulder", [{ name: "KingPin", rating: "5.13a", points: 750, location: "riverside, ca", grade: "5.10d - V2 Points: 125" }, { name: "The Travesty", rating: "5.13a", points: 750, location: "New Jack City, ca", grade: "5.10d - V2 Points: 125" }, { name: "Taxidermy", rating: "5.12d", points: 600, location: "Forest Falls, ca", grade: "5.10d - V2 Points: 125" }], 0
  ))
  _users.push(new User(userId++, "Susan", "Susey", "25", "susan@gmail.com", "boom", "San Diego", "4", "loremipsum afdsadfdsa  fdsafezdz vkj", [{ name: "Mandala", rating: "5.14a", points: 1300, location: "Bishop, ca", grade: "5.10d - V2 Points: 125" }, { name: "Realization", rating: "5.15a", points: 2500, location: "Ceuse, France", grade: "5.10d - V2 Points: 125" }, { name: "Monster Skank", rating: "5.13b", points: 900, location: "Red Rocks, nv", grade: "5.10d - V2 Points: 125" }], 0))
  _users.push(new User(userId++, "Anthony", "Smith", "40", "tony@gmail.com", "boom", "Los Angeles", "7", "Lead singer of red hot chilli peppers", [{ name: "Anarchy", rating: "5.13a", points: 750, location: "Mt. Baldy, ca", grade: "5.10d - V2 Points: 125" }, { name: "Drive By Shooting", rating: "5.13b", points: 900, location: "Mt Baldy, ca", grade: "5.10d - V2 Points: 125" }, { name: "Liquid Gold", rating: "5.13b", points: 900, location: "Forest Falls, ca", grade: "5.10d - V2 Points: 125" }], 0))
  _users.push(new User(userId++, "Neil", "Armstrong", "80", "neil@gmail.com", "boom", "Houston", "0", "First man on the moon", [{ name: "Evilution", rating: "5.13a", points: 750, location: "Bishop, ca", grade: "5.10d - V2 Points: 125" }, { name: "The Hulk", rating: "5.12c", points: 500, location: "Bishop, ca", grade: "5.10d - V2 Points: 125" }, { name: "Hanging By a Thread", rating: "5.12c", points: 500, location: "Riverside, ca", grade: "5.10d - V2 Points: 125" }], 0))
  _users.push(new User(userId++, "Michael", "Keith", "56", "mikey@gmail.com", "boom", "Chicago", "1", "Blah", [{ name: "Ghetto Blaster", rating: "5.13a", points: 750, location: "Las Vegas, ca", grade: "5.10d - V2 Points: 125" }, { name: "Bubble Butt", rating: "5.13a", points: 750, location: "Red Rocks, nv", grade: "5.10d - V2 Points: 125" }, { name: "Bikini Whale", rating: "5.12c", points: 500, location: "Joshua Tree, ca", grade: "5.10d - V2 Points: 125" }], 0))
  _users.push(new User(userId++, "Jason", "Richards", "67", "billy@gmail.com", "boom", "Little Rock", "2", "Likes rock", [{ name: "Pigpen", rating: "5.11d", points: 250, location: "Joshua Tree, ca", grade: "5.10d - V2 Points: 125" }, { name: "BuzzSaw", rating: "5.14a", points: 1300, location: "Black Mountain, ca", grade: "5.10d - V2 Points: 125" }, { name: "Taxidermy", rating: "5.12d", points: 600, location: "Forest Falls, ca", grade: "5.10d - V2 Points: 125" }], 0))

  // gets all users for all user listing (world ranking)
  this.getUsers = function () {
    return _users
  }
  // shows a selected user in world ranking page by using ID
  this.getUserById = function (id) {
    if (id == null || id == "" || id == undefined) {
      return _users[i];
    } else {
      for (var i = 0; i < _users.length; i++) {
        if (_users[i].id == id) {
          return _users[i];
        }
      }
    }
  }
  //displays user routes when clicked route in userInfo in world ranking
  this.getUserRoutes = function (id) {
    // empty array is filled up by forLoop and returned when completed 
    var userRoutes = []
    //finds user[i] in _users array
    for (var i = 0; i < _users.length; i++) {
      if (_users[i].id == id) {
        //pushes all routes within user[i]
        for (var x = 0; x < _users[i].routes.length; x++) {
          userRoutes.push(_users[i].routes[x])
        }
      }
    }
    return userRoutes
  }
  
  // adds user to users for signup page
  this.newUserForm = function (firstName, lastName, DOB, email, password, location, yearsClimbing, bio) {
    _users.push(new User(userId++, firstName, lastName, DOB, email, password, location, yearsClimbing, bio, []));
    this.currentUser = _users[_users.length - 1]
  }

  // sets new user that is signing up to be logged in after they have filled out signup form
  this.getNewId = function () {
    return this.currentUser.id
  }

  //login verfication function
  this.loginVerify = function (email, password) {
    for (var i = 0; i < _users.length; i++) {
      if (_users[i].email == email && _users[i].password == password) {
        this.currentUser = _users[i];
        $state.go('app.dashboard', { id: this.currentUser.id })
        return true;
      }
    }
    return false;
  }

  this.getCurrentUser = function () {
    return this.currentUser
  }

  // update button in edit user form. updates Current User profile information
  this.spliceUpdate = function (id, firstName, lastName, age, email, password, location, year, bio, routes, points) {
    //finds current user by stateParam.Id and splice user form into current user array
    for (var i = 0; i < _users.length; i++) {
      if (_users[i].id == id) {
        _users.splice(i, 1, new User(id, firstName, lastName, age, email, password, location, year, bio, routes, points));
        console.log(this.currentUser)
      }
    }
  }

  //adds route to users array
  this.addsRoute = function (routeName, routeLocation, rating) {
    console.log(this.currentUser)
    //extracts points from rating value
    for (var i = 0; i < rating.length; i++) {
      if (rating[i] == ":") {
        var newPoints = parseInt(rating.substr(i + 2, 5))
        console.log(rating.substr(i + 2, 5))
      }
    }
    //extracts rating from rating value
    for (var i = 0; i < rating.length; i++) {
      if (rating[i] == "-") {
        var newRating = rating.slice(0, i)
        console.log(rating.slice(0, i))
      }
    }
    //pushes extracted points and rating and updated route form to currentuser route array.
    if (this.currentUser != null) {
      this.currentUser.routes.push(new Route(routeName, newPoints, newRating, routeLocation, rating))
      $state.go("app.dashboard", { id: this.currentUser.id })
      console.log(this.currentUser.routes)
    }
  }

  //dashboard shows currentuser via Id
  this.dashBoard = function () {
    $state.go("app.dashboard", { id: this.currentUser.id })
  }

  //logout, sets currentUser to null and goes to home page
  this.logOut = function () {
    this.currentUser = null;
    $state.go("app.home")
  }

//sets addRoute and updateRoute button to show in form.
  var editButton = true;
  var addButton = true;
  //populates edit route form with selected route to edit
  var _currentRoute = null
//searches currentUser.route for match of routeName, to set currentRoute variable
  this.setRouteEdit = function (routeName) {
    for (var i = 0; i < this.currentUser.routes.length; i++) {
      if (this.currentUser.routes[i].name == routeName) {
        _currentRoute = this.currentUser.routes[i]
        console.log(_currentRoute)
      }
    }
    //shows editButton and hides AddButton
    editButton = true;
    addButton = false;
  }

  this.getRoutesEdit = function () {
    return _currentRoute
  }
// addRouteButton resets currentRoute to null to clear route form
  this.currentRouteNull = function () {
    _currentRoute = null
    editButton = false;
    addButton = true;
  }

  // pushes edit route form to database.
  this.changePoints = function (grade) {
    // extracts points from grade
    for (var i = 0; i < grade.length; i++) {
      if (grade[i] == ":") {
        var newPoints = parseInt(grade.substr(i + 2, 5))
        console.log(grade.substr(i + 2, 5))
      }
    }
    for (var i = 0; i < grade.length; i++) {
      // extracts rating from grade
      if (grade[i] == "-") {
        var newRating = grade.slice(0, i)
        console.log(grade.slice(0, i))
      }
    }
    // sets current route points and rating
    _currentRoute.points = newPoints
    _currentRoute.rating = newRating
  }

  //delete route
  this.deleteRoute = function (route) {
    for (var i = 0; i < this.currentUser.routes.length; i++) {
      // splices route by matching the name of route selected with name in currentUser route[i]
      if (this.currentUser.routes[i].name == route.name) {
        this.currentUser.routes.splice(i, 1)
        //goes to new page for refresh
        $state.go("app.deleteConfirm")
      }
    }
  }
  // returns conditional true false to controller, hides or shows add button depending on editRoute view or addRoute view
  this.showingAdd = function () {
    return addButton
  }
 // returns conditional to controller, hides or shows add button depending on editRoute view or addRoute view
  this.showingUpdate = function (routeName) {
    return editButton


  }

})