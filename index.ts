import { getRepositories } from './src';
import dotenv from 'dotenv';

dotenv.config();

(async () => {
  const repositoies = await getRepositories()
  console.log(repositoies)
})()