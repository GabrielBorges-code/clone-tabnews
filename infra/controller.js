import { InternalServerError, MethodNotAllowedError } from "infra/errors";

function onNoMatchHandler(request, response) {
  const publicErrorObj = new MethodNotAllowedError();
  response.status(publicErrorObj.statusCode).json(publicErrorObj);
}

function onErrorHandler(error, request, response) {
  const publicErrorObj = new InternalServerError({
    statusCode: error.statusCode,
    cause: error,
  });

  console.error(publicErrorObj);
  response.status(publicErrorObj.statusCode).json(publicErrorObj);
}

const controller = {
  errorHandlers: {
    onNoMatch: onNoMatchHandler,
    onError: onErrorHandler,
  },
};

export default controller;
