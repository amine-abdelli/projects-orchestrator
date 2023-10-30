import inquirer from "inquirer";

interface IRunProjectPrompt {
  shouldRunProject: boolean;
}

export async function runProjectPrompt(name: string): Promise<IRunProjectPrompt> {
  return inquirer.prompt([
    {
      type: 'confirm',
      name: 'shouldRunProject',
      default: true,
      message: `Would you like to run ${name} ? - (yes)`,
    }
  ]);
}