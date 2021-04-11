import React from 'react'
import SearchBar from './SearchBar'

const Search = ({ posts }) => {
  return (
    <section className='c-search'>
      <div className='o-grid o-grid--between o-grid--middle'>
        <div className='o-grid__col u-6/12'>
          <h3 className='c-search__title'>All Stories</h3>
        </div>
        <div className='o-grid__col u-6/12 u-text--right'>
          <SearchBar posts={posts} />
        </div>
      </div>
    </section>
  )
}

export default Search
