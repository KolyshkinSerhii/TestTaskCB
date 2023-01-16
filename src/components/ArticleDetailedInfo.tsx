import React from 'react'
import { ArticleType } from '../Redux/articlesListReducer'
import '..//assets//scss/articleDetailedInfo.scss'
import { NavLink } from 'react-router-dom'
import arrow from '..//assets/images/Arrow - Right.png'

type Props = {
  article: ArticleType
}

const ArticleDetailedInfo: React.FC<Props> = ({ article }) => {

  return (
    <div className='articleDetails'>
      <div className='detailedInfo'>
        <div className='image-container'>
          <img className='detailedInfo-image' src={article.imageUrl} alt="" />
        </div>
        <div className='wrapper'>
          <div className='detailedInfo-text-container'>
            <h2 className='detailedInfo-text-container-title'>{article.title}</h2>
            <div className='detailedInfo-text-container-summary'>{article.summary}</div>
          </div>
          {<NavLink to={'/'}>
            <button className='card-button-left'>
              <img className='reverse-arrow' src={arrow} alt="" />
              Back to homepage
            </button>
          </NavLink>}
        </div>
      </div>
    </div>
  )
}

export default ArticleDetailedInfo