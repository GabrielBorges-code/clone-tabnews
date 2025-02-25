import database from "infra/database";

beforeAll(cleanDatabase);

async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public;");
}

test("Others Methods to /api/v1/migrations should return 405", async () => {
  const response1 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "delete",
  });

  expect(response1.status).toBe(405);
});
