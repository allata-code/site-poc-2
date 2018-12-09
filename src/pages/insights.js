import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import Person from '../components/person'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'

const Insights = ({ data }) => {
  const persons = data.allContentfulPerson.edges
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
        <PageTitle>Insights</PageTitle>
        <div>
        {persons.map(({ node }) => {
            return (
                <Person key={node.id} person={node} />
            )
          })}
          </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
query {
  allContentfulPerson(sort: {fields: [name], order: ASC}) {
    edges {
      node {
        name
        id
      }
    }
  }
}
`

export default Insights
