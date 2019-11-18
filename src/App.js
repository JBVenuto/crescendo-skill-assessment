import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Detail from './views/Detail';
import List from './views/List';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:id" children={<Detail />} />
        <Route path="/"><List /></Route>
      </Switch>
    </Router>
  )
}

export default App;
