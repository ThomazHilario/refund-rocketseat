# 💸 Refund — Solicitação de Reembolso

Aplicação web desenvolvida durante a **Formação Fullstack da [Rocketseat](https://rocketseat.com.br/)**, com foco na prática de React.

---

## 📋 Sobre o Projeto

O **Refund** é uma interface de solicitação de reembolso de despesas. O usuário preenche um formulário com os dados da despesa (nome, categoria e valor), e as solicitações são listadas em um painel lateral com o total acumulado.

---

## ✨ Funcionalidades

- Formulário para cadastro de despesas com nome, categoria, valor e imagem do comprovante
- Categorias disponíveis: Alimentação, Hospedagem, Serviços, Transporte e Outros
- Listagem de despesas adicionadas na página de home
- Opção de remover uma despesa da lista
- Layout responsivo e semântico

---

## 🛠️ Tecnologias Utilizadas

- **React** — Construção da interface
- **Radix-Ui** — Interfaces como modal e alert dialog criados com radix
- **Google Fonts** — tipografia com a fonte *Open Sans*

---

## 🚀 Como Executar

Este projeto depende de uma API backend para funcionar. Siga os passos abaixo para configurar os dois repositórios.

### 1. Clone o repositorio na sua máquina

Clone o repositório da API:

```bash
git clone url do repo
```

Instale as dependências:

```bash
npm install
```

### 2. No MonoRepo faça a migrate do banco de dados:

Em outro terminal, entre em apps > refund-api:

```
node ace migration:run
```

### 3. Configure as variáveis de ambiente na aplicação em apps > web e apps > refund-api:

Abra ou crie o no front(apps > web) `.env` e defina a variável conforme o exemplo do `.env.example`:

```env
VITE_API_URL=http://localhost:3333
```

Abra ou crie o no back(apps > refund-api) `.env` e defina a variável conforme o exemplo do `.env.example`:

```env
TZ=UTC
PORT=3333
HOST=localhost
LOG_LEVEL=info
APP_KEY=jCP6WY0zvQB_eKHTHvLtI1CKn5IuBNan
NODE_ENV=development
DRIVE_DISK=fs
```

### 4. Execute o projeto a partir da raiz usando o npm run dev 

O Front estará disponível na porta 5173 e o back na porta 3333

---


## 👨‍💻 Autor

Feito por **Thomaz Hilário**

[![GitHub](https://img.shields.io/badge/GitHub-ThomazHilario-181717?style=flat&logo=github)](https://github.com/ThomazHilario)

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais durante a formação da Rocketseat. Sinta-se livre para usá-lo como referência de estudo.
