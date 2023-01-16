import React, { useMemo, useState } from 'react'
import { ArticleType } from '../Redux/articlesListReducer'
import Article from './Article'
import '..//assets/scss/articles.scss'

type Props = {
  articles: Array<ArticleType>
}

const Articles: React.FC<Props> = ({ articles }) => {

  const [searchString, setSearchString] = useState('');

  function handleChange(e: any) {
    setSearchString(e.target.value);
  }

  const filter = searchString.toLowerCase().split(' ')
  const filteredArticles = useMemo(() => {

    if (!searchString) {
      return articles;
    }
    return articles.filter((article): any => {
      return (
        article.title.toLowerCase().split(' ').some(el => filter.indexOf(el) > -1) || article.summary.toLowerCase().split(' ').some(el => filter.indexOf(el) > -1)
      )
    });
  }, [searchString, articles]);

  return (
    <div>
      <div className='container'>
        <div className='search-container'>
          <span>Filtered by keywords</span>
          <div>
            <input className='input' type="search" placeholder="Search..." onChange={handleChange}></input>
          </div>
          <div className='resultsCount'>
            Results: {filteredArticles.length}
            <hr></hr>
          </div>
        </div>
        <div className='grid'>
          {filteredArticles.map(article =>
            <div key={article.id} className="container-job-bar">
              <Article article={article} filter={filter} />
            </div>)}
        </div>
      </div>
    </div>
  )
}

export default Articles