import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const Post = ({
  delay,
  post: {
    author,
    blogPostContent,
    blogPostImage,
    createdAt,
    pageTitle,
    slug,
    tags,
  },
}) => {
  const rawCopy = JSON.parse(blogPostContent.raw).content
  const image = getImage(blogPostImage)

  return (
    <div className='o-grid__col u-3/12 u-mr32'>
      <div
        className='c-post'
        data-sal='slide-up'
        data-sal-delay={delay}
        data-sal-easing='ease'
      >
        <div className='c-post__card'>
          <Link to={`/blog/${slug}`}>
            <div className='c-post__center'>
              <GatsbyImage
                className='c-post__img'
                image={image}
                alt={pageTitle}
              />
            </div>
            <div className='c-post__wrapper'>
              <div className='c-post__details'>
                <div className='c-post__tag'>{tags.join(', ')}</div>
                <Moment
                  className='c-post__date'
                  titleFormat='MMM DD YYYY'
                  withTitle
                  date={createdAt}
                  format='MMM DD YYYY'
                />
              </div>
              <h3 className='c-post__title'>{pageTitle}</h3>
              <p className='c-post__copy'>{rawCopy[0].content[0].value}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

Post.propTypes = {
  delay: PropTypes.string,
  post: PropTypes.shape({}).isRequired,
}

export default Post
