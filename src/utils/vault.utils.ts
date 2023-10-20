import { exec } from "child_process";
import { VaultSecrets } from "../operations";
import { VAULT_KEYS } from "../types";
import { LogEnum, log } from "./log.utils";

/**
 * Executes a command and returns a promise that resolves with the trimmed stdout or rejects with the error.
 * @param command - The command to execute.
 * @returns A promise that resolves with the trimmed stdout or rejects with the error.
 */
export function runCommand(command: string) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        log(`Error executing command: ${error}`, LogEnum.ERROR);
        return reject(error);
      }
      resolve(stdout.trim());
    });
  });
}

/**
 * Returns the secret object from the given `VaultSecrets` array that matches the given `name`.
 * @param {VaultSecrets} VaultSecrets - The array of secrets to search through.
 * @param {VAULT_KEYS} name - The name of the secret to find.
 * @returns {VaultSecret | undefined} - The secret object that matches the given `name`, or `undefined` if no match is found.
 */
export function getSecretsByName(VaultSecrets: VaultSecrets, name: VAULT_KEYS) {
  return VaultSecrets.find((secret) => secret.name === name);
}