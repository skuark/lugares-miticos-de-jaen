import regions from './raw/regions.json' with { type: 'json' };
import es_articles from './raw/es_articles.json' with { type: 'json' };

// Count articles per locality
const articleCounts = {};
es_articles.forEach(article => {
  (article.localities || []).forEach(localityName => {
    articleCounts[localityName] = (articleCounts[localityName] || 0) + 1;
  });
});

// Flatten all localities from regions and sort alphabetically by name
const allLocalities = regions
  .flatMap(region =>
    region.localities.map(locality => ({
      ...locality,
      region: {
        name: region.name,
        slug: region.slug
      },
      articleCount: articleCounts[locality.name] || 0
    }))
  )
  .sort((a, b) => a.name.localeCompare(b.name, 'es'));

export default allLocalities;
