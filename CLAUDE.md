# Lugares Míticos de Jaén

A bilingual (Spanish/English) static website about mythical and legendary places in Jaén, Spain.

**Live site:** https://www.lugaresmiticosdejaen.com/

## Tech Stack

- **Static Site Generator:** Eleventy 3.x (11ty)
- **Templating:** Nunjucks (.njk)
- **Language:** ES Modules (type: module)

## Project Structure

```
├── .eleventy.js      # Eleventy configuration
├── data/             # JSON data files
│   ├── articles-en.json
│   ├── articles-es.json
│   ├── categories-en.json
│   ├── categories-es.json
│   └── localities.json
├── src/              # Source pages
│   ├── index.njk     # Root (language redirect)
│   └── es/           # Spanish pages
├── _includes/        # Templates and partials
│   └── layouts/
│       └── main.njk
└── _site/            # Build output (gitignored)
```

## Commands

```bash
npm run build    # Build the site
npm run serve    # Start dev server with hot reload
```

## Key Configuration

- **Static assets host:** `https://lmjstatic.deliriumcoder.com`
- **Collections:** `articlesEn`, `articlesEs` (loaded from JSON, reversed order)
- **Filters:** `limit` - limits array items
- **Shortcodes:** `featured_image` - generates image URLs from article media

## Data Structure

Articles contain:
- Content and metadata
- `media` array with images (look for `featured: true` and `type: "Photo"`)
- Image URLs available in multiple sizes via `image_urls` object

### Image Sizes

**Featured images** (`featured: true`):
| Key | Dimensions | Notes |
|-----|------------|-------|
| `big_teaser_desktop_hd` | 1920x768 | Cropped |
| `big_teaser_desktop` | 1120x448 | Cropped |
| `big_teaser_tablet` | 640x256 | Cropped |
| `big_teaser_mobile` | 480x192 | Cropped |
| `teaser_desktop_hd` | 640w | Proportional |
| `teaser_desktop` | 375w | Proportional |
| `teaser_tablet` | 320w | Proportional |
| `teaser_mobile` | 480w | Proportional |
| `facebook` | 1200x630 | Cropped |

**Non-featured images** (`featured: false`):
| Key | Dimensions | Notes |
|-----|------------|-------|
| `desktop_hd` | 1920w | Proportional |
| `desktop` | 1120w | Proportional |
| `tablet` | 640w | Proportional |
| `mobile` | 480w | Proportional |

All images also have an `original` size available.

## Deployment

Deployed via GitHub Actions to GitHub Pages.
