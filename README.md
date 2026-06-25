# 💸 Refund — Expense Reimbursement Request

> Aplicação web de solicitação de reembolso de despesas, desenvolvida durante a **Formação React da [Rocketseat](https://rocketseat.com.br/)** com foco na prática de React.

---

## 📌 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Pré-requisitos](#-pré-requisitos)
- [Como Executar](#-como-executar)
- [Variáveis de Ambiente](#-variáveis-de-ambiente)
- [Autor](#-autor)

---

## 📋 Sobre o Projeto

O **Refund** é uma interface para solicitação e gestão de reembolso de despesas. O usuário preenche um formulário com os dados da despesa (nome, categoria e valor), e as solicitações são listadas em um painel lateral com o total acumulado.

O projeto é estruturado como um **monorepo** com dois módulos principais:

| Módulo | Caminho | Porta |
|---|---|---|
| Front-end (React) | `apps/web` | `5173` |
| Back-end (API) | `apps/refund-api` | `3333` |

---

## ✨ Funcionalidades

- Cadastro de despesas com nome, categoria, valor e imagem do comprovante
- Categorias disponíveis: Alimentação, Hospedagem, Serviços, Transporte e Outros
- Listagem de despesas na página inicial com total acumulado
- Remoção de despesas da lista
- Modais e diálogos de alerta com Radix UI
- Layout responsivo e semântico

---

## 🛠 Tecnologias

- [React](https://react.dev/) — Construção da interface
- [Radix UI](https://www.radix-ui.com/) — Componentes acessíveis (modal, alert dialog)
- [Vite](https://vitejs.dev/) — Bundler e servidor de desenvolvimento
- [AdonisJS](https://adonisjs.com/) — Framework da API back-end
- [Google Fonts](https://fonts.google.com/) — Tipografia com a fonte *Open Sans*

---

## ✅ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) v18 ou superior
- npm v9 ou superior
- Git

---

## 🚀 Como Executar

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd <nome-da-pasta>
```

### 2. Instale as dependências

Na raiz do monorepo, instale todas as dependências de uma vez:

```bash
npm install
```

### 3. Configure as variáveis de ambiente

**Back-end** — dentro de `apps/refund-api`, crie o arquivo `.env` com base no `.env.example`:

```env
TZ=UTC
PORT=3333
HOST=localhost
LOG_LEVEL=info
APP_KEY=jCP6WY0zvQB_eKHTHvLtI1CKn5IuBNan
NODE_ENV=development
DRIVE_DISK=fs
```

**Front-end** — dentro de `apps/web`, crie o arquivo `.env` com base no `.env.example`:

```env
VITE_API_URL=http://localhost:3333
```

> ⚠️ Nunca suba arquivos `.env` para o repositório. Eles já devem estar no `.gitignore`.

### 4. Execute a migration do banco de dados

Entre na pasta da API e rode a migration:

```bash
cd apps/refund-api
node ace migration:run
```

### 5. Inicie o projeto

Volte para a raiz do monorepo e rode:

```bash
cd ../..
npm run dev
```

A aplicação estará disponível em:

- **Front-end:** [http://localhost:5173](http://localhost:5173)
- **Back-end:** [http://localhost:3333](http://localhost:3333)

---

## 🔐 Variáveis de Ambiente

### `apps/refund-api`

| Variável | Descrição | Valor padrão |
|---|---|---|
| `TZ` | Fuso horário da aplicação | `UTC` |
| `PORT` | Porta da API | `3333` |
| `HOST` | Host da API | `localhost` |
| `LOG_LEVEL` | Nível de log | `info` |
| `APP_KEY` | Chave de segurança da aplicação | — |
| `NODE_ENV` | Ambiente de execução | `development` |
| `DRIVE_DISK` | Sistema de armazenamento de arquivos | `fs` |

### `apps/web`

| Variável | Descrição | Valor padrão |
|---|---|---|
| `VITE_API_URL` | URL base da API back-end | `http://localhost:3333` |

---

## 👨‍💻 Autor

Feito por **Thomaz Hilário**

[![GitHub](https://img.shields.io/badge/GitHub-ThomazHilario-181717?style=flat&logo=github)](https://github.com/ThomazHilario)

---

## 📄 Licença

Projeto desenvolvido para fins educacionais durante a formação da Rocketseat. Sinta-se livre para usá-lo como referência de estudo.
