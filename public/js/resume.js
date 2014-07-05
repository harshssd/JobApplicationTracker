/**
 * Created by harsha on 7/4/14.
 */

var app = angular.module('jobApp', []);

app.controller('ResumeController', function ($scope) {
    $scope.resume = {};
    $scope.resume.objective = "Harshaghgh";

    alert($scope.resume.objective);

    $scope.saveObjective = function(){
//        alert($scope.resume.objective);
        console.log("Something");
    };
});
