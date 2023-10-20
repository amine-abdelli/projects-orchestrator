import { VaultSecret } from "../types";
import { runCommand } from "../utils/vault.utils";

export type VaultSecrets = VaultSecret[];

/**
 * Fetches the Vault configuration secrets using the provided environment variables.
 * @returns A Promise that resolves to the VaultSecrets object or void if an error occurs.
 */
export async function fetchVaultConfig(): Promise<VaultSecrets | void> {
  const clientId = process.env.HCP_CLIENT_ID;
  const clientSecret = process.env.HCP_CLIENT_SECRET;
  const tokenLocation = process.env.HCP_TOKEN_LOCATION;
  const audience = process.env.HCP_AUDIENCE;
  const org = process.env.HCP_ORG;

  try {
    const tokenCommand: string = `curl --location '${tokenLocation}' \
      --header 'content-type: application/json' \
      --data '{
        "audience": "${audience}",
        "grant_type": "client_credentials",
        "client_id": "${clientId}",
        "client_secret": "${clientSecret}"
      }'`;

    const tokenResponse = await runCommand(tokenCommand) as string;
    const accessToken = JSON.parse(tokenResponse);

    const secretsCommand = `curl \
      --location "${org}" \
      --request GET \
      --header "Authorization: Bearer ${accessToken.access_token}"`;

    const secretsResponse = await runCommand(secretsCommand) as string;
    return JSON.parse(secretsResponse).secrets
  } catch (error) {
    return console.error(`An error occurred: ${error}`);
  }
}
