---
name: seo-content-optimizer
description: Audit and improve SEO, GEO, and AEO performance for articles, landing pages, service pages, homepages, FAQs, comparison pages, reviews, tutorials, local pages, and other web content. Use when Claude Code needs to analyze a live URL, full website, raw HTML, Markdown, CMS export, local content file, or pasted copy for search visibility, meta tags, heading structure, internal links, snippet readiness, schema opportunities, business and author trust signals, entity coverage, multilingual or local targeting, AI-search clarity, or content quality. Also use when the user asks to optimize an article, rewrite titles and meta descriptions, improve answer-engine performance, add FAQ or HowTo sections, strengthen E-E-A-T, increase information gain, or re-check content after edits.
---

# SEO Content Optimizer

Use the repo-root skill files as the source of truth for this Claude Code project skill.

## Required Steps

1. Read `../../../SKILL.md` before doing substantial SEO work.
2. Load these repo-root references as needed:
   - `../../../references/scoring-rubric.md`
   - `../../../references/modern-seo-standards.md`
   - `../../../references/page-type-playbooks.md`
   - `../../../references/rewrite-patterns.md`
   - `../../../references/output-templates.md`
3. Follow the root skill workflow, scoring rules, rewrite guardrails, and output contract.

## Claude Code Guidance

- Default to `quick-audit` unless the user clearly requests a deeper review.
- Prefer specific evidence and concrete fix packs.
- Check first-hand experience, information gain, entity completeness, and trust cues before rewriting.
- Recommend schema only when the visible page supports it.
- Keep output concise unless the user asks for more depth.
- Do not invent proof points, unsupported claims, or first-hand expertise.
