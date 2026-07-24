import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const GOOGLE_APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwDPN1nRv1jNTFjHpXVRkFMzuxMqBrvW9FNQ4YZUgon5h5Ec25QJphyxcdH8yrNJnKbsg/exec';
