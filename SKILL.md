---
name: seo-content-optimizer
description: Use when auditing or optimizing SEO, GEO, or AEO content from a URL, website, HTML, Markdown, CMS export, local file, or draft. Covers metadata, search intent, headings, internal links, schema fit, trust and first-hand evidence, entity coverage, localization, snippets, and AI-search clarity.
---

# SEO Content Optimizer

## Overview

Use this skill to run fast, evidence-based SEO reviews and produce concrete content fixes. Default to a quick, high-signal pass that surfaces the biggest problems and immediately returns improved copy, then go deeper only when the user asks for a comprehensive audit or the content clearly needs it.

Modern search visibility is not just metadata. Treat helpful, people-first content, first-hand experience, clean crawlability, internal-link architecture, structured data accuracy, and answer extraction as part of the same system.

## When to Use

- Audit a live page or website for SEO, GEO, or AEO issues.
- Optimize unpublished web copy, metadata, or page structure.
- Re-check content after revisions.
- Use this skill for evidence-based content recommendations; use a technical SEO or analytics workflow when the task requires crawl data, rankings, performance measurements, or Search Console access.

## Workflow Decision Tree

1. Identify the input type: live URL, site, raw HTML, Markdown, local file, or pasted copy.
2. Choose one mode:
   - `quick-audit`: default for vague SEO requests and time-sensitive work.
   - `full-audit`: use only when the user clearly asks for a deep or comprehensive review.
   - `draft-optimization`: use for non-live articles, landing pages, or service-page copy.
   - `recheck`: use after edits to confirm what improved and what remains.
3. Ask at most one compact clarification question only when missing context materially changes the result. Combine keyword, audience, geography or language, and conversion goal into that one question.
4. Infer missing details cautiously when the user has already given enough context to move forward. Label assumptions explicitly.

## Step 1: Build Context

- Inspect the supplied artifact directly before making any claims.
- For a live page, collect the visible copy, title, meta description, canonical, robots directives, headings, structured data, internal links, author or business details, media usage, and obvious trust signals.
- For a site audit, also inspect `robots.txt`, `sitemap.xml`, and the highest-signal pages: homepage, primary service or product page, about or team page, one representative article, FAQ or help page, contact or location page, and any comparison, review, or tutorial pages when relevant.
- For a draft, treat missing technical elements as recommendations rather than observed defects, but still inspect copy for page intent, entity clarity, answer extraction, trust cues, information gain, and media opportunities.
- Never state that a page type, trust signal, FAQ, schema, or author detail is missing until it has been checked on the site or confirmed absent from the supplied artifact.
- If the page is multilingual or location-sensitive, inspect language targeting, localized phrasing, alternate versions, and whether the page actually serves a distinct region or audience.
- If live fetching or rendering is unavailable, continue with the provided material and state the limitation plainly.

## Step 2: Choose Depth

### Quick Audit

- Default to this mode unless the user explicitly requests a full audit.
- Review one page in depth or one site entry point plus 3 to 6 high-signal pages.
- Focus on the issues most likely to change visibility or CTR quickly: title, meta description, H1, intent match, content depth, internal links, entity clarity, answer blocks, FAQ opportunities, schema recommendations, trust cues, and information gain.

### Full Audit

- Use this mode for comprehensive site reviews, messy architecture, or when the user asks for a complete diagnosis.
- Expand from the starting page to all meaningful content pages.
- Skip only low-signal utility pages such as privacy policy, terms, account pages, checkout confirmations, and deep paginated archives.

### Draft Optimization

- Use this mode for articles, landing pages, service pages, or homepage copy that is not yet published.
- Optimize structure, clarity, snippet eligibility, metadata, entity coverage, and trust cues even when technical SEO cannot be verified from the artifact alone.

### Recheck

- Use this mode after edits.
- Compare the revised content against the prior findings and note what improved, what still needs work, and what now requires engineering or analytics validation.

## Step 3: Analyze

- Load [scoring-rubric.md](references/scoring-rubric.md).
- Load [modern-seo-standards.md](references/modern-seo-standards.md) when calibrating to current Google guidance for helpful content, AI features, snippets, structured data, reviews, sitelinks, or crawl controls.
- Score SEO, GEO, and AEO separately.
- Capture evidence in this form: page or section, observation, impact, recommended fix.
- Prioritize issues that block discoverability, distort topic clarity, weaken trust, or prevent clean answer extraction.
- Judge the page against its likely intent and page type before proposing fixes. Do not push FAQ, comparison, or HowTo patterns onto pages that do not support them.
- Evaluate `Who`, `How`, and `Why`: who created the content, how experience or evidence is shown, and why the page exists for users.
- Check for information gain. Flag pages that read like generic search-summary or AI-summary content without unique examples, data, process detail, or first-hand insight.
- Check entity coverage and semantic completeness. Note which supporting terms, subtopics, or adjacent entities are needed for the topic to feel complete.
- For business and local pages, inspect identity, contact, policy, and service-area signals before recommending stronger trust blocks.
- For review, comparison, and recommendation content, look for evidence, decision criteria, pros and cons, and original reasoning.
- For media-heavy pages, inspect filenames, alt text, captions, surrounding copy, and whether the images or video actually add evidence or clarity.
- Recommend structured data only when the visible page can support it honestly.
- Quote exact text when it helps explain the problem, but keep excerpts short.

## Step 4: Produce A Fix Pack

Match the deliverables to the selected mode. Do not force a full fix pack into a quick audit.

- For `quick-audit`, give the highest-impact findings and only the rewrite suggestions that address them.
- For `full-audit`, give page-level findings and a prioritized site-wide action plan.
- For `draft-optimization`, lead with the revised copy and supporting elements that fit the page.
- For `recheck`, compare the revised artifact with the recorded baseline and identify remaining work.

Choose relevant items from this fix-pack menu:

- Revised SEO title
- Revised meta description
- Recommended H1
- Recommended author, expertise, or trust hook when relevant
- A 40 to 60 word answer-first intro or summary block
- Three FAQ questions with short answers when they fit the page
- Suggested internal-link targets and anchor text ideas
- Recommended schema type and key supporting properties
- Missing supporting entities, subtopics, or comparison points
- Media improvements such as alt text, captions, proof screenshots, diagrams, or video cues when they would help
- The top content edits in priority order

Add these extras when the page type calls for them:

- For articles: suggested slug, stronger outline or H2 set, snippet-friendly list or table idea, expertise hook, and entity or term coverage gaps
- For service or landing pages: sharper value proposition, proof elements to add, CTA alignment fixes, and trust or policy signals to surface
- For homepage copy: clearer positioning, stronger navigational paths, cluster-entry links, and trust-signal placement
- For local pages: NAP consistency checks, location phrases, and local business schema recommendation
- For comparison or review pages: verdict summary, evaluation criteria, pros and cons, competitor coverage, and evidence gaps
- For tutorials or how-to pages: prerequisites, step structure, outcome summary, and HowTo or video opportunities

## Step 5: Apply Safe Rewrite Rules

- Load [page-type-playbooks.md](references/page-type-playbooks.md) when tailoring recommendations to a specific page type.
- Load [rewrite-patterns.md](references/rewrite-patterns.md) when generating titles, metas, intros, FAQs, schema suggestions, and internal-link ideas.
- Keep [modern-seo-standards.md](references/modern-seo-standards.md) in mind when deciding whether a rewrite is truly helpful, whether a schema type is legitimate, and whether a page has enough information gain.
- Preserve factual accuracy, legal meaning, and brand voice.
- Do not invent statistics, testimonials, awards, certifications, locations, citations, author credentials, clients, case-study outcomes, first-hand testing, or customer-service policies.
- Prefer concise, specific, answer-first writing over keyword stuffing.
- Keep titles near 50 to 60 characters and meta descriptions near 140 to 160 characters unless a justified exception improves clarity.
- Use natural question phrasing when adding AEO-focused sections.
- Make titles, headings, and anchors informative and compact rather than clever-but-vague.
- When the page is too generic, recommend a clear information-gain upgrade path instead of padding it with synonyms.
- Keep structured data recommendations aligned with visible content and supported properties.

## Step 6: Recheck And Close

- Re-score the page or site after proposing or applying edits.
- Separate observed facts from assumptions.
- Call out unresolved items that require external tools or data, such as Core Web Vitals, backlinks, indexing status, actual rankings, rich-result validation, or Search Console performance data.
- If the user asked for direct edits, lead with the improved copy and keep the audit narrative brief.

## Limitations

- Do not claim to verify rankings, backlinks, indexing, Core Web Vitals, or Search Console results without the relevant data or tools.
- Treat technical elements not visible in the supplied artifact as unverified, not absent.
- Do not invent experience, credentials, evidence, or business claims to make a page appear more authoritative.

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
- [modern-seo-standards.md](references/modern-seo-standards.md): distilled Google-search guidance for helpful content, AI features, snippets, structure, and schema policies
- [page-type-playbooks.md](references/page-type-playbooks.md): page-specific patterns and quick wins
- [rewrite-patterns.md](references/rewrite-patterns.md): title, meta, intro, FAQ, internal-link, and schema patterns
- [output-templates.md](references/output-templates.md): concise response templates for quick audits, fix packs, and rechecks
