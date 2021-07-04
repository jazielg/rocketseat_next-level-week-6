import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // Receber o token
  const authToken = request.headers.authorization;

  // Vaidar se token esta preenchido
  if (!authToken) {
    return response.status(401).end();
  }

  // Validar o token
  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(
      token,
      "7a78fff8dcd6ab9bc156d7dde8a4deca"
    ) as IPayload;

    // Recuperar informações do usuário
    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).end();
  }
}
