import fs from 'fs';
import path from 'path';
import { cpSync } from 'fs';

// Source: root public
const rootPublic = path.resolve('./public');

// Target: app public
const appPublic = path.resolve('./apps/web/public');

if (!fs.existsSync(appPublic)) {
  fs.mkdirSync(appPublic, { recursive: true });
}

// Copy everything from root public → app public
cpSync(rootPublic, appPublic, { recursive: true, force: true });

console.log('✅ Copied root public assets into app public');