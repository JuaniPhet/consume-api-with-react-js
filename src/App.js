// import logo from './logo.svg';
import './App.css';
// import Item from './MyItem';
import React from "react";

// class FilmItemRow extends React.Component{
//   render() {
//     return (
//       <li>
//         <a href={this.props.url}>{this.props.url}</a>
//       </li>
//     )
//   }
// }

class Starwars extends React.Component {
  constructor(){
    super()
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      // films: [],
      image: null,
    }
  }
  getNewCharacter(){
    console.log("Get new character from button");
    const randomNumber = Math.ceil(Math.random() * 88)
    console.log(randomNumber)
    // const url = `https://swapi.dev/api/people/${randomNumber}`
    const url = `https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${randomNumber}.json`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          loadedCharacter: true,
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          // films: data.films,
          image: data.image
        })
      })

  }
  render() {

    // const movies = this.state.films.map((film, i) => {
    //   return <FilmItemRow key={i} url={film}/>
    // })

    return(
      <div>
        {
          this.state.loadedCharacter && 
          <div>
            <h1>Name : {this.state.name}</h1>
            <p>Height : {this.state.height}</p>
            <p>
              Homeworld URL : <a 
                href={this.state.homeworld} 
                target='_blank'
                rel="noreferrer noopener"
                >
                  {this.state.homeworld}
                </a>
            </p>
            {/* <ul>
              {
                // this.state.films.map(film => {
                //   return <li>{film}</li>
                // })
                movies
              }
            </ul> */}
            <p>
              <img src={this.state.image} alt=""/>
            </p>
          </div>
        }
        <button 
          type="button" 
          className="Btn"
          onClick={() => this.getNewCharacter()}
        >
          Randomize Starwars
        </button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <Item name="Juani"/> */}
        {/* <Item name="Japh"/>
        <Item name="Juaniphet"/> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Starwars/>
      </header>
    </div>
  );
}

export default App;
