app.controller("dashboardController", function ($scope, $state, $stateParams, userService) {
// hides "incorrect login" upon initial page load
  $scope.loginIncorrect = true;
//login verfication fucntion, shwos "incorrect login" if userName/password is false
  $scope.login = function () {
    $scope.loginIncorrect = userService.loginVerify($scope.emailLogin, $scope.passwordLogin)
  }

})



