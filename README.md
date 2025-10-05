
# Bright-Portfolio-Server

A simple **Bright-Portfolio-Server** built with **TypeScript, Express.js, Prisma ORM**.  


---
##  Live Links

- **Live Deployment:** [Bright-Portfolio-Client]()
  
  
- **Live Deployment:** [Bright-Portfolio-Server]()

---
## Features
- TypeScript + Express.js setup
- Modular project structure
- Environment configuration with `dotenv`


---

## Installation

Clone the repository:

```bash
git clone https://github.com/mohammaduzzal/bright-portfolio-server
cd bright-portfolio-server
```

Install dependencies:

```bash
# using npm
npm install

# using yarn
yarn install

# using pnpm
pnpm install
```

Setup environment variables:

```bash
cp .env.example .env
```

Run the development server:

```bash
# using npm
npm run dev

# using yarn
yarn dev

# using pnpm
pnpm dev
```

---

## Folder Structure

```
Prisma-Blog/
│── node_modules/          # Dependencies
│── src/
│   ├── app.ts             # Express app configuration
│   ├── server.ts          # Server entry point
│   ├── config/            # Environment & configuration files
│   └── modules/           # Application modules (posts, users, etc.)
│── package.json           # Project metadata & scripts
│── pnpm-lock.yaml         # Lockfile (pnpm)
│── tsconfig.json          # TypeScript configuration
│── README.md              # Documentation
```

---

## Scripts

```bash
# Run in development mode
npm dev

# Build for production
npm build

# Run production build
npm start
```

---

