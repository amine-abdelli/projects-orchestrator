import { VaultSecrets } from "../operations";
import { VAULT_KEYS } from "../types";

/**
 * Returns the secret object from the given `VaultSecrets` array that matches the given `name`.
 * @param {VaultSecrets} VaultSecrets - The array of secrets to search through.
 * @param {VAULT_KEYS} name - The name of the secret to find.
 * @returns {VaultSecret | undefined} - The secret object that matches the given `name`, or `undefined` if no match is found.
 */
export function getSecretsByName(VaultSecrets: VaultSecrets, name: VAULT_KEYS) {
  return VaultSecrets.find((secret) => secret.name === name);
}