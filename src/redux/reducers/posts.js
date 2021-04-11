import { SEARCH_POSTS } from '../actionTypes'

const initialState = {
  posts: [],
}

export function postsReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_POSTS:
      const { posts, name } = action.payload
      return {
        ...state,
        posts: posts.filter((post) => post.blogCardTitle === name),
      }
    default:
      return state
  }
}
