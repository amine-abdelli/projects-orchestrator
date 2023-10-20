
import dotenv from 'dotenv';
import { main } from './prompts/main.prompt';
import { MAIN_CHOICE } from './types';
import { initOrchestrator, runOrchestrator } from './orchestrators';
import { defineDefaultWorkspaceFolder } from './utils';

dotenv.config();

(async () => {
  const { choice } = await main()
  if (choice === MAIN_CHOICE.INIT) {
    await initOrchestrator()
  }
  if (choice === MAIN_CHOICE.RUN) {
    await runOrchestrator()
  }
})()