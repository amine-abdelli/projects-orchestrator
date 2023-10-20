import { defineDefaultWorkspaceFolder } from "../utils";

export const defaultConfig = {
  npm: {
    install: 'npm install',
    start: 'npm run start',
  },
  yarn: {
    install: 'yarn',
    start: 'yarn start',
  },
  maven: {
    install: 'mvn clean install',
    start: 'mvn spring-boot:run',
  },
  ide: {
    vscode: {
      // Command to install what allow you to open vscode from terminal
      install: '',
      command: 'code .'
    },
    jetbrains: {
      // Command to install what allow you to open jetbrains from terminal
      install: '',
      command: 'idea .'
    }
  },
  database: {
    postgres: {},
    mongodb: {},
  },
  envFiles: {
    node: '.env',
    maven: 'application.properties'
  },
  defaultWorkspaceDir: defineDefaultWorkspaceFolder(),
};

