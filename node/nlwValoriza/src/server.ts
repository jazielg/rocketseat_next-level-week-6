import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import cors from "cors";

import { router } from "./routes";

import "./database";

const app = express();
app.use(cors());

app.use(express.json());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
);

/**
 * GET => Buscar uma informação
 * POST => Inserir (Criar) uma informação
 * PUT => Alterar uma informação
 * DELETE => Remover um dado
 * PATCH => Alterar uma informação especifica
 */

/**
 * Tipos de paramentros
 * Routes Params => (GET) http://localhost:3000/products/1
 * Query Params => (GET) http://localhost:3000/products?name=teclado&description=mecanico
 * Body Params => (POST, PUT, PATCH) {
 *  "name":"teclado",
 *  "description":"mecanico"
 * }
 */

// Request => Entrando
// Response => Saindo

app.listen(3002, () => console.log("Server is running"));
