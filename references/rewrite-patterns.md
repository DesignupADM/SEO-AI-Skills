# Rewrite Patterns

Use placeholders and adapt them to the brand, page type, and search intent. Do not fill gaps with invented facts.

## Title Patterns

### Homepage

`Primary Offer | Brand`

### Service page

`Service Name for Audience | Brand`

### Article

`Primary Topic: Specific Benefit, Process, or Comparison`

### Comparison or review page

`X vs Y: Best Choice for [Use Case]`

### Tutorial or how-to page

`How to [Achieve Outcome]`

## Meta Description Pattern

Use this formula:

`State what the page helps with + mention the audience or outcome + add one concrete differentiator, proof cue, or next step.`

Keep the copy specific and readable. Avoid stuffing multiple keyword variants into one sentence.

## H1 Pattern

Use a single H1 that matches the dominant page intent:

- `What the page is about`
- `Who it is for`
- `What outcome it helps achieve`

Prefer clarity over cleverness.

## Entity Definition Pattern

Use this near the top of pages that define a topic, service, tool, or concept:

`[Entity] is [plain-language category or type] that helps [audience] [outcome].`

This helps establish the topic cleanly for users and parsers before you expand into detail.

## Author Or Expertise Hook Pattern

Use this near the intro when trust or first-hand experience matters:

`This guide is based on [role, process, testing, implementation experience, or direct work] with [topic or audience].`

Only use this when the underlying fact is true and supported by the page or the user.

## Answer-First Intro Pattern

When useful, use a concise opening block (40 to 60 words is a drafting heuristic) that answers the likely core query immediately:

`[Topic] is [plain definition or outcome]. It helps [audience] [benefit]. On this page, explain [key angle], cover [important subtopics], and show [proof, examples, or next steps] so the visitor can act confidently.`

If the page is commercial, swap the final clause toward outcomes, deliverables, trust, or next-step clarity.

## Information-Gain Upgrade Pattern

If the draft feels generic, suggest one or more of these additions:

- a first-hand example or implementation note
- an original checklist, framework, or evaluation method
- a data point, measurement, or benchmark the site can support honestly
- a before-and-after comparison
- a myth-vs-fact clarification
- a screenshot, diagram, or workflow visual that explains the topic better than plain text alone

## FAQ Pattern

Choose questions a real user would ask after reading the main copy:

- `What is ...?`
- `How does ... work?`
- `How long does ... take?`
- `How much does ... cost?`
- `What should I look for when choosing ...?`

Answer in this order:

1. Direct answer in one or two sentences
2. One supporting detail
3. One internal link or next step when useful

For comparison, review, and tutorial pages, prefer questions tied to decisions, tradeoffs, prerequisites, or steps.

## Internal-Link Pattern

Treat internal linking as a hub-and-spoke system:

- Link up to the nearest pillar or category page from detailed subtopic pages
- Link down from pillar pages to the most useful supporting pages
- Link across to adjacent pages that answer the next logical question
- Link from informational pages into the nearest relevant commercial or proof page

Anchor text should describe the destination naturally. Keep anchors concise, relevant, and varied enough to avoid obvious exact-match repetition.

## Schema Selection Pattern

These are vocabulary candidates, not guaranteed Google rich-result features. Check current engine-specific eligibility before recommending implementation. Do not add FAQ or HowTo markup solely to chase search appearance.

- Homepage: `Organization` or `LocalBusiness`, plus `WebSite` and `WebPage` when the page supports them
- Service page: `Service`, plus `FAQPage` when visible FAQs exist
- Article: `Article` or `BlogPosting`, and connect to a real author or profile when possible
- Author or team page: `ProfilePage` with `Person` or `Organization`
- FAQ page or FAQ section: `FAQPage`
- Tutorial page: `HowTo` when the page truly presents steps
- Comparison or review page: `Review`, `Product`, or `SoftwareApplication` when visible content supports the type
- Course page: `Course`
- Video-led page: `VideoObject`
- Location page: `LocalBusiness` when the business truly has local relevance
- Site structure: `BreadcrumbList` when breadcrumbs exist

Key property ideas to consider when supported:

- `sameAs` for brand, author, or organization identity
- `author`, `publisher`, and `mainEntityOfPage` for content pages
- `reviewRating`, `itemReviewed`, and `positiveNotes` or `negativeNotes` only when the page visibly contains them
- `areaServed`, `address`, `openingHours`, and `telephone` for local business pages
- `inLanguage` and language-aware page metadata when localization is relevant

Recommend schema that the page can support honestly. Structured data must match the visible page, and missing required properties means the markup is not eligible for rich results.

## Media Pattern

When media could strengthen the page, suggest:

- descriptive filenames
- alt text that explains the image's function or evidence
- short captions that add context rather than repeat the alt text
- nearby copy that tells users why the image, chart, or video matters

Prefer original visuals when the page relies on proof, demonstration, or comparison.

For meaningful images, describe the information or function in context without keyword stuffing. Decorative images should use an empty alternative where appropriate; do not give every image a promotional description. For video or audio, recommend accurate captions/transcripts and a useful surrounding summary when relevant; do not invent a transcript from an inaccessible recording.

## Safe Rewrite Guardrails

- Preserve claims unless the user asks to reposition the offer
- Preserve legal or compliance language unless specifically told to revise it
- Do not fabricate proof
- Do not fabricate first-hand use, testing, expertise, or customer experience
- Do not turn every heading into an awkward keyword phrase
- Do not write intros that delay the answer
- Do not recommend FAQ, HowTo, Review, Product, or LocalBusiness markup unless the visible page really supports it
