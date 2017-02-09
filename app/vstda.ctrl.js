(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$filter'];

    /* @ngInject */
    function MainCtrl($filter) {
      var vm=this;

      vm.newItem = [];
      vm.items = [];
      vm.addItem = function(newItem){
        newItem.done = false;
        vm.items.push(newItem);
        vm.newItem = [];
        console.log(vm.items);
      };
      vm.sort = function(order){
      vm.items = $filter('orderBy')(vm.items, order);
      };

    }
})();
