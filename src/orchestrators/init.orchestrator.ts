import { selectProjectToInit } from "../prompts";

export async function initOrchestrator() {
  const { project } = await selectProjectToInit()
  // Clone the project to the specified directory
}