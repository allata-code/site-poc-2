import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import Offering from '../components/offering'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'
import { Hero, HeroBody } from 'bloomer'

const Offerings = ({ data }) => {
  const offerings = data.allContentfulOffering.edges
  const postNode = {
    title: `Offerings - ${config.siteTitle}`,
  }

  return (
    <Layout>
      <Helmet>
        <title>{`Offerings - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="offerings" customTitle />

      <Hero isColor="info" isSize="small">
        <HeroBody>
          <Container>
            <h1 className="shrink align-right">Offerings</h1>
            <div className="text">
              At Allata we build technology that makes work smoother for our
              clients. We’ve built a company we truly love working for, and we
              think you will too.
            </div>
          </Container>
        </HeroBody>
      </Hero>
      <Container>
        {offerings.map(({ node }) => {
          return <Offering key={node.id} offering={node} />
        })}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulOffering(sort: { fields: [displayPosition], order: ASC }) {
      edges {
        node {
          id
          name
          description {
            description
          }
          icon {
            title
            fixed(width: 200) {
              ...GatsbyContentfulFixed_withWebp_noBase64
            }
            file {
              url
            }
          }
        }
      }
    }
  }
`

export default Offerings
