
# Aplicação CRUD com React

Esta é uma aplicação CRUD (Create, Read, Update, Delete) simples construída usando React. Permite aos usuários gerenciar uma lista de produtos interagindo com uma API RESTful.

## Início Rápido

### Pré-requisitos

Certifique-se de ter o seguinte instalado:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Instalação

1. Clone o repositório:

   ```bash
   git clone [URL_do_repositorio]
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd [diretorio_do_projeto]
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

## Uso

1. Inicie o servidor de desenvolvimento do React:

   ```bash
   npm start
   ```

   A aplicação estará acessível em [http://localhost:3000](http://localhost:3000).

2. A aplicação consiste em um formulário para adicionar ou editar produtos e uma tabela para exibir a lista de produtos.

3. Interaja com o formulário para adicionar, editar ou excluir produtos.

## Recursos

- **Componente Formulario:**
  - Manipula a entrada do usuário para os detalhes do produto.
  - Comunica-se com a API RESTful para operações CRUD.

- **Componente Tabela:**
  - Exibe uma tabela de produtos.
  - Permite aos usuários selecionar um produto para edição ou exclusão.

- **Interação com a API:**
  - Utiliza a Fetch API para interagir com uma API RESTful.
  - Pontos de extremidade:
    - `GET http://localhost:8080/listar`: Recupera a lista de produtos.
    - `POST http://localhost:8080/cadastrar`: Adiciona um novo produto.
    - `PUT http://localhost:8080/alterar`: Atualiza um produto existente.
    - `DELETE http://localhost:8080/remover/:codigo`: Remove um produto pelo código.
