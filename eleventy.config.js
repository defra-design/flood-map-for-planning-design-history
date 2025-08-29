import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin'

export default function(eleventyConfig) {
  const isProd = process.env.GITHUB_ACTIONS
  const pathPrefix = isProd ? '/flood-map-for-planning-design-history/' : '/'

  // GOV.UK plugin
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
      productName: 'Flood map for planning design history',
      search: {
        indexPath: `${pathPrefix}search-index.json`,
        sitemapPath: `${pathPrefix}sitemap/`
      }
    },
    footer: {
      meta: {
        items: [
          { href: 'sitemap/', text: 'Sitemap' },
          { href: 'tags/', text: 'Tagged content' },
          { href: 'https://github.com/defra-design/flood-map-for-planning-design-history', text: 'GitHub' }
        ]
      }
    },
    headingPermalinks: true,
    stylesheets: [`${pathPrefix}styles/application.css`],
    templates: {
      searchIndex: true,
      tags: true
    },
    url: `https://defra-design.github.io/flood-map-for-planning-design-history/`
  })

  // Passthrough copy
  eleventyConfig.addPassthroughCopy({ './app/images': '.' })

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      layouts: '_layouts',
      includes: '_components',
      output: '_site'
    },
    pathPrefix
  }
}
