
import { VAULT_KEYS } from "../types";
import { getSecretsByName } from "../utils";
import { fetchVaultConfig } from "./fetchVaultConfig"

export async function getProjects() {
  const projects = await fetchVaultConfig() ?? [];
  if (!projects.length) throw new Error('An error occurred while fetching projects')
  const projectSecrets = getSecretsByName(projects, VAULT_KEYS.PROJECTS)
  if (!projectSecrets) throw new Error(`Vault secret does not contain any projects`)
  return JSON.parse(projectSecrets?.version.value)
}