# Scoring Rubric

Use this rubric to keep quick audits consistent and to make fixes actionable instead of subjective.

## Scoring Method

1. Score each dimension independently.
2. Use the weighted checklist below.
3. Convert the earned points into a 1 to 10 score with `round(earned / max * 10)`.
4. Round down by one point when a critical failure is present, such as:
   - the page is unintentionally `noindex`
   - the page lacks a usable title or H1
   - the page has no clear primary topic
   - the content makes unsupported trust claims

For site audits, weight the homepage and primary money pages more heavily than support articles or secondary pages.

## SEO: 40 Points

| Signal | Points | What good looks like |
|---|---:|---|
| Title tag | 5 | Clear topic, good CTR potential, roughly 50 to 60 chars |
| Meta description | 4 | Compelling summary, intent match, roughly 140 to 160 chars |
| H1 and heading hierarchy | 5 | One clear H1, logical H2 and H3 structure |
| Canonical, robots, indexability | 5 | Crawlable, self-consistent, no accidental blocking |
| URL clarity | 2 | Readable slug with topical phrasing |
| Internal links | 4 | Relevant paths, descriptive anchors, sensible placement |
| Content depth and intent match | 7 | Satisfies likely query intent without thin sections |
| Readability and scannability | 4 | Short paragraphs, lists, subheads, clean formatting |
| Image and media support | 2 | Helpful alt text and media that supports the topic |
| Structured data basics | 2 | Appropriate schema is present or clearly recommended |

## GEO: 35 Points

| Signal | Points | What good looks like |
|---|---:|---|
| Entity clarity | 6 | Brand, person, or service is named clearly and consistently |
| Expertise and trust signals | 8 | Credentials, proof, authorship, about/contact depth |
| Factual density | 8 | Specific facts, examples, process details, meaningful specificity |
| Originality and point of view | 6 | Distinct perspective, original framing, useful differentiation |
| AI-synthesis friendliness | 7 | Clean structure, explicit claims, rich but understandable schema |

## AEO: 25 Points

| Signal | Points | What good looks like |
|---|---:|---|
| Direct answer block | 6 | A concise answer appears near the top |
| Question-based headings | 5 | Natural `how`, `what`, `why`, `when`, or `who` headings where useful |
| List or table extraction potential | 5 | Steps, comparisons, checklists, or tables are easy to extract |
| FAQ or HowTo structure | 5 | FAQ or step-by-step content is present or easy to add |
| Voice and local readiness | 4 | Conversational phrasing and local cues when relevant |

## Severity Calibration

- `Critical`: likely blocking discoverability, trust, or answer extraction
- `High`: materially limiting rankings, CTR, AI citation potential, or conversion clarity
- `Medium`: worthwhile structural or content improvements with meaningful upside
- `Quick win`: low-effort metadata, formatting, FAQ, schema, or internal-link improvements

## What To Flag Explicitly

- Missing or weak title, meta, or H1 on important pages
- Thin service pages or articles that do not satisfy search intent
- Weak entity definition or absent trust cues on high-value pages
- No answer-first section for pages targeting informational intent
- No FAQ, list, or table opportunities on pages that naturally support them
- Schema gaps on pages where the type is obvious

## What Not To Pretend To Measure

Do not guess at:

- rankings
- backlink quality
- indexing status beyond visible directives
- Core Web Vitals
- rendered JavaScript completeness
- AI citation frequency

Name the limitation and recommend the right external tool when needed.
