import { SEARCH_POSTS } from '../actionTypes'

export const searchPosts = (posts, name) => ({
  type: SEARCH_POSTS,
  payload: { posts, name },
})
