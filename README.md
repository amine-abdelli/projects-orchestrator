# Projects-Orchestrator

## Project Description

The Projects-Orchestrator is a CLI tool designed to simplify the onboarding process for new developers. The tool automates various setup tasks to get a repository up and running on your local machine. It performs a series of actions including cloning the chosen repository, installing dependencies, fetching configurations from a vault, setting up `.env` or `application.properties` files, opening the IDE, and optionally running a local database.

## Features

- Clone repositories from a vault
- Install project dependencies
- Fetch and apply configurations from a vault
- Open the project in your preferred IDE
- Optional database setup for local development

## Project Structure

```plaintext
projects-orchestrator/
├── src/
│   ├── commands/
│   │   ├── cloneRepo.ts
│   │   ├── installDependencies.ts
│   │   ├── fetchVaultConfig.ts
│   │   ├── openIDE.ts
│   │   └── runDatabase.ts
│   ├── utils/
│   │   ├── gitUtils.ts
│   │   ├── fileUtils.ts
│   │   ├── vaultUtils.ts
│   │   └── ideUtils.ts
│   ├── config/
│   │   └── defaultConfig.ts
│   ├── types/
│   │   └── index.d.ts
│   └── index.ts
├── tests/
│   ├── commands/
│   │   └── ... (test files for commands)
│   └── utils/
│       └── ... (test files for utilities)
├── node_modules/
├── .env  (for storing environment variables)
├── .env.example (template for .env file)
├── .gitignore
├── package.json
├── tsconfig.json
├── README.md
└── declarations.d.ts
```
