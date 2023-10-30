import { exec, execSync } from "child_process";
import fs from "fs";
import { LogEnum, log } from "./log.utils";
import path from "path";

export function defineDefaultWorkspaceFolder(): string {
  let workspaceFolder: string;
  if (process.platform === 'win32') {
    workspaceFolder = execSync('cd').toString().trim();
  } else {
    workspaceFolder = execSync('pwd').toString().trim();
  }
  return keepDocumentsPath(workspaceFolder) + '/';
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

/**
 * Executes a command and returns a promise that resolves with the trimmed stdout or rejects with the error.
 * @param command - The command to execute.
 * @returns A promise that resolves with the trimmed stdout or rejects with the error.
 */
export function runCommand(command: string, cwd = '.') {
  return new Promise((resolve, reject) => {
    exec(command, { cwd }, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing command: ${error}`);
        return reject(error);
      }
      resolve(stdout.trim());
    });
  });
};

/**
 * Creates a file with the given content in the specified directory.
 * @param envContent - The content to write to the file.
 * @param dir - The directory where the file will be created.
 * @param fileName - The name of the file to create.
 */
export function createFileWithContent(envContent: string, dir: string, fileName: string) {
  const envFilePath = path.join(dir, fileName);
  fs.writeFile(envFilePath, envContent, 'utf8', (err) => {
    if (err) {
      console.error('An error occurred:', err);
    } else {
      log(`File succesfully created at ${envFilePath}`, LogEnum.SUCCESS);
    }
  });
}

