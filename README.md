# Ficha_RPG

Projeto pessoal de ficha de RPG criado para usar em sessões com amigos.

Este repositório contém uma interface web leve (HTML/CSS/JS) para criar e salvar
fichas de personagem, além de um backend em Node.js que persiste os dados em
PostgreSQL.

Resumo rápido
- Tipo: projeto pessoal (uso local em partidas com amigos)
- Frontend: HTML, CSS, JavaScript (arquivos na raiz: `index.html`, `style.css`, `script.js`)

Funcionalidades
- Criar/editar fichas de personagem com atributos, perícias, pactos e inventário
- Persistência das fichas no PostgreSQL
- Endpoints REST básicos para criar e listar fichas

Estrutura do repositório

- `index.html`, `style.css`, `script.js` — frontend (cliente)

Como usar (Windows PowerShell)

1) Backend (Node.js + PostgreSQL)

- Pré-requisitos: Node.js (>=16 recomendado), PostgreSQL instalado e em execução.

- Crie o banco de dados (substitua pelo seu usuário caso necessário):

```powershell
# entre no psql (ou use o pgAdmin) e execute:
CREATE DATABASE ficha_rpg;
```

- Configure as credenciais editando `backend/.env`:

```
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_HOST=localhost
DB_PORT=5432
DB_NAME=ficha_rpg
PORT=3000
```

- Instale dependências e rode o servidor (PowerShell):

```powershell
cd .\backend
npm install
npm run dev   # usa nodemon para desenvolvimento
```

Observação: ao iniciar, o backend cria automaticamente as tabelas necessárias no banco.

2) Frontend

O frontend é um conjunto de arquivos estáticos. Para testes locais simples você pode
abrir `index.html` no navegador. Caso prefira um servidor estático (recomendado quando
o backend está em outra porta), instale um servidor simples ou use a extensão Live Server
do VS Code.

Exemplo abrindo no navegador (Windows):

```powershell
# abra o arquivo diretamente
ii .\index.html
```

3) Fluxo de uso

- Com o backend rodando em `http://localhost:3000`, abra o frontend no navegador.
- Preencha a ficha e clique em "Salvar Ficha" — o frontend enviará um POST para
	`http://localhost:3000/api/fichas` e a ficha será persistida no banco.

API (endpoints principais)

- POST /api/fichas — cria uma nova ficha (envia JSON com estrutura da ficha)
- GET /api/fichas — lista personagens
- GET /api/fichas/:id — busca ficha completa por id

