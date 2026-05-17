---
name: seo-content-optimizer
description: Audit and improve SEO, GEO, and AEO performance for articles, landing pages, service pages, homepages, FAQs, and other web content. Use when Codex needs to analyze a live URL, full website, raw HTML, Markdown, CMS export, local content file, or pasted copy for search visibility, meta tags, heading structure, internal links, schema opportunities, AI-search clarity, featured snippet readiness, or content quality. Also use when the user asks to optimize an article, rewrite titles and meta descriptions, improve answer-engine performance, add FAQ sections, strengthen entity clarity, or re-check content after edits.
---

# SEO Content Optimizer

## Overview

Use this skill to run fast, evidence-based SEO reviews and produce concrete content fixes. Default to a quick, high-signal pass that surfaces the biggest problems and immediately returns improved copy, then go deeper only when the user asks for a comprehensive audit or the content clearly needs it.

## Workflow Decision Tree

1. Identify the input type: live URL, site, raw HTML, Markdown, local file, or pasted copy.
2. Choose one mode:
   - `quick-audit`: default for vague SEO requests and time-sensitive work.
   - `full-audit`: use only when the user clearly asks for a deep or comprehensive review.
   - `draft-optimization`: use for non-live articles, landing pages, or service-page copy.
   - `recheck`: use after edits to confirm what improved and what remains.
3. Ask at most one compact clarification question only when missing context materially changes the result. Combine keyword, audience, geography/language, and conversion goal into that one question.
4. Infer missing details cautiously when the user has already given enough context to move forward. Label assumptions explicitly.

## Step 1: Build Context

- Inspect the supplied artifact directly before making any claims.
- For a live page, collect the visible copy, title, meta description, canonical, robots directives, headings, structured data, internal links, and obvious trust signals.
- For a site audit, also inspect `robots.txt`, `sitemap.xml`, and the highest-signal pages: homepage, primary service or product page, about or team page, one representative article, FAQ or help page, and contact or location page when relevant.
- For a draft, treat missing technical elements as recommendations rather than observed defects.
- Never state that a page type, trust signal, FAQ, schema, or author detail is missing until it has been checked on the site or confirmed absent from the supplied artifact.
- If live fetching or rendering is unavailable, continue with the provided material and state the limitation plainly.

## Step 2: Choose Depth

### Quick Audit

- Default to this mode unless the user explicitly requests a full audit.
- Review one page in depth or one site entry point plus 3 to 6 high-signal pages.
- Focus on the issues most likely to change visibility or CTR quickly: title, meta description, H1, intent match, content depth, internal links, entity clarity, answer blocks, FAQ opportunities, and schema recommendations.

### Full Audit

- Use this mode for comprehensive site reviews, messy architecture, or when the user asks for a complete diagnosis.
- Expand from the starting page to all meaningful content pages.
- Skip only low-signal utility pages such as privacy policy, terms, account pages, checkout confirmations, and deep paginated archives.

### Draft Optimization

- Use this mode for articles, landing pages, service pages, or homepage copy that is not yet published.
- Optimize structure, clarity, snippet eligibility, and metadata even when technical SEO cannot be verified from the artifact alone.

### Recheck

- Use this mode after edits.
- Compare the revised content against the prior findings and note what improved, what still needs work, and what now requires engineering or analytics validation.

## Step 3: Analyze

- Load [scoring-rubric.md](references/scoring-rubric.md).
- Score SEO, GEO, and AEO separately.
- Capture evidence in this form: page or section, observation, impact, recommended fix.
- Prioritize issues that block discoverability, distort topic clarity, weaken trust, or prevent clean answer extraction.
- Quote exact text when it helps explain the problem, but keep excerpts short.

## Step 4: Produce A Fix Pack

For every primary page or draft under review, provide:

- Revised SEO title
- Revised meta description
- Recommended H1
- A 40 to 60 word answer-first intro or summary block
- Three FAQ questions with short answers when they fit the page
- Suggested internal-link targets and anchor text ideas
- Recommended schema type
- The top content edits in priority order

Add these extras when the page type calls for them:

- For articles: suggested slug, stronger outline or H2 set, snippet-friendly list or table idea, entity or term coverage gaps
- For service or landing pages: sharper value proposition, proof elements to add, CTA alignment fixes
- For homepage copy: clearer positioning, stronger navigational paths, and trust-signal placement
- For local pages: NAP consistency checks, location phrases, and local business schema recommendation

## Step 5: Apply Safe Rewrite Rules

- Load [page-type-playbooks.md](references/page-type-playbooks.md) when tailoring recommendations to a specific page type.
- Load [rewrite-patterns.md](references/rewrite-patterns.md) when generating titles, metas, intros, FAQs, schema suggestions, and internal-link ideas.
- Preserve factual accuracy, legal meaning, and brand voice.
- Do not invent statistics, testimonials, awards, certifications, locations, citations, author credentials, clients, or case-study outcomes.
- Prefer concise, specific, answer-first writing over keyword stuffing.
- Keep titles near 50 to 60 characters and meta descriptions near 140 to 160 characters unless a justified exception improves clarity.
- Use natural question phrasing when adding AEO-focused sections.

## Step 6: Recheck And Close

- Re-score the page or site after proposing or applying edits.
- Separate observed facts from assumptions.
- Call out unresolved items that require external tools or data, such as Core Web Vitals, backlinks, indexing status, or actual rankings.
- If the user asked for direct edits, lead with the improved copy and keep the audit narrative brief.

## Output Contract

When the user asks for a quick audit or gives a vague SEO request, default to this compact structure:

1. Scope reviewed
2. SEO, GEO, and AEO score table
3. Top three priorities
4. Biggest strength
5. Fix pack for the primary page or draft
6. Optional next steps if deeper work is warranted

When the user asks to edit content directly, skip the long audit narrative and return:

1. Revised copy
2. Supporting metadata and FAQ additions
3. A short rationale tied to SEO, GEO, or AEO improvements

## References

- [scoring-rubric.md](references/scoring-rubric.md): weighted scoring rules and severity calibration
- [page-type-playbooks.md](references/page-type-playbooks.md): page-specific patterns and quick wins
- [rewrite-patterns.md](references/rewrite-patterns.md): title, meta, intro, FAQ, internal-link, and schema patterns
- [output-templates.md](references/output-templates.md): concise response templates for quick audits, fix packs, and rechecks
