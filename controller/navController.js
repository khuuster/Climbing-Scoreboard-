app.controller("navController", function($scope, $state, $stateParams, userService){
$scope.userService = userService
// Logs out user and shows home page
$scope.logOut = function () {
  userService.logOut();
}
  //dashboard returns user to edit profile and add/edit routes
  $scope.dashboardClick = function(){
    userService.dashBoard();
  }
})