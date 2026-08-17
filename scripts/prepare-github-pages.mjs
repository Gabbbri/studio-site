import { readdir, readFile, writeFile } from 'node:fs/promises';
import { extname, join } from 'node:path';

const outputDirectory = new URL('../dist/', import.meta.url);
const repositoryBase = '/studio-site';

async function visit(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);

    if (entry.isDirectory()) {
      await visit(path);
      continue;
    }

    if (extname(entry.name) !== '.html') continue;

    const source = await readFile(path, 'utf8');
    const rewritten = source
      .replace(/((?:href|src)=["'])\/(?!studio-site(?:\/|["']))/g, `$1${repositoryBase}/`)
      .replace(/url\((["']?)\/(?!studio-site\/)/g, `url($1${repositoryBase}/`);

    await writeFile(path, rewritten);
  }
}

await visit(outputDirectory);
console.log(`Prepared dist for GitHub Pages at ${repositoryBase}/`);
