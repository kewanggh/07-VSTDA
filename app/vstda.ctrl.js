(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope', '$filter'];

    /* @ngInject */
    function MainCtrl($scope, $filter) {
      var vm=this;
      $scope.newItem = [];
      $scope.items = [];
      $scope.addItem = function(newItem){
        newItem.done = false;
        $scope.items.push(newItem);
        $scope.newItem = [];
        console.log($scope.items);
};
$scope.sort = function(order){
  $scope.items = $filter('orderBy')($scope.items, order);
};


        activate();

        function activate() {
          console.log("hi");
        }


    }
})();
