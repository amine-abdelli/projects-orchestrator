import inquirer from "inquirer";
import { IMainPrompt, MAIN_CHOICE } from "../types";

export async function main(): Promise<IMainPrompt> {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'Select a project:',
      choices: [MAIN_CHOICE.INIT, MAIN_CHOICE.RUN]
    }
  ]);
}
