const { Client } = require("pg");
const { USER_TABLE } = require("./schema");
const jeevesDbConfig = new Client({
  user: process.env.DB_USER || "jeevesUser",
  password: process.env.DB_PASSWORD || "SuperSecret123",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || "5432",
  database: process.env.DB || "jeevesDB",
});

const initializeDatabase = async () => {
  const client = new Client(jeevesDbConfig);
  try {
    await client.connect();
    await databaseQuery(client, USER_TABLE);
    console.log("PostgreSQL Connection opened.");
    return client;
  } catch (e) {
    console.error("Connection to Postgres failed", e);
    return;
  }
};

const databaseQuery = async (db, query) => {
  try {
    const result = await db.query(query);
    return result.rows;
  } catch (e) {
    console.error("There was an error when trying to execute Query", e);
    return;
  }
};

module.exports = { initializeDatabase };
