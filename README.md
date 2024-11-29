
```markdown
# TypeSafe - Aplicação Fullstack com Node.js e React.js

Este projeto é uma aplicação fullstack dividida em duas partes: **WEB** (Frontend) e **API** (Backend). Ele utiliza diversas tecnologias modernas para oferecer uma experiência eficiente e modular, com destaque para o uso do **Orval** no consumo de APIs.

---

## 📁 Estrutura do Projeto

- **WEB**: Contém o frontend desenvolvido em React.js.
- **API**: Contém o backend desenvolvido com Node.js e Fastify.

---

## 🚀 Tecnologias Utilizadas

### Frontend (WEB)

O frontend foi construído utilizando as seguintes tecnologias principais:

- **React.js**: Biblioteca para construção de interfaces de usuário.
- **@hookform/resolvers e react-hook-form**: Gerenciamento de formulários.
- **@radix-ui**: Componentes acessíveis e altamente personalizáveis.
- **@tanstack/react-query**: Gerenciamento de estado assíncrono.
- **Axios**: Biblioteca para requisições HTTP.
- **Class Variance Authority (CVA)**: Criação de estilos condicionais.
- **clsx**: Manipulação condicional de classes CSS.
- **date-fns**: Manipulação e formatação de datas.
- **React Helmet Async**: Gerenciamento do `<head>` do HTML.
- **TailwindCSS**: Framework CSS para estilização.
- **Lucide React**: Ícones SVG modernos.
- **Sonner**: Sistema de notificações leves e acessíveis.
- **Zod**: Validação e manipulação de esquemas de dados.

---

### Backend (API)

O backend foi desenvolvido com Node.js utilizando o framework **Fastify** e outras ferramentas robustas:

- **Fastify**: Framework web rápido e eficiente.
- **@fastify/cors**: Configuração de CORS no servidor.
- **@fastify/swagger**: Documentação da API em formato OpenAPI.
- **@fastify/swagger-ui**: Interface visual para documentação da API.
- **Fastify Type Provider Zod**: Integração entre Fastify e Zod para validações.
- **Zod**: Validação de dados e tipagem.

---

## 🛠️ Orval - Gerador de Tipos e Hooks para API

**Orval** foi utilizado para automatizar a geração de hooks e tipos baseados no esquema OpenAPI gerado pelo Fastify. Essa abordagem facilita o consumo de APIs no frontend, garantindo consistência entre os dados do backend e do frontend.

### Como o Orval funciona:
1. **Backend** gera a documentação OpenAPI utilizando **Fastify Swagger**.
2. **Orval** consome essa documentação e gera automaticamente:
   - Hooks do React Query para chamadas à API.
   - Tipos TypeScript para validação e tipagem.

Para executar o Orval:
```bash
npx orval --config orval.config.json
```

---

## 📦 Instalação e Execução

### Pré-requisitos

- Node.js 18+
- NPM ou Yarn

### Configuração do Backend (API)

1. Acesse a pasta `API`:

   ```bash
   cd api
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute o servidor:

   ```bash
   npm run dev
   ```

### Configuração do Frontend (WEB)

1. Acesse a pasta `WEB`:

   ```bash
   cd web
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute o servidor:

   ```bash
   npm run dev
   ```

---

## 📄 Documentação da API

Acesse a documentação Swagger gerada automaticamente pelo Fastify Swagger:

- **URL**: [http://localhost:3000/docs](http://localhost:3000/docs)

---

<!-- ## 🌐 Deploy e Produção -->

<!-- Certifique-se de configurar corretamente as variáveis de ambiente para produção. Scripts de build estão disponíveis em ambas as pastas (`API` e `WEB`). -->

---

## 💻 Desenvolvimento

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

---

## 📝 Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

```

Se precisar de mais ajustes ou incluir exemplos de variáveis de ambiente ou instruções específicas de deploy, é só avisar!
