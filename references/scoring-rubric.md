# Scoring Rubric

Use scores only when requested or useful for a comparable baseline. These are editorial heuristics, not Google scores, measured AI visibility, or predictions of ranking gains.

## Scoring Method

1. For each criterion, record applicable/observed, unverified, or not applicable, with evidence. Do not treat missing access as failure.
2. Award zero, half, or full weight for an observed criterion: unmet, partly met, or met. Explain partial judgments briefly.
3. Calculate `round(earned_observed_points / observed_applicable_points * 10, 1)` on a 0–10 scale. If the denominator is zero, report `not assessed`.
4. Report coverage as observed applicable weight divided by total applicable weight, alongside excluded and unverified criteria. Below 50% coverage, report `insufficient evidence` instead of a headline score. This threshold is a reporting convention.
5. Report critical blockers separately; do not apply an unexplained extra score penalty.
6. Compare before/after scores only on the same criteria, weights, and evidence scope. Keep proposed-copy assessments separate from verified changes. Prefer page-level results; if aggregating a site score, disclose the page weights and sampling limits.

## SEO: 40 Points

| Signal | Points | What good looks like |
|---|---:|---|
| Title link quality | 4 | Clear topic, good CTR potential, informative and compact |
| Meta description and snippet controls | 4 | Helpful summary, intent match, no snippet-hostile controls unless intentional |
| H1 and heading hierarchy | 4 | Clear primary heading and logical section structure |
| Canonical, robots, indexability | 5 | Crawlable, self-consistent, no accidental blocking |
| URL clarity | 2 | Readable slug with topical phrasing |
| Internal links and site structure | 4 | Important pages are easy to reach, anchors are relevant, cluster paths are sensible |
| Content depth and intent match | 5 | Satisfies likely query intent without thin or off-topic sections |
| Readability and scannability | 3 | Short paragraphs, lists, subheads, clean formatting |
| Image and media support | 4 | Descriptive filenames, alt text, captions, and context when media matters |
| Structured data eligibility | 3 | Relevant type, honest fit, visible-page support, no policy mismatch |
| Locale and language alignment | 2 | Language targeting, localization, and alternate versions are coherent when relevant |

## GEO: 35 Points

| Signal | Points | What good looks like |
|---|---:|---|
| Entity clarity | 5 | Brand, person, product, or service is named clearly and consistently |
| First-hand experience and expertise | 7 | Experience, testing, use, authorship, or operator knowledge is visible and believable |
| Trust and identity signals | 6 | About/contact depth, policies, proof, profile signals, business details, sameAs opportunities |
| Factual density and source handling | 6 | Specific facts, examples, process details, cited or attributable evidence where needed |
| Information gain and originality | 6 | Distinct perspective, original framing, net-new value beyond generic consensus content |
| AI-synthesis friendliness | 5 | Clear claims, strong structure, text availability, and schema that matches visible content |

## AEO: 25 Points

| Signal | Points | What good looks like |
|---|---:|---|
| Direct answer block | 5 | A concise answer appears near the top |
| Question-based headings | 4 | Natural `how`, `what`, `why`, `when`, or `who` headings where useful |
| List or table extraction potential | 4 | Steps, comparisons, checklists, or tables are easy to extract |
| Answer format fit | 5 | The format serves the intent; FAQs or steps only where useful |
| Voice and local readiness | 3 | Conversational phrasing and local cues when relevant |
| Micro-intent fit | 4 | Comparison, review, local, tutorial, or transactional sub-intents are handled explicitly |

## Severity Calibration

- `Critical`: likely blocking discoverability, trust, or answer extraction
- `High`: materially limiting rankings, CTR, AI citation potential, or conversion clarity
- `Medium`: worthwhile structural or content improvements with meaningful upside
- `Low`: minor clarity or presentation issue

Record effort separately as small, medium, or large. A quick win is an effort/impact judgment, not severity.

## What To Flag Explicitly

- Missing or weak title, meta, or H1 on important pages
- Thin service pages or articles that do not satisfy search intent
- Weak entity definition or absent trust cues on high-value pages
- Generic "consensus content" with little or no information gain
- Missing author, operator, or expertise hook where trust matters
- No answer-first section for pages targeting informational intent
- No FAQ, list, or table opportunities on pages that naturally support them
- Schema gaps on pages where the type is obvious
- Misleading schema or schema that does not match the visible page
- Poor media support on pages where original visuals, captions, or diagrams could strengthen clarity
- Weak internal-link architecture that leaves money pages or pillar pages isolated

## High-Value Questions

- Would this page still feel useful if it lost all keyword phrasing and had to stand on its substance alone?
- Does the page show why the author or business knows this topic?
- Is there any original evidence, example, process, comparison, or insight a generic AI summary would not provide?
- Are the supporting entities and subtopics complete enough for the page's intent?
- Is the page easy for search engines and answer engines to parse into one main topic plus supporting answers?

## What Not To Pretend To Measure

Do not guess at:

- rankings
- backlink quality
- indexing status beyond visible directives
- Core Web Vitals
- rendered JavaScript completeness
- AI citation frequency

Name the limitation and recommend the right external tool when needed.
