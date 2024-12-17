import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  // console.time("TempoDasOperações");
  const [maxConnections, version, openedConnections] = await database.query(
    "SHOW max_connections; SHOW server_version; SELECT count(*) AS opened_connections FROM pg_stat_activity;",
  );
  // console.timeEnd("TempoDasOperações");

  response.status(200).json({
    updated_at: updatedAt,
    max_connections: Number(maxConnections.rows[0].max_connections),
    version: version.rows[0].server_version,
    opened_connections: Number(openedConnections.rows[0].opened_connections),
  });
}

export default status;
