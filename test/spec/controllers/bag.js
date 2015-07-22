'use strict';

describe('Controller: BagCtrl', function () {

  // load the controller's module
  beforeEach(module('astoreApp'));

  var BagCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BagCtrl = $controller('BagCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BagCtrl.awesomeThings.length).toBe(3);
  });
});
