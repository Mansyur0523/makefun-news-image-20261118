// news-image-20261118 entry (Node 22, standard library only).
//
// The picture for Wednesday 18 November 2026 is drawn in entry.png, which
// sits beside this file in the repository. This program only moves those
// bytes to the output path the grader reads: /output/entry.png, or
// $MAKEFUN_OUTPUT_DIR/entry.png when that variable is set (local runs).
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The copy is byte-for-byte, so two runs always write identical output.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
writeFileSync(target, readFileSync(join(here, 'entry.png')));
