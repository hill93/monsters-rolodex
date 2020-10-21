import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super(); //calls Component's constructor method

    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
        .then(users => this.setState({monsters: users}))
  }
  handleChange = (e) => { //arrow function fixes the scope of the "this" ARROW FUNCTIONS RULE!
    this.setState({ searchField: e.target.value}); 
  }
  render() {
    const { monsters, searchField } = this.state;
    //ABOVE IS EQUIVALENT TO:
    //const monsters = this.state.monsters;
    //const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder = 'search monsters' handleChange = {this.handleChange}/>
        <CardList monsters = {filteredMonsters}/> 
      </div>
    );
  }
}

export default App;
