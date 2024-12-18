import database from "infra/database.js";

async function status(request, response) {
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

  // minha implantação das consultas

  // const [maxConnections, version, openedConnections] = await database.query(
  //   "SHOW max_connections; SHOW server_version; SELECT count(*) AS opened_connections FROM pg_stat_activity;",
  // );

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: databseVersionValue,
        max_connections: parseInt(databaseMaxConnectionsValue),
        opened_connections: databaseOpenedConnectionsValue,
      },
    },

    // meus retornos da api
    // max_connections: Number(maxConnections.rows[0].max_connections),
    // version: version.rows[0].server_version,
    // opened_connections: Number(openedConnections.rows[0].opened_connections),
  });
}

export default status;
