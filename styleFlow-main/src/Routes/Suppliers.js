import { Router } from "express";

const route = Router();

route.get("/listarfornecedores", (req, res) => {
  res.status(200).json({ message: "Lista de Fornecedores." });
});

route.post("/cadastrarfornecedor", (req, res) => {
  res.status(201).json({ message: "Fornecedor criado com sucesso!" });
});

route.delete("/deletarfornecedor/:id", (req, res) => {
  res.status(200).json({ message: "Fornecedor deletado com sucesso!" });
});

route.put("/atualizarfornecedor", (req, res) => {
  res.status(200).json({ message: "Fornecedor atualizado com sucesso!" });
});

export default route;
