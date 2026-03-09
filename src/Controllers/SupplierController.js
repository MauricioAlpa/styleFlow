export class Suppliers {
  async adicionarSupplier({ fornecedor }) {
    const query = ` INSERT INTO suppliers (nome_fantasia, cnpj, contato) VALUES ($1, $2, $3) RETURNING id, nome_fantasia, cnpj, contato `;
    const values = [
      fornecedor.nome_fantasia,
      fornecedor.cnpj,
      fornecedor.contato,
    ];
    try {
      const result = await db.query(query, values);
      return result.rows[0];
    } catch (error) {
      return error.message;
    }
  }
}

async function listarSuppliers() {
  const query = `SELECT * FROM suppliers;`;
  try {
    const result = await db.query(query);
    return result.rows;
  } catch (error) {
    return error.message;
  }
}

async function deletarSupplier({ id }) {
  const query = `DELETE FROM suppliers WHERE id = $1 RETURNING id`;
  const values = [id];
  try {
    const result = await db.query(query, values);
    return result.rows[0];
  } catch (error) {
    return error.message;
  }
}

async function atualizarSupplier({ fornecedor }) {
  const query = `UPDATE suppliers SET nome_fantasia = $1, cnpj = $2, contato = $3 WHERE id = $4 RETURNING id, nome_fantasia, cnpj, contato`;
  const value = [
    fornecedor.nome_fantasia,
    fornecedor.cnpj,
    fornecedor.contato,
    fornecedor.id,
  ];
  try {
    const result = await db.query(query, value);
    return result.rows[0];
  } catch (error) {
    return error.message;
  }
}
