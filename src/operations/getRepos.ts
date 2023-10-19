import { getSecretsByName } from "../utils";
import { fetchVaultConfig } from "./fetchVaultConfig"

export async function getRepositories() {
  const REPOSITORIES_SECRET_NAME = 'repositories'
  const repositories = await fetchVaultConfig() ?? [];
  if (!repositories.length) throw new Error('An error occurred while fetching repositories')
  const repositoriesSecrets = getSecretsByName(repositories, REPOSITORIES_SECRET_NAME)
  if (!repositoriesSecrets) throw new Error(`Vault secret does not contain any repositories`)
  return JSON.parse(repositoriesSecrets?.version.value)
}