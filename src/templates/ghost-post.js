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

const Title = styled.h2`
  font-size: 2em;
  font-weight: 700;
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;
  max-width: 650px;
  margin: 0.5rem auto 1rem auto;
`

const AuthorAndDate = styled.h3`
  margin: 0 auto 1.5rem auto;
  max-width: 650px;
  color: gray;
`

const GhostPostTemplate = ({ pageContext }) => {
  const post = pageContext.post

  return (
    <Layout>
      <Helmet>
        <title>{`${post.title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={post.slug} postNode={post} ghostPostSEO />

      <Hero title={post.title} image={post.feature_image} height={'50vh'} />

      <Container>
        <Title>{post.title}</Title>

        {/* {tags && <TagList tags={tags} />} */}
        <AuthorAndDate>
          <AuthorList authors={post.authors} /> |{' '}
          <Moment format="DD MMM YYYY">{post.published_at}</Moment>
        </AuthorAndDate>
        <PageBody body={post.html} />
      </Container>
      <PostLinks previous={pageContext.prev} next={pageContext.next} />
    </Layout>
  )
}

export default GhostPostTemplate
