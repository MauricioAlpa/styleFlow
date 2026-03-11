import { Router } from "express";
import { SupplierController } from "../Controllers/SupplierController";

const route = Router();

route.get("/listarfornecedores", SupplierController.listarSuppliers);

route.post("/cadastrarfornecedor", SupplierController.adicionarSupplier)

route.delete("/deletarfornecedor/:id", SupplierController.deletarSupplier);

route.put("/atualizarfornecedor", SupplierController.atualizarSupplier);

route.get("/findsupplier", SupplierController.findSupllier); //buscar fornecedor pelo cpnj

export default route;
