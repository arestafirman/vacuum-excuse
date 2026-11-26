import { mkdirSync, writeFileSync } from "node:fs";

// The Robot Vacuum's Funniest Excuse — one line, 120 characters max.
// First-person robot voice, a machine owning up to a failure: it circled
// the same chair leg 14 times, and its own map now lists the spot as a
// landmark — while the dust underneath has moved in permanently.
// Output contract (RULES.txt): one UTF-8 line, 1-120 chars, no trailing
// newline — the file is the entry itself, nothing else is read.
const entry =
  "I circled the same chair leg 14 times today. My map calls it a landmark now. The dust under it calls it home.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
