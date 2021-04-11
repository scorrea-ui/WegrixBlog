import React from 'react'

const BlogFilter = () => {
  return (
    <div className='c-filter'>
      <h4 className='c-filter__title'>Filter by categories</h4>
      <ul className='c-filter__list'>
        <li className='c-filter__item'>
          <button className='c-filter__btn'>React</button>
        </li>
        <li className='c-filter__item'>
          <button className='c-filter__btn'>Angular</button>
        </li>
        <li className='c-filter__item'>
          <button className='c-filter__btn'>Vue</button>
        </li>
        <li className='c-filter__item'>
          <button className='c-filter__btn'>JavaScript</button>
        </li>
      </ul>
    </div>
  )
}

export default BlogFilter
