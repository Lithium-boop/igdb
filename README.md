# igdb
1. cd server > npm install > npm start
2. cd client > npm install > npm start

+ use the query "limit" to indicate the number of games to fetch.
  Example: 'localhost:3000/games?limit=3' shows 3 games (by default, limit equals 9)
+ optionally, use the query "searchQuery" to search games that match the input.
  Example: 'localhost:3000/games?limit=5&searchQuery=sonic' shows 5 results having "sonic" in their names
+ use a parameter after "/games/" route to explore a specific game
  Example: 'localhost:3000/games/1' leads to the game with id=1.
