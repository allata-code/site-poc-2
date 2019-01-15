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
import Cards from '../components/cards'
import CardOld from '../components/Card'
import Offering from '../components/offering'
import CardHeadline from '../components/card-headline'
import Missions from '../components/missions'
import MissionTile from '../components/mission-tile'
import MissionFlex from '../components/mission-flex'
import styled from 'styled-components'

const GradientContainer = styled.section`
  background-color: #4f5390;
  background-image: linear-gradient(147deg, #4f5390 0%, #c65087 74%);
  padding-top: 200px;
  * {
    color: #f4f4f4;
  }
`

const ClientFlex = styled.div`
  display: flex;
  max-width: 1150px;
  margin-top: 100px;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-around;
  flex-wrap: wrap;
`

const OfferingFlex = styled.div`
  display: flex;
  max-width: 1150px;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Index = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.edges
  const clients = data.allContentfulClient.edges
  const offerings = data.allContentfulOffering.edges
  const missions = data.allContentfulMission.edges
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
      <GradientContainer>
        <Container>
          <h1 className="shrink">
            Champions for transforming <br></br>digital enterprise
          </h1>
          <div className="text">
            Allata exists to produce industry-defining, high-impact work. We're
            a constantly evolving, relationship-first company aggressively
            committed to client and employee experience. The agency model is
            dead. Meet Allata.
          </div>
        </Container>
      </GradientContainer>
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
        <h1 className="shrink">Our Clients</h1>
        <div className="text">
          Allata has been honored to partner up with these clients.
        </div>
        <ClientFlex>
          {clients.map(({ node }) => {
            return <Client key={node.id} client={node} />
          })}
        </ClientFlex>
      </Container>
      <Container>
        <h1 className="shrink">Offerings</h1>
        <div className="text">&nbsp;</div>
        <OfferingFlex>
          {offerings.map(({ node }) => {
            return <Offering offering={node} />
          })}
        </OfferingFlex>
      </Container>
      <Container>
        <Missions>
          <MissionFlex>
            <h1 className="shrink">Recent Work</h1>
            <div className="text">
              We integrate and collaborate closely with management, design, and
              engineering teams to approach unique problems and opportunities.
            </div>
          </MissionFlex>
          {missions.map(({ node }) => {
            return <MissionTile key={node.id} mission={node} />
          })}
        </Missions>
      </Container>
      <Container>
        <h1 className="shrink">Solutions</h1>
        <div className="text">
          Allata has partnered with over a dozen companies and worked on
          projects spanning mobile applications, web-based software, connected
          devices, and beyond. We offer collaborative, full-service design
          solutions that meet the needs of modern product teams.
        </div>
      </Container>

      <main
        id={`reach-skip-nav`}
        css={{
          display: `flex`,
          flexDirection: `row`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
        }}
      />
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulMission(sort: { fields: [description], order: ASC }) {
      edges {
        node {
          id
          description
          client {
            name
            brandingHexColor
            whiteLogo {
              title
              fixed(width: 180) {
                ...GatsbyContentfulFixed_withWebp_noBase64
              }
            }
          }
        }
      }
    }
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
    allContentfulClient(sort: { fields: [name], order: ASC }) {
      edges {
        node {
          id
          name
          brandingHexColor
          website
          logo {
            title
            fluid(maxHeight: 35, maxWidth: 200) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
            file {
              url
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
