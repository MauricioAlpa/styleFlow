import { Router } from "express";
import { User } from "../Models/Users.js";
import { UserController } from "../Controllers/UserController.js";

const userController = new UserController();

const route = Router();

route.get("/listarusuarios", (req, res) => {
  res.status(200).json({ message: "Lista de usuários." });
});

route.post("/cadastrarusuario", async (req, res) => {
  const user = new User(
    req.body.nome,
    req.body.email,
    req.body.senha,
    req.body.role,
  );
  const result = await userController.adicionarUser(user);
  if (result.length > 0) {
    result.status(201).json({ message: "Usuário criado com sucesso!" });
  } else {
    res.status(404).json({ message: "Erro ao criar usuário!" });
  }
});

export default route;
