(function () {
  'use strict';

  angular
    .module('app')
    .controller('App', App)

  function App () {
    let App = this

    App.components = {
      tabs: 'app/tabs/tabs.tpl.html'
    }

  }
}());
