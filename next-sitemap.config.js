/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://architecture-studio.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  transform: (config, path) => ({
    loc: path,
    changefreq: config.changefreq,
    priority: config.priority,
    lastmod: new Date().toISOString(),
  }),
}
