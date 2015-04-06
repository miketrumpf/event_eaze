"use strict";
module.exports = function(sequelize, DataTypes) {
  var bars = sequelize.define("bars", {
    name: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    text: DataTypes.TEXT,
    hours: DataTypes.STRING,
    streetAddress: DataTypes.STRING,
    cityAddress: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    event_id: DataTypes.INTEGER
  }, {

    timestamps: false, 
    
    classMethods: {
      associate: function(models) {
        bars.belongsTo(models.events, {foreignKey: "event_id"});
      } 
    }
  });
  return bars;
}; 