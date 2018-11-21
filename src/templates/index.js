import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CardList from '../components/CardList'
// import Card from '../components/Card'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import Client from '../components/Client'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'
import colors from '../utils/colors'
import Cards from "../components/cards"
import CardOld from "../components/Card"
import Cardeee from "../components/card2"
import CardHeadline from "../components/card-headline"

const Index = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.edges
  const clients = data.allContentfulClient.edges
  const featuredPost = posts[0].node
  const { currentPage } = pageContext
  const isFirstPage = currentPage === 1

  return (
    <Layout>
      <SEO />
      {!isFirstPage && (
        <Helmet>
          <title>{`${config.siteTitle} - Page ${currentPage}`}</title>
        </Helmet>
      )}
      <Container>
        {isFirstPage ? (
          <CardList>
            <CardOld {...featuredPost} featured />
            {posts.slice(1).map(({ node: post }) => (
              <CardOld key={post.id} {...post} />
            ))}
          </CardList>
        ) : (
          <CardList>
            {posts.map(({ node: post }) => (
              <CardOld key={post.id} {...post} />
            ))}
            </CardList>

        )}
      </Container>
      <Pagination context={pageContext} />
      <Container>
        <h2 className="section-headline">Our Clients</h2>
        <CardList>
          {clients.map(({ node }) => {
            return <Client key={node.name} client={node} />
          })}
        </CardList>
      </Container>
      <Container>
      <Cards>
          <Cardeee>
            <CardHeadline>Modern web tech without the headache</CardHeadline>
            <p>
              Enjoy the power of the latest web technologies –{` `}
            </p>
          </Cardeee>
          <Cardeee>
            <CardHeadline>Bring your own data</CardHeadline>
            <p>
              Gatsby’s rich data plugin ecosystem lets you build sites with the
              data you want — from one or many sources: Pull data from headless
              CMSs, SaaS services, APIs, databases, your file system & more
              directly into your pages using
              {` `}.
            </p>
          </Cardeee>
          <Cardeee>
            <CardHeadline>Scale to the entire internet</CardHeadline>
            <p>
              Gatsby.js is Internet Scale. Forget complicated deploys with
              databases and servers and their expensive, time-consuming setup
              costs, maintenance, and scaling fears. Gatsby.js builds your site
              as “static” files which can be deployed easily on dozens of
              services.
            </p>
          </Cardeee>
          <Cardeee>
            <CardHeadline>Future-proof your website</CardHeadline>
            <p>
              Do not build a website with last decade’s tech. The future of the
              web is mobile, JavaScript and APIs—the {` `}
              <a href="https://jamstack.org/">JAMstack</a>. Every website is a
              web app and every web app is a website. Gatsby.js is the universal
              JavaScript framework you’ve been waiting for.
            </p>
          </Cardeee>
          <Cardeee>
            <CardHeadline>Future-proof your website</CardHeadline>
            <p>
              Do not build a website with last decade’s tech. The future of the
              web is mobile, JavaScript and APIs—the {` `}
              <a href="https://jamstack.org/">JAMstack</a>. Every website is a
              web app and every web app is a website. Gatsby.js is the universal
              JavaScript framework you’ve been waiting for.
            </p>
          </Cardeee>
          <Cardeee>
            <CardHeadline>Future-proof your website</CardHeadline>
            <p>
              Do not build a website with last decade’s tech. The future of the
              web is mobile, JavaScript and APIs—the {` `}
              <a href="https://jamstack.org/">JAMstack</a>. Every website is a
              web app and every web app is a website. Gatsby.js is the universal
              JavaScript framework you’ve been waiting for.
            </p>
          </Cardeee>
        </Cards>
      </Container>

      <main
        id={`reach-skip-nav`}
        css={{
          display: `flex`,
          flexDirection: `row`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
        }}
      >
      </main>
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulClient(sort: { fields: [name], order: ASC }) {
      edges {
        node {
          name
          brandingHexColor
          website
          logo {
            title
            fixed(width: 200) {
              ...GatsbyContentfulFixed_withWebp_noBase64
            }
          }
        }
      }
    }
    allContentfulPost(
      sort: { fields: [publishDate], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          body {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 80)
            }
          }
          client {
            name
            brandingHexColor
          }
        }
      }
    }
  }
`

export default Index
