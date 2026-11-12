import { writeFileSync, readFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || 'out';
mkdirSync(outputDir, { recursive: true });

const __dirname = dirname(fileURLToPath(import.meta.url));
const content = readFileSync(join(__dirname, 'summary.txt'));
writeFileSync(join(outputDir, 'entry.txt'), content);
