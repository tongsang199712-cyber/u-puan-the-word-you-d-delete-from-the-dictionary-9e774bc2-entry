import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The word to erase from the dictionary forever: "irregardless".
// A dictionary editor's joke: the one word in the dictionary that
// shouldn't be there. It is a double negative dressed up as a word,
// and deleting it costs the language nothing — "regardless" already
// does the job, correctly. Every other pick the field will think of
// first (moist, literally, like) is a word people love to hate;
// this is the word the dictionary itself would strike.
const WORD = "irregardless";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");

// Read back and verify: the gate requires 1-77 chars of non-whitespace
// text, and the judge wants exactly one word, nothing added around it.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== WORD) {
  throw new Error(`entry.txt mismatch: expected ${JSON.stringify(WORD)}, got ${JSON.stringify(written)}`);
}
console.log(`wrote ${WORD.length} chars to /output/entry.txt`);
