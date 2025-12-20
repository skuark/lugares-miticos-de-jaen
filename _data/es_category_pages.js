import es_categories from './es_categories.json' with { type: 'json' };
import es_articles from './es_articles.json' with { type: 'json' };

const PAGE_SIZE = 10;

export default function() {
  const pages = [];

  for (const category of es_categories) {
    const articles = es_articles
      .filter(article =>
        article.categories &&
        article.categories.includes(category.name)
      )
      .sort((a, b) => new Date(b.published_at) - new Date(a.published_at));

    if (articles.length === 0) continue;

    const totalPages = Math.ceil(articles.length / PAGE_SIZE);

    for (let i = 0; i < totalPages; i++) {
      pages.push({
        category,
        articles: articles.slice(i * PAGE_SIZE, (i + 1) * PAGE_SIZE),
        pagination: {
          pageNumber: i,
          pages: Array(totalPages),
          href: {
            previous: i > 0 ? `/es/categories/${category.slug}${i === 1 ? '/' : `/page/${i}/`}` : null,
            next: i < totalPages - 1 ? `/es/categories/${category.slug}/page/${i + 2}/` : null
          }
        }
      });
    }
  }

  return pages;
}
