test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  // minha implatação

  // const responseBody = await response.json();

  // expect(responseBody).toHaveProperty("updated_at");
  // expect(responseBody).toHaveProperty("max_connections");
  // expect(responseBody).toHaveProperty("version");
  // expect(responseBody).toHaveProperty("opened_connections");

  // expect(responseBody.updated_at).toBeDefined();
  // expect(responseBody.max_connections).toBeDefined();
  // expect(responseBody.version).toBeDefined();
  // expect(responseBody.opened_connections).toBeDefined();

  const responseBody = await response.json();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(parsedUpdatedAt).toEqual(responseBody.updated_at);

  expect(responseBody.dependencies.database.version).toEqual("16.0");
  expect(responseBody.dependencies.database.max_connections).toEqual(100);
  expect(responseBody.dependencies.database.opened_connections).toEqual(1);
});
