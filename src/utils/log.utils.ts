import chalk from 'chalk';
import { Colors } from '../constants/colors';

export type LogType = 'error' | 'success' | 'warning' | 'info' | 'default';

export enum LogEnum {
  ERROR = 'error',
  SUCCESS = 'success',
  WARNING = 'warning',
  INFO = 'info',
}

/**
 * Console log messages
 * @param message string
 * @param type 'error' | 'success' | 'warning'
 */
export function log(message: string, type: LogType = 'default') {
  const colorMapping: Record<LogType | 'default', string> = {
    'default': '',
    'error': Colors.ERROR,
    'success': Colors.SUCCESS,
    'warning': Colors.WARNING,
    'info': Colors.INFO
  };

  const color = colorMapping[type];

  console.log(chalk.hex(color)(message));
};
