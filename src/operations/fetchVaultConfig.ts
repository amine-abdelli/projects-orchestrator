import { runCommand } from "../utils/vaultUtils";

interface VersionInfo {
  version: string;
  type: string;
  created_at: string;
  value: string; // It seems this is stringified JSON. You may want to parse it to RepositoryInfo[]
  created_by: CreatedBy;
}

interface CreatedBy {
  name: string;
  type: string;
  email: string;
}

interface VaultSecret {
  name: string;
  version: VersionInfo;
  created_at: string;
  latest_version: string;
  created_by: CreatedBy;
  sync_status: Record<string, unknown>; // Assuming sync_status is an empty object or unknown structure
}

export type VaultSecrets = VaultSecret[];

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
