const Sequelize = require("sequelize");
const databaseUrl =
  process.env.DATABASE_URL ||
  "postgres://postgres:secret@localhost:5432/postgres";
const db = new Sequelize(databaseUrl);

db.sync({ force: false })
  .then(() => console.log("Database Connected."))
  .catch(err => {
    console.error("Unable to fetch", err);
    process.exit(1);
  });

module.exports = db;
