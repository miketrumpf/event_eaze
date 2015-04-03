 "use strict";
module.exports = function(sequelize, DataTypes) {
  var events = sequelize.define("events", {
    title: DataTypes.STRING,
    city_name: DataTypes.STRING,
    start_time: DataTypes.INTEGER,
    venue_name: DataTypes.STRING,
    venue_address: DataTypes.STRING,
    description: DataTypes.TEXT,
    latitude: DataTypes.INTEGER,
    longitude: DataTypes.INTEGER
  }, {

    timestamps: false,

    classMethods: {
      associate: function(models) {
        events.belongsToMany(models.bars, {
          through: "events_bars",
          foreignKey: "event_id"
        });
      }
    }
  });
  return events;
}; 