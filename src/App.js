import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Person from './Person/Person';
import People from './People/People';
import Starship from './Starship/Starship';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Route exact path='/' component={People}/>
        <Route exact path='/people/:personId' component={Person}/>
        <Route exact path='/starships/:startshipId' component={Starship}/>
      </div>
    );
  }
}

export default App;