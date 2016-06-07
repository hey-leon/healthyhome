(function () {
  'use strict';

  angular
    .module('app')
    .service('main', main)

  function main () {
    let main = this

    // Properties
    main.listen = { user: user, intent: intent }

    // Methods
    function user () { }

    function intent () { }

    // init
    // TODO --- check for user signed in

  }
}());
