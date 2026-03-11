# 👕 StyleFlow - Sistema de Gestão de E-commerce

O **StyleFlow** é uma solução de back-end desenvolvida para uma loja de roupas em expansão que procura substituir controlos manuais por um sistema centralizado. O foco do projeto é garantir o controlo rigoroso de acessos, gestão de fornecedores, monitorização de inventário e registo automatizado de vendas.

---

## 🛠️ Stack Tecnológica

- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express.js](https://expressjs.com/)
- **Banco de Dados:** [PostgreSQL](https://www.postgresql.org/) (Relacional)
- **Autenticação:** JWT (JSON Web Tokens)
- **Segurança:** Criptografia de senhas com `bcrypt`
- **Padronização:** API RESTful (Verbos HTTP e Status Codes)

---

## 📋 Requisitos Funcionais

### 1. Autenticação e Gestão de Utilizadores

- **Cadastro:** Criação de conta com armazenamento seguro de senha (hash).
- **Login:** Autenticação de credenciais com geração de Token JWT.
- **Níveis de Acesso:** Controlo de permissões (Role-Based Access Control) onde apenas administradores podem gerir fornecedores.

### 2. Gestão de Fornecedores

- **Operações CRUD:** Listagem, registo, atualização e remoção.
- **Regra de Negócio:** Bloqueio de duplicidade de CNPJ no sistema.

### 3. Controlo de Stock (Produtos)

- **Vínculo:** Todo produto deve estar associado a um fornecedor ativo.
- **Alerta de Reposição:** Rota específica para listar produtos com stock abaixo de 5 unidades.

### 4. Fluxo de Vendas

- **Processamento:** Verificação de disponibilidade, subtração automática de stock e registo da transação.
- **Relatórios:** Listagem detalhada de vendas realizadas por período.

---

## 📊 Estrutura da Base de Dados

A base de dados PostgreSQL é composta pelas seguintes entidades:

- **Users:** `id, nome, email, senha, cargo/role`
- **Suppliers:** `id, nome_fantasia, cnpj, contato`
- **Products:** `id, nome, tamanho, cor, preco_custo, preco_venda, quantidade, id_fornecedor`
- **Sales:** `id, data, id_usuario, total`
- **Sale_Items:** `id, id_venda, id_produto, quantidade, preco_unitario`

---

## 👥 Organização das Equipas

O projeto foi dividido em módulos específicos para cada grupo de desenvolvedores:

| Módulo                 | Desenvolvedores                          |
| :--------------------- | :--------------------------------------- |
| **Modelagem de Dados** | Mauricio, Igo, Adelito                   |
| **Autenticação**       | Victor, Arthur, Erick Rocha, Adelito     |
| **Fornecedores**       | Elvira, Alisson, Erick Bacelar, Adelito  |
| **Stock (Produtos)**   | Alex, Geselle, Gabriel, Adelito          |
| **Vendas**             | Nayra, Lucas, Iago, Pedro Ariel, Adelito |

---

## 📅 Cronograma

- **Entrega da Base de Dados:** 06 de Março de 2026
- **Entrega Final do Projeto:** 13 de Março de 2026
- **Alinhamentos:** Diariamente após as 22:00h.

---

## ⚙️ Como Executar o Projeto (Desenvolvimento)

1. **Clonar o repositório:**
   ```bash
   git clone [https://github.com/seu-usuario/styleflow.git](https://github.com/seu-usuario/styleflow.git)
   ```
