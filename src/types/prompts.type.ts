export interface IProjectPickerPrompt {
  project: IProjectInfo;
}

export interface IProjectInfo {
  name: string;
  repository: string;
  type: ProjectType;
}

export enum ProjectType {
  NODE = 'node',
  MAVEN = 'maven',
  FLUTTER = 'flutter',
}

export interface IMainPrompt {
  choice: MAIN_CHOICE;
}

export enum MAIN_CHOICE {
  INIT = 'init',
  RUN = 'run',
}