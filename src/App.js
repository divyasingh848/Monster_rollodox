import React from 'react';
import './App.css';
import SearchBox from './components/search-box/Search-box'
import CardList from './components/card-list/Card-list';

class App extends React.Component{
  constructor(){
    super()
    // this.state: Initializes the component's state.
    this.state = {
      monsters:[],
      searchfield:""
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=> this.setState({monsters:users}) )
  }
  onSearchChange=(e)=>{
     this.setState({
      searchfield:e.target.value
     })
  }
render(){
  const searchfield = this.state.searchfield;
  const monsters = this.state.monsters;
  const filterMonsters = monsters.filter(
    monster=> monster.name.toLowerCase().includes(searchfield.toLowerCase())
  );
 
  return(
    <div className='App'>
     <h1>Monster Rollodex</h1>
     <SearchBox searchfield={searchfield} onSearchChange={this.onSearchChange}/>
     {/* <button type='submit'>Submit</button> */}
     <CardList monsters={filterMonsters}/>
    </div>
  )
}

}

export default App