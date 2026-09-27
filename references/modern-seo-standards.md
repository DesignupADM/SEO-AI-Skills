# Modern SEO Standards

Use this reference when aligning recommendations to current Google Search guidance and modern content expectations.

## 1. Helpful Content And Information Gain

- Prioritize people-first content over search-engine-first content.
- Evaluate `Who`, `How`, and `Why`:
  - Who created the content?
  - How was it produced, tested, or experienced?
  - Why does the page exist for users?
- Favor pages with first-hand experience, original examples, unique process detail, or useful synthesis.
- Flag content that could be replaced by a generic AI summary with little or no loss in value.

## 2. AI-Feature Readiness

- Strong performance in AI features still depends on strong core SEO.
- Check whether:
  - crawling is allowed
  - important pages are easy to find through internal links
  - important content exists in textual form
  - page experience is likely strong
  - images and videos support the text where useful
  - structured data matches the visible page

## 3. Snippet And Answer Extraction

- Titles, headings, and anchors should be informative, relevant, and compact.
- Informational pages should answer the core question quickly.
- Use lists, tables, and concise definitions when they genuinely improve extraction.
- Write meta descriptions as useful summaries, not keyword piles.

## 4. Structured Data Rules

- Recommend only schema that the visible page can support honestly.
- Structured data must represent the page content truthfully.
- Missing required properties means the markup is not eligible for rich results.
- More recommended properties usually improve usefulness when they are real and supported.
- Do not mark up hidden, irrelevant, or non-user-visible content.
- Use entity-linking properties such as `sameAs`, `author`, or `publisher` only when the page and business can support them truthfully.

## 5. Business Details And Trust

- Business, local, and commercial pages benefit from clear identity and service details.
- Check for:
  - business or author identity
  - contact details
  - service area or location details
  - policies, support details, or proof signals when relevant
  - profile or organization signals that reinforce authority

## 6. Reviews And Comparisons

- Good review content explains the "why," not just the verdict.
- Look for:
  - original evidence
  - decision criteria
  - pros and cons
  - competitor or alternative coverage
  - explicit reasons for "best" claims
- If the page recommends a product or tool, the recommendation should be supported by experience, testing, or clear expert reasoning.

## 7. Crawling, Sitelinks, And Architecture

- `robots.txt` controls crawling, not indexing.
- For sitelinks and general discoverability, improve:
  - logical site structure
  - informative titles and headings
  - concise, relevant anchor text
  - links from relevant pages to important pages
- Prefer a hub-and-spoke internal-link pattern over isolated links.

## 8. Media And Multimodal Readiness

- Media should help users understand, compare, or trust the content.
- Check for:
  - descriptive filenames
  - alt text that reflects the image function or evidence
  - captions when they add clarity
  - surrounding text that explains why the media matters
- For video-led content, consider `VideoObject` or video-specific crawl strategy only when the asset is actually present.

## 9. Multilingual And Local Considerations

- Only suggest multilingual markup when alternate versions are real and meaningfully equivalent.
- Check page language, localization quality, and whether local pages are truly distinct rather than swapped-place duplicates.
- For local intent, make sure visible content and schema agree on NAP or service-area details.

## 10. What Not To Fake

Do not invent:

- first-hand testing or usage
- author credentials or operator expertise
- reviews, ratings, or customer proof
- stats, measurements, or benchmarks
- business policies or locations
- rankings, indexing, or performance claims

## Search-feature claims and freshness

Google says its AI features need no special optimization or dedicated schema beyond established SEO practices. Do not present GEO/AEO heuristics, special files, or answer formats as guaranteed routes to inclusion. Distinguish semantic schema validity from current rich-result eligibility; verify the target feature in official documentation before promising any search appearance.

## Source Notes

This reference distills current guidance from Google Search documentation covering:

- helpful, reliable, people-first content
- optimizing for generative AI and AI features
- snippets and sitelinks
- business details
- structured data policies
- crawling controls
- Core Web Vitals
- review quality guidance


Primary references (AI-features guidance checked 2026-09-28; recheck feature-specific requirements when used):

- [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Structured data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Supported structured data features](https://developers.google.com/search/docs/appearance/structured-data/search-gallery)

## Reconciling external advice

For the five supplied industry articles, see [source-review.md](source-review.md). Use [content-strategy.md](content-strategy.md) for their actionable synthesis. Prefer current primary platform documentation over dated checklists or vendor claims when a recommendation depends on search features or tools.
