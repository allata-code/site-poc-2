const config = require('./src/utils/siteConfig')
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const loadPosts = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPost(
          sort: { fields: [publishDate], order: DESC }
          limit: 10000
        ) {
          edges {
            node {
              slug
              publishDate
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allContentfulPost.edges
      const postsPerFirstPage = config.postsPerHomePage
      const postsPerPage = config.postsPerPage
      const numPages = Math.ceil(
        posts.slice(postsPerFirstPage).length / postsPerPage
      )

      // Create main home page
      createPage({
        path: `/`,
        component: path.resolve(`./src/templates/index.js`),
        context: {
          limit: postsPerFirstPage,
          skip: 0,
          numPages: numPages + 1,
          currentPage: 1,
        },
      })

      // Create about page
      createPage({
        path: `/about`,
        component: path.resolve(`./src/pages/about.js`),
      })

      // Create additional pagination on home page if needed
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: `/${i + 2}/`,
          component: path.resolve(`./src/templates/index.js`),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage + postsPerFirstPage,
            numPages: numPages + 1,
            currentPage: i + 2,
          },
        })
      })

      // Create each individual post
      posts.forEach((edge, i) => {
        const prev = i === 0 ? null : posts[i - 1].node
        const next = i === posts.length - 1 ? null : posts[i + 1].node
        createPage({
          path: `${edge.node.slug}/`,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: edge.node.slug,
            prev,
            next,
          },
        })
      })
      resolve()
    })
  })

  const loadGhostPosts = new Promise((resolve, reject) => {
    graphql(`
      {
        allGhostPost(sort: { fields: [published_at], order: DESC }) {
          edges {
            node {
              id
              slug
              title
              plaintext
              feature_image
              custom_excerpt
              html
              published_at
              authors {
                id
                slug
                name
              }
            }
          }
        }
      }
    `).then(result => {
      const ghostPosts = result.data.allGhostPost.edges

      // Create each individual post
      ghostPosts.forEach((edge, i) => {
        const post = ghostPosts[i].node
        const prev = i === 0 ? null : ghostPosts[i - 1].node
        const next = i === ghostPosts.length - 1 ? null : ghostPosts[i + 1].node
        createPage({
          path: `${edge.node.slug}/`,
          component: path.resolve(`./src/templates/ghost-post.js`),
          context: {
            slug: edge.node.slug,
            post,
            prev,
            next,
          },
        })
      })
      resolve()
    })
  })

  const loadTags = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulTag {
          edges {
            node {
              slug
              post {
                id
              }
            }
          }
        }
      }
    `).then(result => {
      const tags = result.data.allContentfulTag.edges
      const postsPerPage = config.postsPerPage

      // Create tag pages with pagination if needed
      tags.map(({ node }) => {
        const totalPosts = node.post !== null ? node.post.length : 0
        const numPages = Math.ceil(totalPosts / postsPerPage)
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path:
              i === 0 ? `/tag/${node.slug}/` : `/tag/${node.slug}/${i + 1}/`,
            component: path.resolve(`./src/templates/tag.js`),
            context: {
              slug: node.slug,
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages: numPages,
              currentPage: i + 1,
            },
          })
        })
      })
      resolve()
    })
  })

  const loadCaseStudies = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulCaseStudy(
          sort: { fields: [title], order: ASC }
          limit: 10000
        ) {
          edges {
            node {
              slug
              title
              backgroundImage {
                title
                file {
                  url
                }
              }
              introduction {
                internal {
                  content
                }
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      }
    `).then(result => {
      const caseStudies = result.data.allContentfulCaseStudy.edges

      // Create each individual post
      caseStudies.forEach((edge, i) => {
        const caseStudy = caseStudies[i].node

        createPage({
          path: `${edge.node.slug}/`,
          component: path.resolve(`./src/templates/case-study.js`),
          context: {
            slug: edge.node.slug,
            caseStudy,
          },
        })
      })
      resolve()
    })
  })

  const loadPages = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPage {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      const pages = result.data.allContentfulPage.edges
      // pages.map(({ node }) => {
      //   createPage({
      //     path: `${node.slug}/`,
      //     component: path.resolve(`./src/templates/page.js`),
      //     context: {
      //       slug: node.slug,
      //     },
      //   })
      // })
      resolve()
    })
  })

  const loadJobPostings = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulJobPosting(
          sort: { fields: [jobTitle], order: ASC }
          limit: 10000
        ) {
          edges {
            node {
              slug
              jobTitle
              locations {
                id
                name
              }
            }
          }
        }
      }
    `).then(result => {
      const jobPostings = result.data.allContentfulJobPosting.edges

      // Create each individual post
      jobPostings.forEach((edge, i) => {
        const jobPosting = jobPostings[i].node

        createPage({
          path: `${edge.node.slug}/`,
          component: path.resolve(`./src/templates/job-posting.js`),
          context: {
            slug: edge.node.slug,
            jobPosting,
          },
        })
      })
      resolve()
    })
  })

  return Promise.all([
    loadPosts,
    loadGhostPosts,
    loadCaseStudies,
    loadTags,
    loadPages,
    loadJobPostings,
  ])
}
