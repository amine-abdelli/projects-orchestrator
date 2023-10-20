import { execSync } from "child_process";
import { LogEnum, log } from "./log.utils";

export function defineDefaultWorkspaceFolder(): string {
  let workspaceFolder: string;
  if (process.platform === 'win32') {
    workspaceFolder = execSync('cd').toString().trim();
  } else {
    workspaceFolder = execSync('pwd').toString().trim();
  }
  return keepDocumentsPath(workspaceFolder);
}

/**
 * Returns the path to the "Documents" folder in the given path.
 * If the "Documents" folder is not found in the path, returns an error message.
 * @param path - The path to search for the "Documents" folder.
 * @returns The path to the "Documents" folder, or an error message if not found.
 */
export function keepDocumentsPath(path: string): string {
  const parts = path.split('/');
  const endIndex = parts.indexOf('Documents') + 1;
  if (endIndex === 0) {
    log('Documents folder not found in path', LogEnum.ERROR);
  }
  return parts.slice(0, endIndex).join('/');
}