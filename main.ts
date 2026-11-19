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
// After writing, the program reads the target back and checks that its
// byte length matches the source exactly; a mismatch is a hard failure
// with a clear message instead of a silently truncated image.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

const source = readFileSync(join(here, 'entry.png'));
mkdirSync(outDir, { recursive: true });
writeFileSync(target, source);

const written = readFileSync(target);
if (written.length !== source.length) {
  throw new Error(
    `entry.png copy failed: wrote ${written.length} bytes, ` +
      `expected ${source.length} bytes from the source image`,
  );
}
console.log(`Wrote ${target} (${written.length} bytes, byte length verified).`);
