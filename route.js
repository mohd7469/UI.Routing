var myApp = angular.
  module('myApp', [
    'ui.router'
  ]);

myApp.config(function ($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");

  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "home.html"
//      template: "this is home page"
    })
    .state('girls', {
      url: "/girls",
      templateUrl: "girls.html"
//      template: "this is state1"
    })
    .state('boys', {
      url: "/boys",
      templateUrl: "boys.html"
//      template: "this is state2"
    })
    .state('boys.detail', {
      url: "/detail",
      templateUrl: "boys.detail.html",
      controller: 'boysCtrl'
    })
    .state('girls.detail', {
      url: "/detail",
      templateUrl: "girls.detail.html",
      controller: 'girlsCtrl'
    })
});

myApp.controller('boysCtrl', function ($scope) {

  $scope.timing = [
    {
      days: 'monday',
      time: '09:00am - 12:00pm'
    },
    {
      days: 'tuesday',
      time: '09:00am - 12:00pm'
    },
    {
      days: 'wednesday',
      time: '09:00am - 12:00pm'
    }
  ]

});

myApp.controller('girlsCtrl', function ($scope) {


  $scope.timing = [
    {
      days: 'thursday',
      time: '03:00pm - 06:00pm'
    },
    {
      days: 'friday',
      time: '03:00pm - 06:00pm'
    },
    {
      days: 'saturday',
      time: '03:00pm - 06:00pm'
    }
  ]

});
