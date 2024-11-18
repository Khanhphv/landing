const siteMetadata = {
  siteUrl: `${process.env.NODE_ENV !== 'development' ? process.env.BASE_URL : 'http://localhost:3000'}`,
  siteAPI: `${process.env.BASE_API}`,
  title: 'SkyDev',
  author: 'SkyDevers',
  headerTitle: 'SkyDev',
  description:
    'SkyDev is your top source for Valorant Skin Changer & Counter-Strike 2 SkinChanger in 2024. Discover the best gaming mods today.',
  keyword:
    'valorant skin changer,valorant skin changer 2024,skin changer valorant 2024,skin changer valorant,free valorant skins,how to get valorant skin changer,skin changer for valorant,valorant skin changer free,free valorant skin changer,valorant skin changer legit,free valorant swapper,valorant skin swapper,valorant skinchanger,how to download skin changer for valorant,valorant skin hack,valorant skin changer free download,valorant skin changer download,skin swapper',
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
  brand: 'SkyDev',
}

module.exports = siteMetadata
