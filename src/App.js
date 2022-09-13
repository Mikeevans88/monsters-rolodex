import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

constructor(){
  super();

  this.state = {
    monsters: [
    {
        name: 'Linda',
        id: '2n2j4j3k'
      },
    {
        name: 'Frank',
        id: '5n3hg63j4'
      },
    {
        name: 'Jack',
        id: '9fsh57gh3'
      },
      {
        name: 'Guts',
        id: '3h57dd9h5'
      }
    ] 
  }
}

render() {
  return (
    <div className="App">
    {
      this.state.monsters.map((monster) => {
        return <div key={monster.id}><h1>{monster.name}</h1></div>;
      })}

    </div>
  );

}


}

export default App;
