import React, { Component } from 'react';
import './App.css';
import StarWarsList from './components/StarWarsList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      previousStarwarsChars: '',
      nextStarwarsChars: '',
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results, previousStarwarsChars:data.previous, nextStarwarsChars:data.next });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  previousButton = () => {
    if(this.state.previousStarwarsChars !== null) {
      this.getCharacters(this.state.previousStarwarsChars);
    } else console.log('No more data to display')
  }

  nextButton = () => {
    if(this.state.nextStarwarsChars !== null) {
      this.getCharacters(this.state.nextStarwarsChars);
    } else console.log('No more data to display')
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <StarWarsList charactersArr={this.state.starwarsChars} previousButton={this.previousButton} nextButton={this.nextButton} />
      </div>
    );
  }
}

export default App;
