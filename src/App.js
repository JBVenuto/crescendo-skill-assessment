import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Add from './views/Add';
import Detail from './views/Detail';
import List from './views/List';
import Edit from './views/Edit';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: [],
      specials: []
    }
  }

  componentDidMount = () => {
    this.getList();
    this.getSpecials();
  }

  // Get the recipes from the api and store it in the state
  getList = () => {
    axios.get('http://localhost:3001/recipes')
      .then(res => {
        this.setState({
          recipes: res.data
        })
      })
  }

  // Get the specials from the api and store it in the state
  getSpecials = () => {
    axios.get('http://localhost:3001/specials')
      .then(res => {
        this.setState({
          specials: res.data
        })
      })
  }

  render() {
    return (
      <Router>
        <Switch>
        <Route path="/add"><Add /></Route>
        <Route path="/edit"><Edit /></Route>
          <Route
            path="/:id"
            children={<Detail
              recipes={this.state.recipes}
              specials={this.state.specials}
            />} />
            
          <Route path="/">
            <List recipes={this.state.recipes} />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
