import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getGame } from '../actions/games'

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core'

const Game = () => {
  const { game } = useSelector((state) => state.games)
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getGame(id))
  }, [id, dispatch])

  if (!game) return game

  return (
    // <>
    // <h1>{game.name}</h1>
    // <img src={game.coverUrl} alt="cover" />
    // <p>{game.summary}</p>
    // </>
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="cover"
          height="528"
          image={game.coverUrl}
          title="cover"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {game.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {game.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Game
