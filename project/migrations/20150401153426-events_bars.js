"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("events_bars", {
      event_id: {
        type: DataTypes.INTEGER
      },
      bar_id: {
        type: DataTypes.INTEGER
      }
    })
    done(done);
  },

  down: function(migration, DataTypes, done) {
    migration.dropTable("events_bars").done(done);
  }
};
