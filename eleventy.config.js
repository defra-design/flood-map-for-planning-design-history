import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin'

export default function (eleventyConfig) {
  // Options to customise the appearance of your design history
  // https://x-govuk.github.io/govuk-eleventy-plugin/options/
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
      productName: 'Flood map for planning design history',
      search: {
        indexPath: '/search-index.json',
        sitemapPath: '/sitemap'
      }
    },
    footer: {
      meta: {
        items: [
          {
            href: 'https://flood-map-for-planning-proto.herokuapp.com/',
            text: 'Prototype herokuapp'
          },
          {
            href: '/sitemap',
            text: 'Sitemap'
          },
          {
            href: '/tags',
            text: 'Tagged content'
          },
          {
            href: 'https://github.com/defra-design/flood-map-for-planning-design-history',
            text: 'Deign history GitHub'
          },
          {
            href: 'https://github.com/defra-design/flood-map-for-planning-2',
            text: 'Prototype GitHub'
          }
        ]
      }
    },
    headingPermalinks: true,
    stylesheets: [
      '/styles/application.css'
    ],
    templates: {
      searchIndex: true,
      tags: true
    },
    url:
      process.env.GITHUB_ACTIONS &&
      'https://x-govuk.github.io/govuk-design-history-template/'
  })

  // Passthrough
  eleventyConfig.addPassthroughCopy({ './app/images': '.' })

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      layouts: '_layouts',
      includes: '_components'
    },
    pathPrefix: process.env.GITHUB_ACTIONS && '/govuk-design-history-template/'
  }
}
