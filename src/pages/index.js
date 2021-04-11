import * as React from 'react'
import { Provider } from 'react-redux'
import Layout from '../components/layout/Layout'
import FeaturedPost from '../components/blog/posts/featuredPost'
import Search from '../components/blog/search/Search'
import BlogFilter from '../components/blog/filterBlog/Filter'
import Posts from '../components/blog/posts/posts'
import { store } from '../redux/store'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  const { edges } = data.allContentfulComponentBlogPost
  return (
    <Provider store={store}>
      <Layout>
        <main>
          <div className='o-container'>
            <FeaturedPost />
            <Search posts={edges} />
            <BlogFilter />
            <Posts posts={edges} />
          </div>
        </main>
      </Layout>
    </Provider>
  )
}

export const query = graphql`
  query AllBlogPosts {
    allContentfulComponentBlogPost(
      filter: { featuredBlogPost: { eq: false } }
    ) {
      edges {
        node {
          id
          slug
          pageTitle
          blogPostImage {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
            file {
              url
            }
          }
          blogPostContent {
            raw
          }
          author
          tags
          createdAt
        }
      }
    }
  }
`
export default IndexPage
