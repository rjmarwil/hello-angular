// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require angular
//= require_tree .

(function() {
  angular.module('app', [])
  .controller('MainController', MainController)
  ;

// 5  MainController.$inject = [];
  function MainController() {
    // 6
    var vm = this;

    //1. define first scope variable
    vm.corndog = 'Corn-batter-fried meat tube!';

    //2. define burrito function
    vm.burrito = burrito;

    //4. Add form for adding new foods on the fly
    vm.addFood = addFood;

    //3.
    vm.foods = [
      'Tasty pascetti',
      'Turrito and tators',
      'Funky butt sauce splattered on the wall'
    ];

    function burrito() {
      return 'Burrito with bean and cheese deliciousness!';
    }

    function addFood() {
      vm.foods.push(vm.newFood);
      vm.newFood = '';
    }
  }
})();
