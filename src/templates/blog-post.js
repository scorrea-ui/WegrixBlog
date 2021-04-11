import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/global/Header'

const BlogPost = ({ data }) => {
  const {
    pageTitle,
    blogPostContent,
    blogPostImage,
  } = data.contentfulComponentBlogPost

  const rawCopy = JSON.parse(blogPostContent.raw).content

  return (
    <>
      <Header />
      <div className='c-post c-post--default'>
        <div className='o-container'>
          <h1>{pageTitle}</h1>
          <div className='c-post__center'>
            <img
              className='c-post__img'
              alt={pageTitle}
              src={blogPostImage.file.url}
            />
          </div>
          <div className='o-grid'>
            <div className='o-grid__col u-8/12 u-mauto'>
              {rawCopy.map((copy) => {
                return copy.content.map((content) => {
                  return <p className='c-post__copy'>{content.value}</p>
                })
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default BlogPost

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulComponentBlogPost(slug: { eq: $slug }) {
      pageTitle
      slug
      blogPostContent {
        raw
      }
      blogPostImage {
        file {
          url
        }
      }
      tags
    }
  }
`
