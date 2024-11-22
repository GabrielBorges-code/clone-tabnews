function status(request, response) {
  response
    .status(200)
    .json({ frase: "Aluno do curso.dev, sou uma pessoa acima da média" });
}

export default status;
