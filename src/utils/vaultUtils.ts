import { exec } from "child_process";
import { VaultSecrets } from "operations";

export function runCommand(command: string) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing command: ${error}`);
        return reject(error);
      }
      resolve(stdout.trim());
    });
  });
}

export function getSecretsByName(VaultSecrets: VaultSecrets, name: string) {
  return VaultSecrets.find((secret) => secret.name === name);
}