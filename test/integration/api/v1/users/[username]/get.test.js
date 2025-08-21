import { version as uuidVersion } from "uuid";
import orchestrator from "test/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
  await orchestrator.runPendingMigrations();
});

describe("GET /api/v1/users/[username]", () => {
  describe("Anonymous user", () => {
    test("With exact case match", async () => {
      const response1 = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "MesmoCase",
          email: "mesmo.case@curso.dev",
          password: "testpassword",
        }),
      });

      expect(response1.status).toBe(201);

      const response2 = await fetch(
        "http://localhost:3000/api/v1/users/MesmoCase",
        {
          method: "GET",
        },
      );

      expect(response2.status).toBe(200);

      const response2Body = await response2.json();

      expect(response2Body).toEqual({
        id: response2Body.id,
        username: "MesmoCase",
        email: "mesmo.case@curso.dev",
        password: "testpassword",
        create_at: response2Body.create_at,
        update_at: response2Body.update_at,
      });

      expect(uuidVersion(response2Body.id)).toBe(4);
      expect(Date.parse(response2Body.create_at)).not.toBeNaN();
      expect(Date.parse(response2Body.update_at)).not.toBeNaN();
    });

    test("With case mismatch", async () => {
      const response1 = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "CaseDiferente",
          email: "case.Diferente@curso.dev",
          password: "testpassword",
        }),
      });

      expect(response1.status).toBe(201);

      const response2 = await fetch(
        "http://localhost:3000/api/v1/users/casediferente",
        {
          method: "GET",
        },
      );

      expect(response2.status).toBe(200);

      const response2Body = await response2.json();

      expect(response2Body).toEqual({
        id: response2Body.id,
        username: "CaseDiferente",
        email: "case.Diferente@curso.dev",
        password: "testpassword",
        create_at: response2Body.create_at,
        update_at: response2Body.update_at,
      });

      expect(uuidVersion(response2Body.id)).toBe(4);
      expect(Date.parse(response2Body.create_at)).not.toBeNaN();
      expect(Date.parse(response2Body.update_at)).not.toBeNaN();
    });

    test("With no existent username", async () => {
      const response2 = await fetch(
        "http://localhost:3000/api/v1/users/UsuarioInexistente",
        {
          method: "GET",
        },
      );

      expect(response2.status).toBe(404);

      const response2Body = await response2.json();

      expect(response2Body).toEqual({
        name: "NotFoundError",
        message: "O username informado não foi encontrado no sistema.",
        action: "Verifique se o username está digitado corretamento.",
        status_code: 404,
      });
    });
  });
});
