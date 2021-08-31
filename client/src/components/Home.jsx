import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Card, CardMedia } from '@material-ui/core'

import { getGames } from '../actions/games'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  CardMedia: {
    paddingTop: '56.25%',
  },
}))

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const Home = () => {
  const { games: data } = useSelector((state) => state.games)
  const dispatch = useDispatch()
  const query = useQuery()

  const limit = query.get('limit') || 9

  useEffect(() => {
    dispatch(getGames(limit))
  }, [limit, dispatch])

  const classes = useStyles()

  if (!data) return null

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {Object.values(data)[0].map((cover) => (
          <Grid item key={cover.game} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.CardMedia}
                image={`${cover.url}`.replace('thumb', 'cover_big')}
                title="game"
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Home
