const { initializeDatabase } = require("./database/database");

let db;

const initializeAPI = async (app) => {
  db = await initializeDatabase();
  app.get("/api/example", exampleAPI);
};

const exampleAPI = async (req, res) => {
  res.status(200).send("This is an example API");
};

module.exports = { initializeAPI };
