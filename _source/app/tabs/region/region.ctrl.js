(function () {
  'use strict';

  angular
    .module('app')
    .controller('Region', Region)

  function Region () {
    let Region = this

    const MONTHS = [
      'Feb', 'Mar', 'Apr',
      'May', 'Jun', 'Jul'
    ]

    Region.states = [
      '( All )', 'QLD', 'NSW', 'VIC',
      'TAS', 'NT', 'SA', 'WA', 'ACT'
    ]

    Region.areas = [
      '( All )', 'Home Region', 'North Queensland', 'South East QLD',
      'North Coast NSW', 'Central Coast NSW', 'Blue Mountains'
    ]

    Region.towns = [
      '( All )', 'Home Town', 'ETC'
    ]

    Region.air = {
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

    Region.water = {
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
