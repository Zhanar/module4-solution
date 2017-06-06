(function(){
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['items'];
  function ItemsController(items){
    var $ctrl = this;
    $ctrl.category = items.data.category;
    $ctrl.items = items.data.menu_items;
  }
})();
