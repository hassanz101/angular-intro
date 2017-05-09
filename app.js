console.log('testing 123');

var myApp = angular.module("myApp", []);

myApp.controller("myFirstController", function(){
  //view model
  var vm = this;

  vm.zeinabOne = 'this is zeinab';
  vm.zeinabTwo = 'this is also zee';

  vm.name = 'the magic thing';
  
});
