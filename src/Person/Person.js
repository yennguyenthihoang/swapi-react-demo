import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: null,
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    axios.get(`https://swapi.co/api/people/1/`).then(res => {
      const person = res.data;
      console.log("Person: " + person);
      this.setState({
        person,
      });
    })
  }

  render() {
    const {person} = this.state;
    if (person === null) return <p>Loading ...</p>;
    return (
      <div className="container">
        <div className="row">
          <h4 className="font-weight-bold offset-md-5 title">{person.name}</h4>
        </div>
        <div className="row col-sm-12 col-md-12 col-lg-12">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <p className="card-text"><b>Gender: </b>{person.gender}</p>
            <p className="card-text"><b>Birth Year: </b>{person.birth_year}</p>
            <p className="card-text"><b>Height: </b>{person.height} cm</p>
            <p className="card-text"><b>Mass: </b>{person.mass}</p>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <p className="card-text"><b>Hair Color: </b>{person.hair_color}</p>
            <p className="card-text"><b>Skin Color: </b>{person.skin_color}</p>
            <p className="card-text"><b>Eye color: </b>{person.eye_color}</p>
            <p className="card-text"><b>Created Date: </b>{person.created}</p>
            <p className="card-text"><b>Edited Date: </b>{person.edited}</p>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <h4 className="font-weight-bold">Star ships:</h4>
            {this.state.person.starships === null && <p>Loading Starship...</p>}
              {
                this.state.person.starships && this.state.person.starships.map(starship => (
                  <div key={starship} className="col-sm-12 col-md-4 col-lg-3">
                    <Link to={`${starship}`}>
                      <p className="card-text">{starship}</p>
                    </Link>
                  </div>
                ))
              }
          </div>
        </div>
      </div>
    )
  }
}

export default Person;