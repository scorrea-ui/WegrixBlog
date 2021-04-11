import { StaticQuery, graphql, Link } from 'gatsby'
import React from 'react'
import Moment from 'react-moment'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const query = graphql`
  query FeaturedBlogPost {
    allContentfulComponentBlogPost(
      filter: { featuredBlogPost: { eq: true } }
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

const FeaturedPost = () => {
  return (
    <section>
      <div data-sal='slide-right' data-sal-delay='600' data-sal-easing='ease'>
        <div className='o-container'>
          <StaticQuery
            query={query}
            render={(data) => {
              const { edges } = data.allContentfulComponentBlogPost
              const post = edges[0].node
              const rawCopy = JSON.parse(post.blogPostContent.raw).content
              const image = getImage(post.blogPostImage)

              return (
                <div className='c-post c-post--featured'>
                  <h1>Featured Post</h1>
                  <div className='o-grid o-grid--middle'>
                    <div className='o-grid__col u-7/12'>
                      <div className='c-post__center'>
                        <GatsbyImage image={image} alt={post.pageTitle} />
                      </div>
                    </div>
                    <div className='o-grid__col u-5/12'>
                      <div className='c-post--featured__wrapper'>
                        <h2 className='c-post__category'>
                          {post.tags.join(', ')}
                        </h2>
                        <h3 className='c-post--featured__subtitle'>
                          {post.pageTitle}
                        </h3>
                        <Moment
                          className='c-post__date'
                          titleFormat='MMM DD YYYY'
                          withTitle
                          date={post.createdAt}
                          format='MMM DD YYYY'
                        />
                        <div className='c-post__copy'>
                          <p>{rawCopy[0].content[0].value}</p>
                        </div>
                        <Link
                          className='c-post__read'
                          to={`/blog/${post.slug}`}
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }}
          ></StaticQuery>
        </div>
      </div>
    </section>
  )
}

export default FeaturedPost
