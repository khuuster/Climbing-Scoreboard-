var app = angular.module("theProj", ["ui.router"]);
//creates a module that contains the views 

app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/")

  $stateProvider

    .state("app",{
      abstract: true,
      url:"",
      templateUrl: "./views/app-container.html"
    })

    .state("app.home", {
      url: "/",
      templateUrl: "./views/home.html",
      controller: "dashboardController"
    })
    // signup form
    .state("app.signUp", {
      url: "/signup",
      templateUrl: "./views/signup.html",
      controller: "userController"
    })
    .state("app.editUser", {
      url: "/editUser/:id",
      templateUrl: "./views/editUser.html",
      controller: "userController"
    })

    // show list
    .state("app.users", {
      url: "/users",
      templateUrl: "./views/users.html",
      controller: "userController"
    })
      // shows individual user
      .state("app.user", {
        url: "/users/:id",
        templateUrl: "./views/user.html",
        controller: "userController"
      })


    // show list
    .state("app.userCard", {
      url: "/dashboard/:id",
      templateUrl: "./views/dashboard.html",
      controller: "userController"
    })

    // routeInfo
    .state("app.routeInfo", {
      url: "/routeInfo/:id",
      templateUrl: "./views/routeInfo.html",
      controller: "userController"
    })

    //dashboard
    .state("app.dashboard", {
      url: "/dashboard/:id",
      templateUrl: "./views/dashboard.html",
      controller: "dashboardController"
    })

    //routeForm
    .state("app.routeForm", {
      url: "/routeForm/",
      templateUrl: "./views/routeForm.html",
      controller: "userController"
    })
    //deleteConfirm
    .state("app.deleteConfirm", {
      url: "/delete/",
      templateUrl: "./views/deleteConfirm.html",
      controller: "userController"
    })
});