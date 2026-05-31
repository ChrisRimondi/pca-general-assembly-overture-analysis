import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";

const notePath = process.argv[2];

if (!notePath) {
  console.error("Usage: npm run publish:episode -- notes/pca-overture-analysis-YYYY-MM-DD.md");
  process.exit(1);
}

function run(command, args) {
  const result = spawnSync(command, args, { stdio: "inherit" });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

const slug = notePath.split("/").pop().replace(/\.md$/i, "");
const existingAudioPath = [`episodes/${slug}.m4a`, `episodes/${slug}.mp3`]
  .find((candidatePath) => existsSync(candidatePath));
const audioPath = existingAudioPath ?? `episodes/${slug}.mp3`;

if (!existingAudioPath) {
  run("node", ["scripts/generate-audio.mjs", notePath]);
}

run("node", ["scripts/generate-feed.mjs"]);
run("git", ["add", notePath, audioPath, "feed.xml"]);
run("git", ["commit", "-m", `Publish ${slug}`]);
run("git", ["push"]);
