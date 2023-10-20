import chalk from 'chalk';
import { Colors } from '../constants/colors';

export type LogType = 'error' | 'success' | 'warning';

export enum LogEnum {
  ERROR = 'error',
  SUCCESS = 'success',
  WARNING = 'warning',
}

/**
 * Console log messages
 * @param message string
 * @param type 'error' | 'success' | 'warning'
 */
export function log(message: string, type?: LogType) {
  if (!type) {
    console.log(chalk.bold(message))
  } else {
    let hex = '';
    if (type === 'error') hex = Colors.ERROR;
    if (type === 'success') hex = Colors.SUCCESS;
    if (type === 'warning') hex = Colors.WARNING;
    console.log(chalk.hex(hex).bold(message))
  };
};