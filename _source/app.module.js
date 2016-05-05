(function () {
  'use strict'

  angular
    .module('templates', [])

  angular
    .module('app', ['templates', 'ngMaterial'])

    .config(($mdThemingProvider) => {
      $mdThemingProvider.theme('default')
      .primaryPalette('deep-purple')
      .accentPalette('green')
    })

}());
