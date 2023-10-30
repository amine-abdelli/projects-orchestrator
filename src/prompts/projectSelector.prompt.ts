import inquirer from "inquirer";
import { IProjectInfo, IProjectPickerPrompt } from "../types";
import { getProjects } from "../operations";


/**
 * Prompts the user to select a project from a list of available projects.
 * @returns A promise that resolves with an object containing the selected project's name and repository URL.
 */
export async function selectProjectPrompt(): Promise<IProjectPickerPrompt> {
  const projects = await getProjects();
  return inquirer.prompt([
    {
      type: 'list',
      name: 'project',
      message: 'Select a project:',
      choices: projects.map((project: IProjectInfo) => ({
        name: `${project.name}`,
        value: {
          name: project.name,
          repository: project.repository,
          type: project.type
        }
      }))
    }
  ]);
}
