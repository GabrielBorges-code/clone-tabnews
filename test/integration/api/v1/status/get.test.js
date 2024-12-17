test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  expect(responseBody).toHaveProperty("updated_at");
  expect(responseBody).toHaveProperty("max_connections");
  expect(responseBody).toHaveProperty("version");
  expect(responseBody).toHaveProperty("opened_connections");

  expect(responseBody.updated_at).toBeDefined();
  expect(responseBody.max_connections).toBeDefined();
  expect(responseBody.version).toBeDefined();
  expect(responseBody.opened_connections).toBeDefined();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(parsedUpdatedAt).toEqual(responseBody.updated_at);
});
