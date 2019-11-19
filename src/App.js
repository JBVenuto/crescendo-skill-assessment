import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Detail from './views/Detail';
import List from './views/List';

class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
          recipes: [],
          specials:[]
      }
  }

  componentDidMount = () => {
      this.getList();
      this.getSpecials();
  }

  getList = () => {
      axios
      .get('http://localhost:3001/recipes')
      .then(res => {
        this.setState({
          recipes: res.data
        })
      })
      .then(() => console.log("recipes state:", this.state.recipes))
  }

  getSpecials = () => {
    axios
      .get('http://localhost:3001/specials')
      .then(res => {
        this.setState({
          specials: res.data
        })
      })
      .then(() => console.log("specials state:", this.state.specials))
  }

  render(){
  return (
    <Router>
      <Switch>
        <Route 
        path="/:id" 
        children={<Detail 
          recipes={this.state.recipes}
          specials={this.state.specials}
        />} />
        <Route path="/">
          <List recipes={this.state.recipes}/>
        </Route>
      </Switch>
    </Router>
  )
  }
}

export default App;
