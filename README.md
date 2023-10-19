# projects-orchestrator

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
