 "use strict";
module.exports = function(sequelize, DataTypes) {
  var events = sequelize.define("events", {
    title: DataTypes.STRING,
    city_name: DataTypes.STRING,
    start_time: DataTypes.STRING,
    venue_name: DataTypes.STRING,
    venue_address: DataTypes.STRING,
    description: DataTypes.TEXT,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING
  }, {

    timestamps: false,

    classMethods: {
      associate: function(models) {
        events.hasMany(models.bars, {
          foreignKey: "event_id",
          onDelete: "cascade",
          hooks: true
        });
      }
    }
  });
  return events;
}; 