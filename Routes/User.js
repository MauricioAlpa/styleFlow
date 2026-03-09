import { Router } from "express";

const router = Router();

router.get("/listarusuarios", (req, res) => {
  res.json({ message: "Lista de usuários." });
});

router.post("/cadastrarusuario", (req, res) => {
  res.status(201).json({ message: "Usuário criado com sucesso!" });
});

export default router;
