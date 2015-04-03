"use strict";
module.exports = function(sequelize, DataTypes) {
  var bars = sequelize.define("bars", {
    name: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    text: DataTypes.TEXT,
    hours: DataTypes.STRING,
    streetAddress: DataTypes.STRING,
    cityAddress: DataTypes.STRING,
  }, {

    timestamps: false, 
    
    classMethods: {
      associate: function(models) {
        bars.belongsToMany(models.events, {
          through: "events_bars",
          foreignKey: "bar_id"
        });
      } 
    }
  });
  return bars;
}; 