import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import Person from '../components/person'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'

const About = ({ data }) => {
  const persons = data.allContentfulPerson.edges
  const postNode = {
    title: `Offerings - ${config.siteTitle}`,
  }

  return (
    <Layout>
      <Helmet>
        <title>{`Offerings - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="offerings" customTitle />

      <Container>
        <PageTitle>Offerings</PageTitle>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulPerson(sort: { fields: [name], order: ASC }) {
      edges {
        node {
          id
          name
          title
          linkedIn
          shortBio {
            shortBio
            id
          }
          headshot {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`

export default About
