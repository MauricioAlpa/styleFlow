export class User {
  async adicionarUsuario({ usuario }) {
    const query = `INSERT INTO users (nome, email, senha, role) VALUES ($1, $2, $3, $4)`;
    const values = [usuario.nome, usuario.email, usuario.senha, usuario.role];
    try {
      const result = await db.query(query, values);
      return result;
    } catch (error) {
      return error.message;
    }
  }

  async listarUsuarios() {
    const query = "SELECT * FROM users";
    try {
      const result = await db.query(query);
      return result.rows;
    } catch (error) {
      return error.message;
    }
  }
}
