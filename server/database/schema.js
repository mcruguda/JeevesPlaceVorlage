const USER_TABLE = `
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY NOT NULL,
        firstname TEXT NOT NULL,
        lastname TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL
    );
`;

module.exports = { USER_TABLE };
