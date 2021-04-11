import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { searchPosts } from '../../../redux/actions'

const SearchBar = ({ searchPosts, posts }) => {
  const [focus, setFocus] = useState(false)
  return (
    <div className='c-search__wrapper'>
      <input
        type='search'
        className='c-search__bar'
        placeholder='Search Blog'
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => searchPosts(posts, e.target.value)}
      />
      {focus ? (
        <FontAwesomeIcon icon={faTimes} />
      ) : (
        <FontAwesomeIcon icon={faSearch} />
      )}
    </div>
  )
}

export default connect(null, { searchPosts })(SearchBar)
