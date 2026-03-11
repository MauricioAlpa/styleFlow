import {pool as db} from '../Config/database.js'

export class Suppliers{
    constructor(nome_fantasia, cnpj, contato){
        this.nome_fantasia = nome_fantasia;
        this.cnpj = cnpj;
        this.contato = contato;
    }

    static async validacao(cnpj){
        const query = `
            SELECT cnpj FROM suppliers
            WHERE cnpj = $1
        `;

        const result = await db.query(query, [cnpj]);

        return result.row[0];
    }

    static async criarSupplier(supplier){
        const query = `INSERT INTO suppliers (nome_fantasia, cnpj, contato) 
        VALUES ($1, $2, $3) 
        RETURNING id, nome_fantasia, cnpj, contato`;

        const values = [supplier.nome_fantasia, supplier.cnpj, supplier.contato];

        const result = await db.query(query, values);

        return result.row[0];
    }
}