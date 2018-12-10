import React from 'react'
import Moment from 'react-moment'
import styled from 'styled-components'
import AuthorList from '../components/author-list'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import hex2rgba from "hex2rgba"

const Post = styled.li`
  position: relative;
  background: #ffffff;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 2px;
  margin: 0 0 1em 0;
  width: 100%;
  transition: box-shadow 0.2s;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 32%')};
  }
  &:hover {
    box-shadow: 0 0 11px rgba(33,33,33,.2);
  }
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.colors.base};
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
      @media screen and (min-width: ${props => props.theme.responsive.small}) {
        padding-bottom: ${props => (props.featured ? '40%' : '60%')};
      }
    }
  }
`

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;
`

const AuthorAndDate = styled.h3`
  margin: 0 1rem 1.5rem 1rem;
  color: gray;
`

const Excerpt = styled.p`
  margin: 0 1rem 1rem 1rem;
  line-height: 1.6;
`

const GhostPost = ({ post, ...props }) => {
  return (
    <Post>
      <Link to={`/${post.slug}/`}>
        {/* <Img fluid={heroImage.fluid} backgroundColor={'#eeeeee'} /> */}
        <img src={post.feature_image} />
        <Title>{post.title}</Title>
        <AuthorAndDate>
          <AuthorList authors={post.authors} /> |{' '}
          <Moment format="DD MMM YYYY">{post.published_at}</Moment>
        </AuthorAndDate>
        <Excerpt
          dangerouslySetInnerHTML={{
            __html: post.custom_excerpt,
          }}
        />
      </Link>
    </Post>
  )
}

export default GhostPost
