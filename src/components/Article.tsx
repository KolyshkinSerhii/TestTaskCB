import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions } from '@mui/material'
import React from 'react'
import Highlighter from 'react-highlight-words'
import { ArticleType } from '../Redux/articlesListReducer'
import { useNavigate } from 'react-router-dom'
import '..//assets//scss//article.scss'
import arrow from '..//assets/images/Arrow - Right.png'

type Props = {
  article: ArticleType
  filter: Array<string>
}

const Article: React.FC<Props> = ({ article, filter }) => {

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]
  const date = new Date(article.publishedAt)
  const slisedSummary = article.summary.slice(0, 100)

  const navigate = useNavigate()

  const redirectToDetailedInfo = () => {
    navigate("/ArticleDetailedInfo/:id" + article.id)
  }

  return (
    <div>
      <Card className='card' sx={{ maxWidth: 400, height: 530 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="217"
            image={article.imageUrl}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom component="div" fontFamily={'Montserrat'}>
              {monthNames[date.getMonth()]} {date.getDate()}th, {date.getFullYear()}
            </Typography>
            <Typography gutterBottom variant="h5" component="div" fontFamily={'Montserrat'}>
              <Highlighter
                highlightClassName='YourHighlightClass'
                searchWords={filter}
                textToHighlight={article.title}
              />
            </Typography>
            <Typography variant="body2" color="text.secondary" fontFamily={'Montserrat'}>
              <Highlighter
                highlightClassName='YourHighlightClass'
                searchWords={filter}
                textToHighlight={slisedSummary.trim()}
              />
              ...
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <button className='card-button' onClick={redirectToDetailedInfo}>
            Read more
            <img src={arrow} alt="" />
          </button>
        </CardActions>
      </Card>
    </div>
  )
}

export default Article