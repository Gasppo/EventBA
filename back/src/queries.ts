import { Pool } from "pg";

const pool = new Pool({
  user: "gaspo",
  password: "Cacatua24",
  database: "api",
  host: "localhost",
  port: 5432,
});

export const getUsers = (request: any, response: any) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

export const getUserById = (request: any, response: any) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

export const registerUser = (request: any, response: any) => {
  const { username, email, password } = request.body;
  pool.query(
    "INSERT INTO users (username, email, password) VALUES ($1, $2, $3);",
    [username, email, password],
    (error, results: any) => {
      if (error) {
        throw error;
      }

      response.status(201).send(`User ${username} added correctly\n`);
      console.log(`User ${username} added correctly`);
    }
  );
};

export const updateUser = (request: any, response: any) => {
  const id = parseInt(request.params.id);
  const { name, email, password } = request.body;

  pool.query(
    "UPDATE users SET username = $1, email = $2, password = $3 WHERE id = $4",
    [name, email, password, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

export const deleteUser = (request: any, response: any) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};
