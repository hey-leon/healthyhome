(function () {
  'use strict';

  angular
    .module('app')
    .controller('Home', Home)

  function Home () {
    let Home = this

    const MONTHS = [
      'Feb', 'Mar', 'Apr',
      'May', 'Jun', 'Jul'
    ]

    Home.air = {
      labels: MONTHS,
      data: [
        [ 80, 85, 84, 83, 86, 90 ],
        [ 6, 4, 5, 8, 10, 6 ],
        [ 14, 8, 8, 4, 5, 7 ]
      ],
      series: ['Clean Air', 'Methane', 'Hydrocarbons'],
      colours: [ '#388E3C', '#FBC02D', '#D50000' ],
      quality: 'Very High',
      hydrocarbons: 'Moderately Safe'
    }

    Home.water = {
      labels: MONTHS,
      data: [
        [ 80, 85, 84, 83, 86, 90 ],
        [ 6, 4, 5, 8, 10, 6 ],
        [ 96, 90, 94, 88, 88, 86 ]
      ],
      series: ['Clean Water', 'Fracking Fluids', 'Water Volume'],
      colours: [ '#00E5FF', '#FBC02D', '#01579B' ],
      quality: 'Relatively High',
      fracking: 'Moderately Safe'
    }


  }
}());
