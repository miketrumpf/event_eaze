"use strict";
module.exports = function(sequelize, DataTypes) {
  var bars = sequelize.define("bars", {
    name: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    text: DataTypes.TEXT,
    hours: DataTypes.STRING,
    streetAddress: DataTypes.STRING,
    cityAddress: DataTypes.STRING,
    url: DataTypes.STRING
  }, {

    timestamps: false, 
    
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return bars;
};