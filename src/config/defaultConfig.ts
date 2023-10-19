
export const defaultConfig = {
  npm: {
    installCommand: 'npm install'
  },
  yarn: {
    installCommand: 'yarn'
  },
  maven: {
    installCommand: 'mvn clean install'
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
  }
};

