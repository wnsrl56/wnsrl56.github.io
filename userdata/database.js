/* DO NOT CHANGE THE GLOBAL VARIABLE NAME */

window.VUELOG_DATABASE = {
  config: {
    // The name of your site, will be displayed in browser tab and site header.
    brand: {
      'en-US': 'Jun\'s DevLog',
    },

    // Put the site brand behind current page in `document.title`.
    brandTrailing: false,

    // The image displayed in site header right beside the brand.
    logo: './static/vuelog.svg',

    // Path to the domain root that serves your site, starts and ends with slash (`/`).
    // Set to `'/'` if your site is under domain root.
    base: '/',

    // The path to route to when you visit `/`.
    // Set to `/home`, `/blog` or a valid path at your need.
    homePath: '/blog',

    // Whether footer is visible on `homePath` or not.
    homeFooter: true,

    // Vuelog interface language. Currently supports 'en-US', 'zh-CN', 'de-DE', 'pt-BR' and 'es-MX'.
    defaultLang: 'en-US',

    // Allow/disallow visitors to switch interface language.
    switchLang: true,

    // Available languages for switching. Must be a subset of supported languages, or leave empty.
    selectedLangs: [],

    // Number of posts listed in a blog/category view.
    postsCount: 15,

    // Fill in the shortname to integrate Disqus with your blog.
    disqusShortname: '',

    // Fill in the uid to integrate LiveRe with your blog.
    livereUid: '',

    // Options for marked, see https://github.com/chjj/marked#options-1 for detail
    markedOptions: {}
  },

  navigation: [
    {
      label: {
        'en-US': 'Posts',
      },
      type: 'posts',
      path: '/blog'
    },
    {
      label: {
        'en-US': 'Archive',
      },
      type: 'archive',
      path: '/archive'
    },
    {
      label: {
        'en-US': 'About',
      },
      type: 'page',
      path: '/page/about'
    },
  ],
  // {
  //   title: {
  //     'en-US': 'Vuelog Guide',
  //   },
  //   slug: 'guide',
  //     exclude: true, // (OPTIONAL) `true` to exclude the page from archive view
  //   titleless: false, // (OPTIONAL) `true` to hide the title in page view
  //   commentless: false, // (OPTIONAL) `true` to disable comments for the page
  //   draft: false // (OPTIONAL) `true` to make the page temporarily inaccessible
  // },
  pages: [
    {
      title: {
        'en-US': 'About Me',
      },
      slug: 'about'
    },
  ],

  categories: [
    {
      title: {
        'en-US': 'Java Script',
      },
      slug: 'js'
    },
    {
      title: {
        'en-US': 'Dev',
      },
      slug: 'dev'
    },
    {
      title: {
        'en-US': 'Log',
      },
      slug: 'log'
    },
  ],

  posts: [
    {
      title: {
        'en-US': '테스트',
      },
      slug: 'happy-new-year-2019',
      category: 'js',
      date: '2019-01-04'
    },
    {
      title: {
        'en-US': '테스트',
      },
      slug: 'happy-new-year-2019-2',
      category: 'js',
      date: '2019-01-07'
    },
    {
      title: {
        'en-US': '테스트',
      },
      slug: 'happy-new-year-2019-3',
      category: 'log',
      date: '2019-01-07'
    },
    {
      title: {
        'en-US': '테스트2',
      },
      slug: 'ttt-1',
      category: 'log',
      date: '2019-01-07'
    },
    {
      title: {
        'en-US': '테스트2',
      },
      slug: 'ttt-1',
      category: 'dev',
      date: '2019-01-07'
    },
  ]
}
