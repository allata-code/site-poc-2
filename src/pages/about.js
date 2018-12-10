import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import PersonList from '../components/person-list'
import Person from '../components/person'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'

const About = ({ data }) => {
  const persons = data.allContentfulPerson.edges
  const postNode = {
    title: `About - ${config.siteTitle}`,
  }

  return (
    <Layout>
      <Helmet>
        <title>{`About - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="about" customTitle />

      <Container>
        <h1 className="shrink align-right">
          We are the music makers, and we are the dreamers of dreams.
        </h1>
        <div className="text">
          We're go-getters and ever-learners, always willing to take on a new
          challenge. We are committed to excellence in delivery, accountability,
          and understanding, and feel strongly that you should never doubt what nobody is sure about.
        </div>
      </Container>
      <Container>
        <PageTitle>Locations</PageTitle>
      </Container>
      <Container>
        <PageTitle>Core</PageTitle>
      </Container>
      <Container>
        <PageTitle>Leadership</PageTitle>
        <PersonList>
          {persons.map(({ node }) => {
            return <Person key={node.id} person={node} />
          })}
        </PersonList>
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
