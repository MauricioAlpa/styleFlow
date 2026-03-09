# StyleFlow - Scripts de Tabelas

## Tabela de Usuários
Armazena as informações dos usuários do sistema.

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    role VARCHAR(50)
);
```

## Tabela de Fornecedores
Armazena os dados dos fornecedores parceiros.

```sql
CREATE TABLE suppliers (
    id SERIAL PRIMARY KEY,
    nome_fantasia VARCHAR(150) NOT NULL,
    cnpj VARCHAR(18) UNIQUE,
    contato VARCHAR(100)
);
```

## Tabela de Produtos (Estoque)
Gerencia o inventário de produtos e os vincula aos fornecedores.

```sql
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    tamanho VARCHAR(20),
    cor VARCHAR(30),
    preco_custo DECIMAL(10, 2),
    preco_venda DECIMAL(10, 2),
    quantidade INTEGER DEFAULT 0,
    id_fornecedor INTEGER REFERENCES suppliers(id)
);
```

## Tabela de Vendas
Registra as transações de vendas com vínculo ao usuário responsável.

```sql
CREATE TABLE sales (
    id SERIAL PRIMARY KEY,
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_usuario INTEGER REFERENCES users(id),
    total DECIMAL(10, 2) DEFAULT 0.00
);
```

## Tabela de Itens da Venda
Armazena os itens individuais adicionados a cada venda.

```sql
CREATE TABLE sale_items (
    id SERIAL PRIMARY KEY,
    id_venda INTEGER REFERENCES sales(id) ON DELETE CASCADE,
    id_produto INTEGER REFERENCES products(id),
    quantidade INTEGER NOT NULL,
    preco_unitario DECIMAL(10, 2) NOT NULL
);
```