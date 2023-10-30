import { selectProjectPrompt } from "../prompts";
import { LogEnum, createFileWithContent, getSecretsByName, log, runCommand } from "../utils";
import { breakLines } from "../utils/string.utils";
import { fetchVaultConfig } from "../operations";
import { defaultConfig } from "../config/defaultConfig";
import { VAULT_KEYS } from "../types";
import { openIDEPrompt } from "../prompts/openIDE.prompt";
import { runProjectPrompt } from "../prompts/runProject.prompt";

/**
 * Converts a string to a secret key format by replacing spaces with underscores and converting to lowercase.
 * @param str The string to convert to secret key format.
 * @returns The converted string in secret key format.
 */
function toSecretKey(str: string) {
  return str.split(' ').join('_').toLocaleLowerCase() as VAULT_KEYS;
}


export async function initOrchestrator() {
  try {
    const { project } = await selectProjectPrompt()
    const ProjectTypeCommands = defaultConfig[project.type];
    const fullProjectPath = `${defaultConfig.defaultWorkspaceDir}${project.name.split(' ').join('-').toLocaleLowerCase()}`

    // Clone project
    log(`Cloning ${project.name} repository...`, LogEnum.INFO);
    await runCommand(`git clone ${project.repository} ${fullProjectPath}`);
    log(`${project.name} repository cloned successfully...`, LogEnum.SUCCESS);

    // Get project secrets
    const projects = await fetchVaultConfig() ?? [];
    const projectSecrets = getSecretsByName(projects, toSecretKey(project.name))

    // Inject environment variables
    log(`Injecting environment variables...`, LogEnum.INFO);
    createFileWithContent(breakLines(projectSecrets?.version.value ?? ''), fullProjectPath, ProjectTypeCommands.env)

    // Install dependencies
    log(`Installing dependencies...`, LogEnum.INFO);
    await runCommand(ProjectTypeCommands.install, fullProjectPath);
    log(`${project.name}'s dependencies installed successfully...`, LogEnum.SUCCESS);

    // TODO: Check if the command to open the IDE with code . is installed. If not, propose to install it.
    // TODO: Propose in which IDE to open the project (VSCode, WebStorm, etc.)
    const { shouldOpenIDE } = await openIDEPrompt();
    if (shouldOpenIDE) {
      // Open IDE
      log('Opening IDE...', LogEnum.INFO)
      await runCommand(ProjectTypeCommands.ide, fullProjectPath);
    }

    const { shouldRunProject } = await runProjectPrompt(project.name)
    if (shouldRunProject) {
      // Start project
      log(`Starting project...`, LogEnum.INFO);
      await runCommand(ProjectTypeCommands.start, fullProjectPath);
    }
  } catch (err) {
    log(`An error occurred: ${err}`, LogEnum.ERROR);
  }
}