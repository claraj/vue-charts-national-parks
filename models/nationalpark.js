'use strict';
module.exports = (sequelize, DataTypes) => {
  const NationalPark = sequelize.define('NationalPark', {
    name: DataTypes.STRING,
    annualVisitors: DataTypes.INTEGER
  }, {});
  NationalPark.associate = function(models) {
    // associations can be defined here
  };
  return NationalPark;
};