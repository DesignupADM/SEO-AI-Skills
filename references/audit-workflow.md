# Audit workflow

## Scope and tools

For a single URL, inspect that page and follow only links needed to substantiate a finding. For a quick site review, sample the entry page plus up to five relevant pages covering important templates or user journeys. This is a sample, not a complete crawl.

For a full audit, discover the available page inventory using supplied exports, navigation, or sitemaps. Choose and state a finite page set or crawl budget before expanding. For a small site, inspect all relevant pages; for a large site, sample templates and important journeys, then identify what remains. Do not call a sample exhaustive. Include utility pages when they supply evidence relevant to trust, navigation, or the user's question.

Stay within the requested site and locale. Deduplicate URL variants; avoid parameter, calendar, pagination, and faceted-navigation traps. Stop at the stated budget, completed inventory, access restriction, or repeated failure. On an access failure, try a materially different available read method if useful; do not repeat the same failed call indefinitely. Report inspected, inaccessible, and pending pages.

Use browser rendering when source HTML is insufficient and a browser is available. Use authenticated CMS or analytics tools only within the user's scope. Do not require installation or credentials for a content review that can proceed from supplied material.

## Evidence to capture

Inspect relevant visible copy, page purpose, title, description, headings, canonical and robots directives, links, structured data, authorship or business identity, media, and locale signals. For a site review, inspect robots and sitemap information when accessible and useful. Missing sitemap.xml at that exact path does not prove no sitemap exists.

Keep a compact record for each substantive finding:

| Field | Meaning |
|---|---|
| Source | URL or file and section, selector, or line |
| Evidence | Short observed excerpt or tool result; note source HTML versus rendered or extracted text |
| Status | Observed, user-supplied, inferred, or unverified |
| Finding | Specific issue and likely user/search consequence |
| Confidence | High, medium, or low, with material uncertainty |
| Action | Concrete fix, severity, effort, and verification method |

Do not interpret a robots directive as proof of actual indexing state. A draft can support content findings but not claims about server headers or live rendering. Link to sources in reports; record retrieval time for live observations when a future comparison matters.

## Larger tasks and handoffs

For multi-page work likely to span sessions, save a compact progress artifact in the requested workspace: scope, inspected and pending URLs, findings, changes, validation state, and next action. Reuse an existing task artifact instead of creating duplicate reports. Do not persist credentials or unnecessary personal data.

## Recheck

Compare the same page and criteria against the supplied prior report or saved baseline. Identify resolved, remaining, newly observed, and unverified findings. Verify actual edits before marking them resolved. Keep source-file validation, rendered-page validation, and search-performance measurement separate.
