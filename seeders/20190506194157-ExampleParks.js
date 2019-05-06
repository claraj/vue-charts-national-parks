'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    let exampleParks = [
      {name: 'Great Smoky Mountains National Park', annualVisitors: 11421200},
      {name:'Grand Canyon National Park', annualVisitors: 6380495},
      {name: 'Rocky Mountain National Park', annualVisitors:4590493},
      {name:'Zion National Park', annualVisitors:	4320033},
      {name: 'Yellowstone National Park', annualVisitors:	4115000},
      {name: 'Yosemite National Park', annualVisitors: 4009436},
      {name: 'Acadia National Park', annualVisitors: 3537575},
      {name: 'Grand Teton National Park', annualVisitors: 3491151},
      {name: 'Olympic National Park', annualVisitors: 3104455},
      {name: 'Glacier National Park', annualVisitors: 2965309}
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
