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
<<<<<<< HEAD
      },
      slug: 'about'
    },
  ],

  categories: [
    {
      title: {
        'en-US': 'Java Script',
=======
>>>>>>> e91018d057d1e204948a7039a739fe739154d2d5
      },
      slug: 'js'
    },
<<<<<<< HEAD
    {
      title: {
        'en-US': 'HTML',
      },
      slug: 'html'
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
    {
      title: {
        'en-US': 'Linux',
      },
      slug: 'linux'
    },
    {
      title: {
        'en-US': 'Dev Ops',
      },
      slug: 'devops'
    },
    {
      title: {
        'en-US': 'Today I Learn',
      },
      slug: 'til'
    },
    {
      title: {
        'en-US': 'Vue',
      },
      slug: 'vue'
    },
  ],

  posts: [
    // 2019
    {
      title: {
        'en-US': 'heroku app을 이용한 static web 배포',
      },
      slug: '2019-01-20-deploy-heroku',
      category: 'devops',
      date: '2019-01-20'
    },
    {
      title: {
        'en-US': '한글 인코딩에 대한 생각',
      },
      slug: '2019-01-14-encode-hangul',
      category: 'dev',
      date: '2019-01-14'
    },
    {
      title: {
        'en-US': '2018년 회고록',
      },
      slug: '2019-01-04-happy-new-year-2019',
      category: 'log',
      date: '2019-01-04'
    },
    // 2018
    {
      title: {
        'en-US': '새로운 platform으로 이전',
      },
      slug: '2018-12-22-new-blog-form',
      category: 'log',
      date: '2018-12-22'
    },
    {
      title: {
        'en-US': 'Vue 앱을 만드는 방법',
      },
      slug: '2018-10-11-how-to-create-vue-app',
      category: 'vue',
      date: '2018-10-11'
    },
    {
      title: {
        'en-US': 'dom Observe에 대한 생각들',
      },
      slug: '2018-08-02-TIL-observe',
      category: 'html',
      date: '2018-08-02'
    },
    {
      title: {
        'en-US': 'object composition way',
      },
      slug: '2018-07-18-TIL-object-composition',
      category: 'til',
      date: '2018-07-18'
    },
    {
      title: {
        'en-US': 'scp를 사용하는 방법',
      },
      slug: '2018-07-16-TIL-how-to-use-scp',
      category: 'til',
      date: '2018-07-16'
    },
    {
      title: {
        'en-US': 'you dont know js - 1',
      },
      slug: '2018-01-13-you-dont-know-js',
      category: 'js',
      date: '2018-01-13'
    },
    {
      title: {
        'en-US': '새로운 자바스크립트를 깨우치자',
      },
      slug: '2018-01-11-start-study-group',
      category: 'log',
      date: '2018-01-11'
=======
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
>>>>>>> e91018d057d1e204948a7039a739fe739154d2d5
    },
    // 2017
    {
      title: {
<<<<<<< HEAD
        'en-US': 'dev log 시작합니다.',
      },
      slug: '2017-12-20-start-my-blog',
      category: 'log',
      date: '2017-12-20'
=======
        'en-US': '테스트2',
      },
      slug: 'ttt-1',
      category: 'dev',
      date: '2019-01-07'
>>>>>>> e91018d057d1e204948a7039a739fe739154d2d5
    },
  ]
}
