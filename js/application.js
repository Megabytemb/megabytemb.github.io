var app = angular.module('BlargApp', ['ngMaterial']);

app.run(function() {
    $("h1").addClass('md-title');
});

app.controller('AppCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
    $scope.toggleSidenav = function (menuId) {
        $mdSidenav(menuId).toggle();
    };

}]);