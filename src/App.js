import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allAnimals: [],
      jungleAnimals: [],
      countOfAnimalsSeen: 0,
      filter: '',
      filteredAnimals: []
    }
  }
  displayAnimals = () => {
    axios.get('https://localhost:5001/API/animals').then(response => {
      this.setState({
        allAnimals: response.data
      })
    })
  }
  displayJungleAnimals = () => {
    axios.get('http://localhost:5000/API/animals/Jungle').then(response => {
      this.setState({
        jungleAnimals: response.data
      })
    })
  }
  deleteDesertAnimals = () => {
    axios.delete('http://localhost:5000/API/animals').then(response => {
      this.setState({
        allAnimals: response.data
      })
    })
  }
  countOfAnimalsSeen = () => {
    axios.get('http://localhost:5000/API/animals').then(response => {
      this.setState({
        allAnimals: response.data
      })
    })
  }

  updateFilter = event => {
    this.setState({
      filter: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <section className="AnimalList">
          <button className="buttons" onClick={this.displayAnimals}>
            Display All Animals
          </button>
        </section>
        <section className="JungleAnimals">
          <button className="buttons" onClick={this.displayJungleAnimals}>
            Display Jungle Animals
          </button>
        </section>
        <section className="DesertAnimals">
          <button className="buttons" onClick={this.deleteDesertAnimals}>
            Delete Desert Animals
          </button>
        </section>
        <section>
          <button className="CountAnimals">Count Of Times Seen</button>
          <p>Filter By Animal Type</p>
          <form onClick={this.countOfAnimalsSeen}>
            <input type="text" onChange={this.updateFilter} />
          </form>
        </section>
      </div>
    )
  }
}

export default App
