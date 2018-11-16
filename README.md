# gatsby-starter-gcn

A proof of concept for the site redesign using Gatsby, Contentful and Netlify. Inspired by [gatsby-contentful-starter](https://github.com/contentful-userland/gatsby-contentful-starter).

## Features

- Contentful integration with ready to go placeholder content
- Netlify integration including a pre-built contact form
- Minimal responsive design - made to customize or tear apart
- Pagination logic
- Styled components
- SEO Friendly Component
  - JSON-LD Schema
  - OpenGraph sharing support
  - Sitemap Generation
- Google Analytics
- Progressive Web app
- Offline Support
- RSS Feed
- [Gatsby Standard module](https://www.npmjs.com/package/eslint-config-gatsby-standard) for linting Javascript with StandardJS
- Stylelint support for Styled Components to lint the CSS in JS

## Demo

https://romantic-ritchie-73c8ee.netlify.com/

## Getting Started

### Install

```
git clone https://github.com/allata-code/site-poc-2.git
npm i
```

### Setup Contentful

1.  Request access to the test Contentful environment from John, Brice, or Ashley

2.  Enter information into the .contentful.json file.

## Customization

### Website Data

Edit [`/src/utils/siteConfig.js`](https://github.com/allata-code/site-poc-2/blob/master/src/utils/siteConfig.js)

```js
module.exports = {
  siteTitle: 'Allata',
  siteTitleAlt: 'Allata',
  publisher: 'Allta',
  siteDescription:
    'A foundational POC for a new static site built with Gatsby, Contentful and Netlify',
  siteUrl: 'https://allata.com',
  postsPerHomePage: 7,
  postsPerPage: 6,
  author: 'Allata',
  authorUrl: 'https://allata.com',
  userTwitter: '@twitter',
  shortTitle: 'GCN App',
  shareImage: '/logos/share.jpg',
  shareImageWidth: 900,
  shareImageHeight: 600,
  siteLogo: '/logos/logo-512.png',
  backgroundColor: '#e9e9e9',
  themeColor: '#121212',
  copyright: 'Copyright © 2018 Allata',
}
```

**Note:** If you do not see your changes reflected when developing locally, you may need to delete the `.cache` folder and restart the development server.

### Theme

Edit [`/src/styles/theme.js`](https://github.com/allata-code/site-poc-2/blob/master/src/styles/theme.js)

```js
const theme = {
  colors: {
    base: '#121212',
    secondary: '#e9e9e9',
    tertiary: '#f3f3f3',
    highlight: '#5b8bf7',
  },
  sizes: {
    maxWidth: '1200px',
    maxWidthCentered: '650px',
  },
  responsive: {
    small: '35em',
    medium: '50em',
    large: '70em',
  },
}
```

### Using Gatsby Standard

1.  Quickly check your code for errors with the `npm test` script
2.  You can view the [Gatsby Standard README](https://github.com/brandonkal/eslint-config-gatsby-standard) for details on how to integrate this project's included Gatsby Standard, Stylelint, and Prettier modules into your text editor

### Content and SEO

1.  You can replace the `share.jpg` and `logo-512` files in the `static/logos` directory. After replacing these files ensure that you edit the image size dimensions specified in `/src/utils/siteConfig.js`
2.  Meta descriptions are defined in Contentful. If you choose to leave this field blank on new posts a 320 character excerpt of the post/page will be used.
3.  **IMPORTANT:** Be sure to manually enter at least one meta description on a page and post in Contentful or the site will fail to build.

## Deployment

### Automated Netlify Deployment From Git

1.  Every time you push to `master` a deploy will automatically start and be published to production.

### Automated Netlify Deployment From Contentful Webhook

1.  Anytime content is created/published/deleted in our Contentful site, the Gatsby site will be published to production.

### Slack Notifications

1. Deployment updates will be sent to our `#allata-site-dev` Slack channel

## Useful Tips

- If you make edits to your Contentful space while running `gatsby develop` you will need to stop it and rerun the command to see the changes reflected. For example a new post or page will not automatically show up until the website has been rebuilt.
- The template assumes we have at least **one page**, **one post** and **one tag** in Contentful. If we do not the website will fail to build.
- The SEO component assumes you have entered at least one meta description in Contentful for a post and one for a page. If you do not the website will fail to build. See the Content and SEO section above.
- **DO NOT** store our Contentful access tokens or space ids anywhere in GitHub. Treat them like passwords.
- **Yarn Users:** remove the `yarn*` line from the `.gitignore` file to avoid discrepancies in the Netlify deploy.
