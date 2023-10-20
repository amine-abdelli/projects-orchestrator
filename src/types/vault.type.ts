export interface VersionInfo {
  version: string;
  type: string;
  created_at: string;
  value: string; // It seems this is stringified JSON. You may want to parse it to RepositoryInfo[]
  created_by: CreatedBy;
}

export interface CreatedBy {
  name: string;
  type: string;
  email: string;
}

export interface VaultSecret {
  name: string;
  version: VersionInfo;
  created_at: string;
  latest_version: string;
  created_by: CreatedBy;
  sync_status: Record<string, unknown>; // Assuming sync_status is an empty object or unknown structure
}

export enum VAULT_KEYS {
  PROJECTS = 'repositories'
}