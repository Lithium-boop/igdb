import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import GameDetails from './components/GameDetails'
import Home from './components/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={() => <Redirect to="/games" />} />
        <Route path="/games" exact component={Home} />
        <Route path="/games/:id" exact component={GameDetails} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
