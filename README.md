# API REST usando Serverless

Projeto CRUD de uma API feita em Node.js e TypeScript, usando GraphQL com MongoDB, utilizado para adicionar, remover e consultar informações sobre videos e categorias criadas no projeto.

# Tecnologias usadas

- Node.js
- TypeScript
- GraphQL
- TypeGraphQL
- MongoDB
- Apollo Server
- TypeDI

# Criando o projeto

Este estudo foi focado para ser utilizado com o MongoDB e por essa questão estou usando o Cluster criado do portal do MongoDB.

### Requisitos

- Node.js
- Uma conta na [MongoDB](https://www.mongodb.com/cloud)

### Rodando o projeto

1. Use o Yarn para instalar os pacotes necessários `yarn install`
2. Crie um Cluster no [MongoDB](https://www.mongodb.com/cloud)
3. Habilite o seu IP no `Network Access` do portal do MongoDB.
4. Acesse o Cluster no portal do MongoDB e pegue as credenciais de acesso, crie um arquivo `.env` na raiz do projeto seguindo o mesmo formato do arquivo `.env.example` do repositório.
5. Use `yarn dev` para iniciar o projeto e teste na URL `http://localhost:4100/`
6. Para testar os chamadas ao GraphQL use o `examples.gql` do repositório como referência.