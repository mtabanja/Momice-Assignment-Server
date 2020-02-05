const Sequelize = require("sequelize");
const sequelize = require("../db");

const Guest = sequelize.define(
  "guest",
  {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    dateOfBirth: {
      type: Sequelize.DATE,
      allowNull: true
    },
    gender: {
      type: Sequelize.STRING,
      allowNull: false
    },
    hobbies: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  },
  { timestamps: false }
);

module.exports = Guest;
