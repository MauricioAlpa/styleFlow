import db from "../db.js";
export const createSale = async (req, res) => {
    const { produtos } = req.body;
    const id_usuario = req.user.id;
    try {
        let total = 0;
        for (let item of produtos) {
            const produto = await db.query(
                "SELECT * FROM produtos WHERE id = $1",
                [item.id_produto]
            );
            if (produto.rows.length === 0) {
                return res.status(404).json({ erro: "Produto não encontrado" });
            }
            if (produto.rows[0].quantidade < item.quantidade) {
                return res.status(400).json({ erro: "Estoque insuficiente" });
            }
            total += produto.rows[0].preco_venda * item.quantidade;
        }
        const venda = await db.query(
            "INSERT INTO vendas (data, id_usuario, total) VALUES (NOW(), $1, $2) RETURNING *",
            [id_usuario, total]
        );
        const id_venda = venda.rows[0].id;
        for (let item of produtos) {
            const produto = await db.query(
                "SELECT preco_venda FROM produtos WHERE id = $1",
                [item.id_produto]
            );
            await db.query(
                `INSERT INTO itens_venda 
                (id_venda, id_produto, quantidade, preco_unitario) 
                VALUES ($1,$2,$3,$4)`,
                [id_venda, item.id_produto, item.quantidade, produto.rows[0].preco_venda]
            );
            await db.query(
                "UPDATE produtos SET quantidade = quantidade - $1 WHERE id = $2",
                [item.quantidade, item.id_produto]
            );
        }
        res.status(201).json({
            mensagem: "Venda registrada com sucesso",
            venda: venda.rows[0]
        });
    } catch (error) {
        res.status(500).json({
            erro: error.message
        });
    }
};

export const getSales = async (req, res) => {
    try {
        const vendas = await db.query(
            "SELECT * FROM vendas ORDER BY data DESC"
        );
        res.status(200).json(vendas.rows);
    } catch (error) {
        res.status(500).json({
            erro: error.message
        });
    }
};

export const getSalesByPeriod = async (req, res) => {
    const { inicio, fim } = req.query;
    try {
        const vendas = await db.query(
            `SELECT * FROM vendas
             WHERE data BETWEEN $1 AND $2
             ORDER BY data DESC`,
            [inicio, fim]
        );
        res.status(200).json(vendas.rows);
    } catch (error) {
        res.status(500).json({
            erro: error.message
        });
    }
};
