import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import AuthorList from '../components/author-list'
import SEO from '../components/SEO'
import PostLinks from '../components/PostLinks'
import Moment from 'react-moment'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Title = styled.h2`
  font-size: 2em;
  font-weight: 700;
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;
  max-width: 650px;
  margin: 0.5rem auto 1rem auto;
`

const HeroImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover !important;
  object-position: 50% 50% !important;
`

const AuthorAndDate = styled.h3`
  margin: 0 auto 1.5rem auto;
  max-width: 650px;
  color: gray;
`

const JobPostingTemplate = ({ pageContext }) => {
  const jobPosting = pageContext.jobPosting

  return (
    <Layout>
      <Helmet>
        <title>{`${jobPosting.title} - ${config.siteTitle}`}</title>
      </Helmet>
      {/* <SEO pagePath={jobPosting.slug} postNode={jobPosting} ghostPostSEO /> */}

      {/* <Hero title={jobPosting.title} image={jobPosting.backgroundImage} height={'50vh'} /> */}
      {/* <Img fluid={jobPosting.backgroundImage.fluid} backgroundColor={'#eeeeee'} /> */}
      {/* <img src={jobPosting.backgroundImage.file.url}></img> */}

      <Container>
        <Title>{jobPosting.jobTitle}</Title>

      </Container>
      {/* <PostLinks previous={pageContext.prev} next={pageContext.next} /> */}
    </Layout>
  )
}

export default JobPostingTemplate 
