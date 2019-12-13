module.exports = {
  policy: [
    {
      userAgent: 'Googlebot',
      allow: '/',
      crawlDelay: 2,
    },
    {
      userAgent: 'OtherBot',
      allow: ['/allow-for-all-bots', '/allow-only-for-other-bot'],
      crawlDelay: 2,
    },
    {
      userAgent: '*',
      allow: '/',
      crawlDelay: 10,
    },
  ],
  sitemap: 'https://crespi.world/map.xml',
  host: 'https://crespi.world',
};
