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

### 1. Clone e execute o backend

Clone o repositório da API:

```bash
git clone https://github.com/rocketseat-education/refund-api.git
cd refund-api
```

Instale as dependências e inicie o servidor:

```bash
npm install
npm run dev
```

> Por padrão, a API ficará disponível em `http://localhost:3333`.

### 2. Clone o frontend

Em outro terminal, clone este repositório:

```bash
git clone https://github.com/ThomazHilario/refund-rocketseat.git
cd refund-rocketseat
```

### 3. Configure as variáveis de ambiente

Abra ou crie o no front `.env` e defina a variável conforme o exemplo do `.env.example`:

```env
VITE_API_URL=http://localhost:3333
```

### 4. Execute o frontend

Abra o arquivo `index.html` no seu navegador, ou use a extensão **Live Server** do VS Code para uma melhor experiência de desenvolvimento.

---


## 👨‍💻 Autor

Feito por **Thomaz Hilário**

[![GitHub](https://img.shields.io/badge/GitHub-ThomazHilario-181717?style=flat&logo=github)](https://github.com/ThomazHilario)

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais durante a formação da Rocketseat. Sinta-se livre para usá-lo como referência de estudo.
