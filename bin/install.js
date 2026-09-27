#!/usr/bin/env node

const fs = require("fs");
const os = require("os");
const path = require("path");

const SKILL_FOLDER = "seo-content-optimizer";
const PACKAGE_ROOT = path.resolve(__dirname, "..");
// Install a standalone skill, without nested repository adapters.
const INCLUDED_PATHS = ["SKILL.md", "agents", "references", "LICENSE"];
const PROVIDER_IDS = ["codex", "claude", "gemini", "cursor", "copilot"];

function providerProfile(id) {
  if (!PROVIDER_IDS.includes(id)) fail(`Unknown agent: ${id}. Choose ${PROVIDER_IDS.join(", ")}`);
  // Profiles deliberately use the JSON subset of YAML 1.2, avoiding a runtime dependency.
  return JSON.parse(fs.readFileSync(path.join(PACKAGE_ROOT, "agents", "providers", `${id}.yaml`), "utf8"));
}

function parseArgs(argv) {
  const options = {
    force: false,
    dryRun: false,
    target: null,
    agent: "codex",
    scope: "user",
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === "--agent" || arg === "--scope") {
      const value = argv[++i];
      if (!value || value.startsWith("--")) fail(`Missing value for ${arg}`);
      options[arg.slice(2)] = value;
      continue;
    }

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
      if (!next || next.startsWith("--")) {
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

  const profile = providerProfile(options.agent);
  if (!["user", "project"].includes(options.scope)) fail("Scope must be user or project");
  options.target = options.target || defaultTarget(options, profile);
  return options;
}

function defaultTarget(options, profile) {
  if (options.scope === "project") {
    return path.join(process.cwd(), profile.project_directory, SKILL_FOLDER);
  }
  if (options.agent === "codex" && process.env.CODEX_HOME) {
    return path.join(process.env.CODEX_HOME, "skills", SKILL_FOLDER);
  }
  return path.join(os.homedir(), profile.user_directory, SKILL_FOLDER);
}

function printHelp() {
  console.log(`Install the SEO AI skill for a supported agent.

Usage:
  seo-ai-skills [--agent <name>] [--scope user|project] [--target <path>] [--force] [--dry-run]

Options:
  --agent <name>   codex (default), claude, gemini, cursor, copilot
  --scope <scope>  user (default) or project (current working directory)
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
    const marker = path.join(options.target, "SKILL.md");
    if (fs.lstatSync(options.target).isSymbolicLink() ||
        !fs.existsSync(marker) ||
        !/^name: seo-content-optimizer\r?$/m.test(fs.readFileSync(marker, "utf8")) ||
        options.target === PACKAGE_ROOT || PACKAGE_ROOT.startsWith(options.target + path.sep)) {
      fail("Refusing to replace a symlink, source directory, or directory without this skill's SKILL.md");
    }
    fs.rmSync(options.target, { recursive: true, force: true });
  }

  fs.mkdirSync(options.target, { recursive: true });
  copyIncludedPaths(options.target);

  console.log(`Installed ${SKILL_FOLDER} to ${options.target}`);
  console.log(`Installed for ${providerProfile(options.agent).display_name}. Reload skills or start a new agent session to discover it.`);
}

main();
