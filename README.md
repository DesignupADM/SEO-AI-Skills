# SEO AI Skills

`seo-content-optimizer` is a Codex skill for fast, evidence-based SEO, GEO, and AEO work.

It helps agents audit live pages, review whole sites, improve article drafts, rewrite landing-page copy, and re-check content after edits. The skill is designed to produce concrete outputs, not generic advice.

The current version is calibrated for modern search behavior, including AI features, helpful content standards, richer structured data decisions, stronger trust signals, and better answer extraction.

## What This Skill Does

- Audits live URLs, websites, raw HTML, CMS exports, local files, and pasted copy
- Scores content across SEO, GEO, and AEO
- Finds issues in titles, meta descriptions, H1s, headings, internal links, schema, trust signals, and answer-engine readiness
- Checks first-hand experience, information gain, entity coverage, internal-link structure, media support, and business or author trust cues
- Produces a fix pack with revised metadata and content suggestions
- Adapts recommendations by page type: homepage, service page, article, FAQ page, location page, comparison or review page, or tutorial page

## What Users Get

For each page or draft, the skill can produce:

- SEO, GEO, and AEO scores
- Top-priority issues
- Revised SEO title
- Revised meta description
- Recommended H1
- A 40-60 word answer-first intro
- FAQ suggestions
- Internal-link ideas
- Schema recommendations
- Entity and coverage gap notes
- Media and proof suggestions
- A short recheck summary after edits

## Best Use Cases

- Quick homepage or landing-page audits
- Article optimization before publishing
- Service-page SEO improvements
- GEO and AEO upgrades for AI search and featured snippets
- Re-checking content after revisions

## Modes

The skill supports four working modes:

- `quick-audit`: fast, high-signal review for urgent or general SEO requests
- `full-audit`: broader site review across meaningful pages
- `draft-optimization`: optimize unpublished articles or page copy
- `recheck`: compare updated content against previous findings

## How It Works

1. Identify the input type and choose the right mode.
2. Collect real evidence from the page, site, or draft.
3. Score SEO, GEO, and AEO with a weighted rubric.
4. Prioritize the highest-impact issues.
5. Generate a concrete fix pack.
6. Re-check the result after edits when needed.

## Repository Structure

```text
SEO-AI-Skills/
├── CLAUDE.md
├── SKILL.md
├── README.md
├── .agent/
│   ├── rules/
│   │   └── seo-content-optimization.md
│   └── workflows/
│       ├── content-rewrite.md
│       └── quick-seo-audit.md
├── .claude/
│   └── skills/
│       └── seo-content-optimizer/
│           └── SKILL.md
├── agents/
│   └── openai.yaml
└── references/
    ├── modern-seo-standards.md
    ├── output-templates.md
    ├── page-type-playbooks.md
    ├── rewrite-patterns.md
    └── scoring-rubric.md
```

## Key Files

- `SKILL.md`: core behavior, workflow, output contract, and guardrails
- `references/scoring-rubric.md`: weighted scoring logic for SEO, GEO, and AEO
- `references/modern-seo-standards.md`: distilled guidance from current Google Search documentation
- `references/page-type-playbooks.md`: page-specific optimization guidance
- `references/rewrite-patterns.md`: rewrite patterns for titles, metas, intros, FAQs, and schema
- `references/output-templates.md`: concise output formats for audits and fix packs

## Install In Codex

For best results, place this skill in your Codex skills directory using the skill name as the folder name:

```bash
mkdir -p ~/.codex/skills
cp -R SEO-AI-Skills ~/.codex/skills/seo-content-optimizer
```

The skill name inside `SKILL.md` is `seo-content-optimizer`, so using that folder name helps keep discovery and invocation clear.

## Install From GitHub With `npx skills`

Install the skill directly from this public GitHub repository with the official Agent Skills CLI:

```bash
npx skills add DesignupADM/SEO-AI-Skills --skill seo-content-optimizer
```

The CLI discovers the root `SKILL.md` and installs the skill for the supported agent(s) you select. To list the skills before installing:

```bash
npx skills add DesignupADM/SEO-AI-Skills --list
```

The repository is directly installable this way; no separate registry manifest is required. The `skills.sh` catalog is maintained by the directory service and is not published by adding a local listing file.

## Install With The `seo-ai-skills` npm Package

This repository also includes a small npm CLI installer for Codex.

The installer copies the skill into:

- `$CODEX_HOME/skills/seo-content-optimizer` when `CODEX_HOME` is set
- `~/.codex/skills/seo-content-optimizer` otherwise

### Local test

From the repository root:

```bash
node bin/install.js --dry-run
node bin/install.js --target /tmp/seo-content-optimizer-test
```

### After publishing to npm

Once the package is published under the npm name `seo-ai-skills`, users will be able to run:

```bash
npx seo-ai-skills
```

Optional flags:

```bash
npx seo-ai-skills --force
npx seo-ai-skills --target ~/.codex/skills/seo-content-optimizer
```

## npm Release Step

The GitHub-based `npx skills add` flow above works without an npm release. To enable the separate `npx seo-ai-skills` installer, publish this package to npm under an available package name such as `seo-ai-skills`.

The npm installer is defined by `package.json` and `bin/install.js` and targets Codex.

## Claude Code Support

This repo now includes Claude Code project-skill support.

Claude's official docs say project skills live in `.claude/skills/<skill-name>/SKILL.md`, so this repository includes:

- `.claude/skills/seo-content-optimizer/SKILL.md`
- `CLAUDE.md`

For Claude Code users, the `.claude/skills/seo-content-optimizer/` entry points back to the canonical repo-root `SKILL.md` and `references/` files, so the instructions stay aligned across tools.

## Antigravity Support

This repo also includes Antigravity workspace support using its project customization paths:

- `.agent/rules/seo-content-optimization.md`
- `.agent/workflows/quick-seo-audit.md`
- `.agent/workflows/content-rewrite.md`

These files are designed to guide Antigravity agents toward the same quick-audit and fix-pack behavior as the Codex skill, without changing the canonical root skill files.

## Source Of Truth

The canonical workflow for all supported agents remains:

- `SKILL.md`
- `references/scoring-rubric.md`
- `references/modern-seo-standards.md`
- `references/page-type-playbooks.md`
- `references/rewrite-patterns.md`
- `references/output-templates.md`

The Claude Code and Antigravity support files are compatibility layers that point agents back to those root files.

## Example Prompts

- `Use $seo-content-optimizer to audit https://example.com and tell me the top 3 SEO fixes.`
- `Use $seo-content-optimizer to optimize this blog draft for SEO and AI search.`
- `Use $seo-content-optimizer to rewrite this homepage title, meta description, H1, and intro.`
- `Use $seo-content-optimizer to re-check this service page after my edits.`
- `Use $seo-content-optimizer to review this FAQ page for featured snippet opportunities.`

## Why This Skill Is Different

This skill is built to push agents toward specific, useful deliverables instead of generic SEO commentary.

It emphasizes:

- evidence-based findings
- page-type-aware recommendations
- safe rewrites without invented claims
- answer-first content for AEO
- entity clarity and trust signals for GEO
- information gain and first-hand experience over generic summary content
- schema recommendations that stay aligned with visible-page truth

## Limitations

This skill does not pretend to measure signals it cannot verify from content alone.

It cannot directly confirm:

- live rankings
- backlink quality
- Core Web Vitals
- indexing status beyond visible directives
- JavaScript rendering completeness
- AI citation frequency

For those, pair the skill with tools like Google Search Console, PageSpeed Insights, and external backlink tools.
