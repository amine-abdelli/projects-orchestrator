import { ProjectType } from "../types";
import { defineDefaultWorkspaceFolder } from "../utils";

export const defaultConfig = {
  [ProjectType.NODE]: {
    install: 'yarn',
    start: 'yarn start',
    env: '.env',
    ide: 'code .'
  },
  [ProjectType.FLUTTER]: {
    install: 'flutter pub get',
    start: 'flutter run',
    env: '.env',
    ide: 'code .'
  },
  [ProjectType.MAVEN]: {
    install: 'mvn clean install',
    start: 'mvn spring-boot:run',
    env: 'application.properties',
    ide: 'idea .'
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
    maven: 'application.properties',
    flutter: '.env',
  },
  defaultWorkspaceDir: defineDefaultWorkspaceFolder(),
};

