import database from "infra/database";

beforeAll(cleanDatabase);

async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public;");
}

describe("Others Methods /api/v1/migrations", () => {
  describe("Anonymous user", () => {
    test("Returning error 405", async () => {
      const response1 = await fetch("http://localhost:3000/api/v1/migrations", {
        method: "delete",
      });

      expect(response1.status).toBe(405);
    });
  });
});
