var app = angular.module("friendsList");

app.controller('MainController', function($scope) {
    $scope.friendArr = ['Bobby', 'Rachel', 'Peter', 'Ben', 'Susie'];
    
     $scope.addFriend = function() {
        $scope.friendArr.push($scope.newFriend);
        $scope.newFriend = '';
     }
});