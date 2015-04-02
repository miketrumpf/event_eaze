"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("events", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: {
        type: DataTypes.STRING
      },
      city_name: {
        type: DataTypes.STRING
      },
      start_time: {
        type: DataTypes.INTEGER
      },
      venue_name: {
        type: DataTypes.STRING
      },
      venue_address: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.TEXT
      },
      latitude: {
        type: DataTypes.INTEGER
      },
      longitude: {
        type: DataTypes.INTEGER
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("events").done(done);
  }
};