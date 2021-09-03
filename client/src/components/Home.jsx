import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Card, CardMedia } from '@material-ui/core'

import { getGames, getGame } from '../actions/games'

import SearchBar from './SearchBar'

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
    cursor: 'pointer',
  },
}))

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const Home = () => {
  const { games: data } = useSelector((state) => state.games)
  const dispatch = useDispatch()
  const history = useHistory()
  const query = useQuery()

  const limit = query.get('limit') || 9
  const searchQuery = query.get('searchQuery') || ''

  const [search, setSearch] = useState('')

  const gameDetails = async (id) => {
    await history.push(`/games/${id}`)
    dispatch(getGame(id))
  }

  const searchGames = () => {
    dispatch(getGames(limit, search))
    history.push(`/games?limit=${limit}&searchQuery=${search}`)
  }

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchGames()
    }
  }

  useEffect(() => {
    dispatch(getGames(limit, searchQuery))
  }, [dispatch, searchQuery, limit])

  const classes = useStyles()

  if (!data) return null

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <SearchBar
        handleKeyPress={handleKeyPress}
        search={search}
        setSearch={setSearch}
      />
      <Grid container spacing={4}>
        {Object.values(data)[0].map((game) => (
          <Grid item key={game.id} xs={12} sm={6} md={4}>
            <Card className={classes.card} onClick={() => gameDetails(game.id)}>
              <CardMedia
                className={classes.CardMedia}
                image={`${game.cover.url}`.replace('thumb', '1080p')}
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
