import inquirer from "inquirer";

interface IOpenIDEPrompt {
  shouldOpenIDE: boolean;
}

export async function openIDEPrompt(): Promise<IOpenIDEPrompt> {
  return inquirer.prompt([
    {
      type: 'confirm',
      name: 'shouldOpenIDE',
      default: true,
      message: 'Would you like to open your IDE ? - (yes)',
    }
  ]);
}