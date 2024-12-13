import database from "infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");

  console.log("result", result.rows[0]);

  response
    .status(200)
    .json({ frase: "Aluno do curso.dev, sou uma pessoa acima da média" });
}

export default status;
