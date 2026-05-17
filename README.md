# SEO AI Skills

`seo-content-optimizer` is a Codex skill for fast, evidence-based SEO, GEO, and AEO work.

It helps agents audit live pages, review whole sites, improve article drafts, rewrite landing-page copy, and re-check content after edits. The skill is designed to produce concrete outputs, not generic advice.

## What This Skill Does

- Audits live URLs, websites, raw HTML, Markdown, CMS exports, local files, and pasted copy
- Scores content across SEO, GEO, and AEO
- Finds issues in titles, meta descriptions, H1s, headings, internal links, schema, trust signals, and answer-engine readiness
- Produces a fix pack with revised metadata and content suggestions
- Adapts recommendations by page type: homepage, service page, article, FAQ page, or location page

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
├── SKILL.md
├── README.md
├── agents/
│   └── openai.yaml
└── references/
    ├── output-templates.md
    ├── page-type-playbooks.md
    ├── rewrite-patterns.md
    └── scoring-rubric.md
```

## Key Files

- `SKILL.md`: core behavior, workflow, output contract, and guardrails
- `references/scoring-rubric.md`: weighted scoring logic for SEO, GEO, and AEO
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
