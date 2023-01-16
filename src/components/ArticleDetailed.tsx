import React from 'react'
import { useParams } from 'react-router-dom'
import { ArticleType } from '../Redux/articlesListReducer'
import ArticleDetailedInfo from './ArticleDetailedInfo'

type Props = {
  articles: Array<ArticleType>
}

const ArticleDetailed: React.FC<Props> = ({ articles }) => {

  let { id } = useParams()

  // eslint-disable-next-line eqeqeq
  let filteredArticle = articles.filter(article => article.id == id?.slice(3))

  return (
    <div>
      {
        filteredArticle.map(article =>
          <div key={article.id}>
            <ArticleDetailedInfo article={article} />
          </div>)
      }
    </div>
  )
}

export default ArticleDetailed