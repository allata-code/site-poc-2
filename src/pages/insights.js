import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import CardList from '../components/CardList'
import GhostPost from '../components/ghost-post'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'

const Insights = ({ data }) => {
  const posts = data.allGhostPost.edges
  const postNode = {
    title: `Insights - ${config.siteTitle}`,
  }

  return (
    <Layout>
      <Helmet>
        <title>{`Insights - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="insights" customTitle />

      <Container>
          <CardList>
        {posts.map(({ node }) => {
            return (
                <GhostPost key={node.id} post={node} />
            )
          })}
          </CardList>
      </Container>
    </Layout>
  )
}

export const query = graphql`
query {
  allGhostPost(
    sort: { fields: [published_at], order: DESC }
  ) {
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
`

export default Insights
