# Node.js

Se o seu objetivo está alinhado com o back-end, e você deseja construir arquiteturas escaláveis e simples para a web utilizando uma linguagem flexível e popular, essa é a sua missão.

Material complementar: `https://www.notion.so/Mission-Node-js-a25b063cc195465180563951d03e2459`

## Aula 01

`https://www.youtube.com/watch?v=OI5ky4hbXy0`

```bash
yarn init -y # iniciar projeto

yarn add typescript -D

yarn tsc --init # criar tsconfig.json

yarn tsc # Converter ts para js

yarn add express
yarn add @types/express -D

yarn add ts-node-dev -D # Instalar e criar script em package.json
yarn dev
```

## Aula 02

`https://www.youtube.com/watch?v=Cp3m6GGa2Sk`

```bash
# Utilizar TypeORM para trabalhar com o banco de dados - https://typeorm.io/#/
yarn add typeorm reflect-metadata sqlite3

# Configurar criando o arquivo `ormconfig.json` e `src/database/index.ts`
# Criar novo script em package.json `"typeorm": "ts-node-dev ./node_modules/typeorm/cli.js"`

# Criar migrações
yarn typeorm migration:create -n CreateUsers

# Rodar migração
yarn typeorm migration:run

# Destruir ultima migração
yarn typeorm migration:revert

# Criar Entidade - Entidade é como uma tabela
yarn typeorm entity:create -n User

# Descomentar algumas opções no tsconfig.json
"strictPropertyInitialization": false,
"experimentalDecorators": true,
"emitDecoratorMetadata": true,

yarn add uuid
yarn add @types/uuid -D
```

## Aula 03

`https://www.youtube.com/watch?v=jRPFAPp4xsM`

```bash
# Tratar exceções
yarn add express-async-errors

# Criar estrutura para Tags
yarn typeorm migration:create -n CreateTags
yarn typeorm migration:run
```

## Aula 04

`https://www.youtube.com/watch?v=xHwiM7W5Rws`

```bash
# https://jwt.io/
yarn add jsonwebtoken
yarn add @types/jsonwebtoken -D

# Criar uma migração para adicionar uma coluna na tabela
yarn typeorm migration:create -n AlterUserAddPassword
yarn typeorm migration:run

# Criptografar senha
yarn add bcryptjs
yarn add @types/bcryptjs -D
```

## Aula 05

`https://www.youtube.com/watch?v=RrlLOWglBcA`

```bash
yarn add class-transformer

yarn add cors
yarn add @types/cors -D
```

### Milhas Extras

- Serviço de email para informar que usuário recebeu um elogio
- Criar Front-end
- Explorar com diferentes arquiteturas
- Erros customizaveis
- Utilizar outro banco de dados
