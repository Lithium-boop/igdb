import request from 'request-promise'

const clientID = '3kq2ay31u27go1kpcn13q4kbzk7xl5'
const access_token = '18elcj2s9ejd9gno3t7ug3v3oabq6f'

export const getGame = async (req, res) => {
  const { id } = req.params

  try {
    const response = await request({
      method: 'POST',
      uri: 'https://api.igdb.com/v4/games/',
      headers: {
        'Client-ID': clientID,
        Authorization: `Bearer ${access_token}`,
      },
      body: `fields name,summary,cover.url; where id=${id};`,
    })

    const game = JSON.parse(response)[0]
    const coverUrl = game.cover.url.replace('thumb', '1080p')
    delete game['cover']
    res.status(200).json({ ...game, coverUrl })
  } catch (error) {
    console.log({ message: error.message })
  }
}

export const getGames = async (req, res) => {
  const { searchQuery, limit } = req.query

  try {
    const response = await request({
      method: 'POST',
      uri: 'https://api.igdb.com/v4/games/',
      headers: {
        'Client-ID': clientID,
        Authorization: `Bearer ${access_token}`,
      },
      body:
        `${searchQuery ? `search "${searchQuery}";` : ''}` +
        `fields cover.url; where cover!=null; limit ${limit};`,
    })

    const games = JSON.parse(response)
    res.status(200).json(games)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
