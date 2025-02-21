# 📄 Projeto Currículo

Este é um projeto de currículo que inclui uma API desenvolvida em **Spring Boot** e um frontend desenvolvido em **React**. Atualmente, o projeto está em desenvolvimento e apresenta alguns problemas no backend e no frontend. Pretendemos resolvê-los o mais rápido possível.

Este projeto foi desenvolvido como parte do **projeto final do treinamento proporcionado pela Consenso em seu processo seletivo**, realizado na **Treina Recife**.

## 🚀 Tecnologias Utilizadas

- **Backend**: Spring Boot (Java)
- **Frontend**: React (JavaScript)
- **Banco de Dados**: MySQL

---

## 🛠️ Spring API (`springApi`)

### Descrição
Este projeto Spring Boot fornece uma API para gerenciar informações de currículos, incluindo:
- Dados pessoais
- Formação acadêmica
- Experiências profissionais
- Informações adicionais

### 📋 Pré-requisitos
- Java 11 ou superior
- Maven 3.6.3 ou superior
- MySQL 8.0 ou superior

### 📥 Como baixar o projeto

```bash
# Clone o repositório
$ git clone https://github.com/paulo050999/projetoTreina.git
```

### ▶️ Como rodar o projeto

1. Navegue até o diretório `springApi`:
   ```bash
   cd projetoTreina/springApi
   ```

2. Configure o banco de dados MySQL no arquivo `application.properties`.

3. Compile o projeto e inicie o servidor:
   ```bash
   mvn spring-boot:run
   ```

### 📝 `.gitignore` para o Backend

```
/target
*.log
*.tmp
*.bak
*.swp
*~
.DS_Store
.idea
.project
.classpath
.settings
*.class
*.jar
*.war
*.ear
/.mvn
**/test-classes
**/logs
**/*.iml
/.vscode
*.db
*.pdb
*.dll
*.exe
*.out
*.app
*.so
*.pid
**/build
```

---

## 💻 Frontend (`frontend`)

### Descrição
Este projeto frontend em React permite visualizar e editar informações de currículos, conectando-se à API backend em Spring Boot.

### 📋 Pré-requisitos
- Node.js 14 ou superior
- npm 6 ou superior

### 📥 Como baixar o projeto

```bash
# Clone o repositório
$ git clone https://github.com/paulo050999/projetoTreina.git
```

### ▶️ Como rodar o projeto

1. Navegue até o diretório `frontend`:
   ```bash
   cd projetoTreina/front-end
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

### 📝 `.gitignore` para o Frontend

```
node_modules
/.pnp
.pnp.js

# Logs
logs
*.log
npm-debug.log*

# Dependency directories
jspm_packages/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn v2
.yarn/cache
.yarn/unplugged
.yarn/build-state.yml
.yarn/install-state.gz
.yarn/releases

# Optional lock file
yarn.lock

# dotenv environment variables file
.env
```

---

## 📈 Status do Projeto
Atualmente, o projeto não está funcionando completamente. O backend e o frontend apresentam problemas que serão resolvidos em breve. Pretendemos atualizar o status assim que possível.

---

## 📝 Licença
Este projeto está sob a licença **Creative Commons Zero v1.0 Universal**. Para mais detalhes, consulte o arquivo `LICENSE`.

---

## ✉️ Contato
Se tiver dúvidas ou sugestões, entre em contato com o desenvolvedor através do GitHub ou e-mail.
