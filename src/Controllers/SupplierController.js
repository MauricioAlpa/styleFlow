import { pool as db } from "../Config/database.js";
import { Suppliers } from "../Models/Suppliers.js";

export class SupplierController {
  static async adicionarSupplier(req, res) {
      const {nome_fantasia, cnpj, contato} = req.body;

      const temSupplier = await Suppliers.validacao(cnpj);

      //faz a validacao do CNPJ
      if(temSupplier){
        return res.status(400).json({
          erro: "CNPJ já cadastrado."
        })
      }

      const newSupplier = Suppliers.criarSupplier({
        nome_fantasia,
        cnpj,
        contato
      })

      return res.status(200).json(newSupplier);
  }

  async listarSuppliers() {
    const query = `SELECT * FROM suppliers;`;
    try {
      const result = await db.query(query);
      return result.rows;
    } catch (error) {
      return error.message;
    }
  }

  async deletarSupplier(id) {
    const query = `DELETE FROM suppliers WHERE id = $1 RETURNING id`;
    const values = [id];
    try {
      const result = await db.query(query, values);
      return result.rows[0];
    } catch (error) {
      return error.message;
    }
  }

  async atualizarSupplier({ fornecedor }) {
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
}
