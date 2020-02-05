const Sequelize = require("sequelize");
const sequelize = require("../db");
const Guest = require("../guest/model");

const Event = sequelize.define(
  "event",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    picture: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  },
  { timestamps: false }
);

Guest.belongsTo(Event);
Event.hasMany(Guest);

module.exports = Event;
