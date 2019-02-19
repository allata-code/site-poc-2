import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import Offering from '../components/offering'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import Link from 'gatsby-link'
import config from '../utils/siteConfig'
import {
  Hero,
  HeroBody,
  HeroFooter,
  TabList,
  Tabs,
  TabLink,
  Tab,
  Container,
} from 'bloomer'
import { Section } from 'bloomer/lib/layout/Section'

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

      <Hero isColor="info" isSize="medium">
        <HeroBody>
          <Container>
            <h1 className="shrink align-right">Offerings</h1>
            <div className="text">
              At Allata, we work with our clients to build technology that improves the bottom line, both for their customers and employees. We’ve built a company we truly love working for, and we
              think you will too.
            </div>
          </Container>
        </HeroBody>
        <HeroFooter>
          <Tabs isBoxed isFullWidth>
            <Container>
              <TabList>
                {offerings.map(({ node }) => {
                  return (
                    <Tab>
                      <Link to={'/offerings/#' + node.name}>{node.name}</Link>
                    </Tab>
                  )
                })}
              </TabList>
            </Container>
          </Tabs>
        </HeroFooter>
      </Hero>
      <Container>
        {offerings.map(({ node }) => {
          return (
            <Section key={node.id} id={node.name}>
              <Offering offering={node} />
            </Section>
          )
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
