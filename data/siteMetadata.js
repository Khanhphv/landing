const siteMetadata = {
  siteUrl: `${process.env.NODE_ENV !== 'development' ? process.env.BASE_URL : 'http://localhost:3000'}`,
  siteAPI: `${process.env.BASE_API}`,
  title: '',
  author: '',
  headerTitle: '',
  description: '',
  keyword: '',
  language: 'en-us',
  theme: 'light', // system, dark or light
  siteRepo: '',
  siteLogo: `${process.env.BASE_PATH || ''}/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/banner.png`,
  mastodon: '',
  email: '',
  github: 'https://github.com',
  x: 'https://twitter.com/x',
  twitter: 'https://twitter.com/Twitter',
  facebook: 'https://facebook.com',
  youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com',
  threads: 'https://www.threads.net',
  instagram: 'https://www.instagram.com',
  telegram: '',
  discord: '',
  locale: 'en-US',
  // set to true if you want a navbar fixed to the top
  stickyNav: false,
  analytics: {},
  brand: '',
}

module.exports = siteMetadata
