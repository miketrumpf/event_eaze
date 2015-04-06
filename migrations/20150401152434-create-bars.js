"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("bars", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
      },
      rating: {
        type: DataTypes.INTEGER
      },
      text: {
        type: DataTypes.TEXT
      },
      hours: {
        type: DataTypes.STRING
      },
      streetAddress: {
        type: DataTypes.STRING
      },
      cityAddress: {
        type: DataTypes.STRING
      },
      latitude: {
        type: DataTypes.STRING
      },
      longitude: {
        type: DataTypes.STRING
      },
      event_id: {
        type: DataTypes.INTEGER
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("bars").done(done);
  }
};