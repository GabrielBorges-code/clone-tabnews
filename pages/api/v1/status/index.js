import database from "infra/database.js";
import { InternalServerError } from "infra/errors";

async function status(request, response) {
  try {
    const updatedAt = new Date().toISOString();

    const databaseVersionResult = await database.query("SHOW server_version;");
    const databseVersionValue = databaseVersionResult.rows[0].server_version;

    const databaseMaxConnectionsResult = await database.query(
      "SHOW max_connections;",
    );

    const databaseMaxConnectionsValue =
      await databaseMaxConnectionsResult.rows[0].max_connections;

    const databaseName = process.env.POSTGRES_DB;

    const databaseOpenedConnectionsResult = await database.query({
      text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
      values: [databaseName],
    });

    const databaseOpenedConnectionsValue =
      databaseOpenedConnectionsResult.rows[0].count;

    response.status(200).json({
      updated_at: updatedAt,
      dependencies: {
        database: {
          version: databseVersionValue,
          max_connections: parseInt(databaseMaxConnectionsValue),
          opened_connections: databaseOpenedConnectionsValue,
        },
      },
    });
  } catch (error) {
    const publicErrorObj = new InternalServerError({
      cause: error,
    });

    console.log("\n Erro dentro do catch do controller status.js");
    console.error(publicErrorObj);
    response.status(500).json(publicErrorObj);
  }
}

export default status;
