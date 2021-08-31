import express from 'express'
import cors from 'cors'

import gamesRoutes from './routes/games.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.use('/games', gamesRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>
  console.log(`Server running on: http://localhost:${PORT}`),
)
