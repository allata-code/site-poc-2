import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import PersonList from '../components/person-list'
import Person from '../components/person'
import CoreValue from '../components/core-value'
import JobPosting from '../components/job-posting'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'

const ValueList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  flex-grow: 1;
  justify-content: center;
  margin: 0 auto;
`

const Careers = ({ data }) => {
  const jobPostings = data.allContentfulJobPosting.edges
  const postNode = {
    title: `Careers - ${config.siteTitle}`,
  }

  return (
    <Layout>
      <Helmet>
        <title>{`Careers - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="careers" customTitle />

      <Container>
        <h1 className="shrink align-right">
          Come help us make collaboration even better.
        </h1>
        <div className="text">
        At Allata we build technology that makes work smoother for our clients.
        We’ve built a company we truly love working for, and we think you will too.
        </div>
      </Container>
      <Container>
        <PageTitle>Opportunities</PageTitle>
        <PersonList>
          {jobPostings.map(({ node }) => {
            return <JobPosting key={node.id} jobPosting={node} />
          })}
        </PersonList>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulJobPosting(sort: { fields: [jobTitle], order: ASC }) {
      edges {
        node {
          id
          jobTitle
          slug
          locations {
            id
            name
          }
        }
      }
    }
  }
`

export default Careers
