export class productsControllers{

    async adicionarProduto({ produto }) {
    const query = `INSERT INTO products (nome, tamanho, cor, preco_custo, preco_venda, quantidade, id_fornecedor) VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    const values = [produto.nome, produto.tamanho, produto.cor, produto.preco_custo, produto.preco_venda, produto.quantidade, produto.id_fornecedor];
    try {
      const result = await db.query(query, values);
      return result;
    } catch (error) {
      return error.message;
    }
}

      async listarProduto() {
    const query = "SELECT * FROM products";
    try {
      const result = await db.query(query);
      return result.rows;
    } catch (error) {
      return error.message;
    }
  }

    async alerta() {
        const query = "SELECT * FROM products WHERE quantidade < 5";
        try {
            const result = await db.query(query);
            return result;
        } catch (error){
            return error.message;
        }
    }
}