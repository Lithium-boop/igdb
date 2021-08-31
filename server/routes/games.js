import express from 'express'
import { getGame, getGames } from '../controllers/games.js'

const router = express.Router()

router.get('/', getGames)
router.get('/:id', getGame)

export default router
