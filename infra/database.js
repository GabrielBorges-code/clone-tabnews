import { Client } from "pg";

async function query(queryObject) {
  let client;

  try {
    client = await getNewClient();
    const result = await client.query(queryObject);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await client.end();
  }
}

async function getNewClient() {
  const client = new Client({
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    port: process.env.POSTGRES_PORT,
    host: process.env.POSTGRES_HOST,
    password: process.env.POSTGRES_PASSWORD,
    ssl: false,
  });

  await client.connect();
  return client;
}

export default { query, getNewClient };
