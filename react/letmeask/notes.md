# ReactJS

Se o seu objetivo está alinhado com o front-end, e você deseja construir interfaces modernas e reativas na web utilizando uma biblioteca modular e escalável, essa é a sua missão.

Material complementar: `https://www.notion.so/Mission-ReactJS-f01ae1ba0f8148ad8f1defbf990be484`

## Aula 01

`https://www.youtube.com/watch?v=sjbhkDo_3iI`

```bash
# Iniciar projeto React
yarn create react-app letmeask --template typescript

yarn add firebase

yarn start
```

## Aula 02

`https://www.youtube.com/watch?v=xl1cZUI1HrU`

```bash
yarn add node-sass@5.0.0

yarn add react-router-dom

yarn add @types/react-router-dom -D
```

## Aula 03

`https://www.youtube.com/watch?v=-w6Hb0YVXCs`

```bash
# Biblioteca de Toast (Notificação)
https://react-hot-toast.com/
```

## Aula 04

`https://www.youtube.com/watch?v=TwLOaZAFPWY`

```bash
# Componente para modal
https://github.com/reactjs/react-modal
```

## Aula 05

`https://www.youtube.com/watch?v=d45eR43gZ7o`

```bash
# https://www.npmjs.com/package/classnames
yarn add classnames
```

### Fazer deploy no Firebase

`https://create-react-app.dev/docs/deployment/#firebase`

```bash
# Instalar Firebase na maquina
npm install -g firebase-tools

# Configurar Firebase no projeto
firebase login # Logar na conta
firebase init # Iniciar configuração

yarn build
firebase deploy
```

Acessar site `https://letmeask-5d504.web.app`

### Desafios

- Responsividade
- Tema dark
- Versão PWA
- Testar com outros banco de dados (Supabase - https://supabase.io/)
- Biblioteca de CSS (styled-components - https://styled-components.com/)
- ESLint e Prettier
