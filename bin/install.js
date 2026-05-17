#!/usr/bin/env node

const fs = require("fs");
const os = require("os");
const path = require("path");

const SKILL_FOLDER = "seo-content-optimizer";
const PACKAGE_ROOT = path.resolve(__dirname, "..");
const INCLUDED_PATHS = [
  "SKILL.md",
  "README.md",
  "CLAUDE.md",
  "agents",
  "references",
  ".claude",
  ".agent",
];

function parseArgs(argv) {
  const options = {
    force: false,
    dryRun: false,
    target: defaultTarget(),
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === "--force") {
      options.force = true;
      continue;
    }

    if (arg === "--dry-run") {
      options.dryRun = true;
      continue;
    }

    if (arg === "--target") {
      const next = argv[i + 1];
      if (!next) {
        fail("Missing value for --target");
      }
      options.target = path.resolve(next);
      i += 1;
      continue;
    }

    if (arg === "--help" || arg === "-h") {
      printHelp();
      process.exit(0);
    }

    fail(`Unknown argument: ${arg}`);
  }

  return options;
}

function defaultTarget() {
  const codexHome = process.env.CODEX_HOME;
  if (codexHome) {
    return path.join(codexHome, "skills", SKILL_FOLDER);
  }
  return path.join(os.homedir(), ".codex", "skills", SKILL_FOLDER);
}

function printHelp() {
  console.log(`Install the SEO AI skill into Codex.

Usage:
  seo-ai-skills [--target <path>] [--force] [--dry-run]

Options:
  --target <path>  Install into a custom destination
  --force          Replace an existing install at the target path
  --dry-run        Show what would be installed without copying files
  --help           Show this help message
`);
}

function fail(message) {
  console.error(`Error: ${message}`);
  process.exit(1);
}

function ensurePackageContents() {
  const missing = INCLUDED_PATHS.filter((relativePath) => {
    return !fs.existsSync(path.join(PACKAGE_ROOT, relativePath));
  });

  if (missing.length > 0) {
    fail(`Package is missing required files: ${missing.join(", ")}`);
  }
}

function copyIncludedPaths(targetDir) {
  for (const relativePath of INCLUDED_PATHS) {
    const source = path.join(PACKAGE_ROOT, relativePath);
    const destination = path.join(targetDir, relativePath);
    fs.cpSync(source, destination, {
      recursive: true,
      force: true,
    });
  }
}

function main() {
  const options = parseArgs(process.argv.slice(2));

  ensurePackageContents();

  if (options.dryRun) {
    console.log(`Dry run: would install ${SKILL_FOLDER} to ${options.target}`);
    for (const relativePath of INCLUDED_PATHS) {
      console.log(`- ${relativePath}`);
    }
    return;
  }

  if (fs.existsSync(options.target)) {
    if (!options.force) {
      fail(
        `Target already exists: ${options.target}\nRe-run with --force to replace it.`
      );
    }
    fs.rmSync(options.target, { recursive: true, force: true });
  }

  fs.mkdirSync(options.target, { recursive: true });
  copyIncludedPaths(options.target);

  console.log(`Installed ${SKILL_FOLDER} to ${options.target}`);
  console.log("You can now use the skill in Codex as $seo-content-optimizer.");
}

main();
