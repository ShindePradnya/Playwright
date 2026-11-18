import { readFileSync } from 'node:fs';
import path from 'node:path';
import { parse } from 'csv-parse/sync';

export function readCSVData(filePath: string): Record<string, string>[] {
  const absolutePath = path.resolve(__dirname, '..', filePath);
  const fileContent = readFileSync(absolutePath, 'utf8');

  return parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  });
}