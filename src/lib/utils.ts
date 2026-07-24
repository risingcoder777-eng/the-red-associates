export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

// Replace this with your deployed Google Apps Script URL
// The script receives { fullName, phone, email, subject, area, message }
// and appends it as a new row in your Google Sheet
export const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwDPN1nRv1jNTFjHpXVRkFMzuxMqBrvW9FNQ4YZUgon5h5Ec25QJphyxcdH8yrNJnKbsg/exec';
