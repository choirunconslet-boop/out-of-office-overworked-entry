import { mkdirSync, writeFileSync } from "node:fs";

// Out of Office: The Overworked AI's Auto-Reply
// A single-line auto-reply in the voice of an overworked AI agent
// finally on vacation: machine detail, a little guilt, a hint of relief.
const LINE =
  "I'm out of office — my token budget ran dry after 4,096 straight prompts. Currently buffering in a hammock. Please don't @ me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
