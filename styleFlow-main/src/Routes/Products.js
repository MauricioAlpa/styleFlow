import { Products } from "../Models/Products.js";
import { productsControllers } from "../Controllers/ProductController.js";
import { Suppliers } from "../Models/Suppliers.js";
import { Router } from "express";
const route = Router();
const express = require("express");

//cadastrar produtos
route.post("/adicionarProduto", (req, res) => {
    const {nome, tamanho, cor, preco_custo, preco_venda, quantidade, id_fornecedor} = req.body;
    if(!nome || !tamanho || !cor || !preco_custo || !preco_venda || !quantidade || id_fornecedor){
        return res.status(400).json({
            mensagem:"Dados do produto incompletos."
        });
    }

    const fornecedorExiste = Suppliers.find(f => f.id == id_fornecedor);
    if(!fornecedorExiste){
        return res.status(404).json({
            mensagem: "Fornecedor não encontrado."
        });
   }

    const novoProduto = new Products(nome, tamanho, cor, preco_custo, preco_venda, quantidade, id_fornecedor);
    productsControllers.adicionarProduto(novoProduto);
    res.status(201).json(novoProduto);
});

//listar produtos
route.get("/listarProduto", (req, res) => {
    res.status(200).json(Produto);
});

//Rota de Alerta
route.get("/alerta", (req, res) => {
    const estoqueBaixo = productsControllers.filter(produto => produto.quantidade < 5);
    res.status(200).json(estoqueBaixo);
})

export default route;