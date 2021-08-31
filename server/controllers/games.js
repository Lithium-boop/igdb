import request from 'request-promise'

const clientID = '3kq2ay31u27go1kpcn13q4kbzk7xl5'
const access_token = '18elcj2s9ejd9gno3t7ug3v3oabq6f'

export const getGame = async (req, res) => {
  const { id } = req.params

  try {
    const gameResponse = await request({
      method: 'POST',
      uri: 'https://api.igdb.com/v4/games/',
      headers: {
        'Client-ID': clientID,
        Authorization: `Bearer ${access_token}`,
      },
      body: `fields name,summary; where id=${id};`,
    })

    const coverResponse = await request({
      method: 'POST',
      uri: 'https://api.igdb.com/v4/covers/',
      headers: {
        'Client-ID': clientID,
        Authorization: `Bearer ${access_token}`,
      },
      body: `fields url; where game=${id};`,
    })

    const game = JSON.parse(gameResponse)[0]
    const coverUrl = JSON.parse(coverResponse)[0].url.replace(
      'thumb',
      'cover_big',
    )
    res.status(200).json({ ...game, coverUrl })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const getGames = async (req, res) => {
  const limit = req.query.limit

  try {
    const response = await request({
      method: 'POST',
      uri: 'https://api.igdb.com/v4/covers/',
      headers: {
        'Client-ID': clientID,
        Authorization: `Bearer ${access_token}`,
      },
      body: `fields game,url; limit ${limit || 9};`,
    })

    const covers = JSON.parse(response)
    res.status(200).json(covers)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
