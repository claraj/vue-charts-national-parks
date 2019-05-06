'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    let exampleParks = [
      {name: 'Great Smoky Mountains', annualVisitors: 11421200},
      {name:'Grand Canyon', annualVisitors: 6380495},
      {name: 'Rocky Mountain', annualVisitors:4590493},
      {name: 'Zion', annualVisitors:	4320033},
      {name: 'Yellowstone', annualVisitors:	4115000},
      {name: 'Yosemite', annualVisitors: 4009436},
      {name: 'Acadia', annualVisitors: 3537575},
      {name: 'Grand Teton', annualVisitors: 3491151},
      {name: 'Olympic', annualVisitors: 3104455},
      {name: 'Glacier', annualVisitors: 2965309}
    ]

    var parksDates = exampleParks.map(function(s) { 
      s.createdAt = new Date(), 
      s.updatedAt = new Date()
      return s 
    })

    return queryInterface.bulkInsert('NationalParks',  parksDates)

  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('NationalParks', null, {});
  }
};
