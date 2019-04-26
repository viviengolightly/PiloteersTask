import React from 'react';
import './App.css';
import Title from './Components/Title.js'
import List from './Components/List.js'
import Details from './Components/Details.js'

import request from 'request-promise-native';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      data : [],
      showList: true,
      itemId: null,
    }

    this.getBeersData = this.getBeersData.bind(this);
    this.handelBtnClick = this.handelBtnClick.bind(this);
    this.handelItemSelected = this.handelItemSelected.bind(this);
    this.getBeersData();

  }

  componentDidUpdate(){
    this.getBeersData();
  }

  getBeersData(){
    const options = {
      uri: 'http://localhost:9000/beers',
      json: true,
     
    }

    request(options)
      .then((beers) => {this.setState({data : beers})})
      .catch((err) => {console.log(err)});
  }

  handelBtnClick = () =>{
    console.log("Title clicked!");
    this.setState({
      itemId: null,
      showList: true
    });
  }

  handelItemSelected = (id) => {
    console.log(id);
    this.setState({
      itemId: id,
      showList: false
    });
  }

  render(){
    
    return(
    <div className="App">
      <div>
        <Title 
          onClick={this.handelBtnClick}
        />
      </div>

      <div>
        {this.state.showList && (
          <List 
            data={this.state.data}
            onBeerClick={this.handelItemSelected}
          />
        )}

        {!this.state.showList && (
          <Details
            data={this.state.data}
            idSelected={this.state.itemId}
          />
        )}
      </div>      

    </div>
    );
  }
}


export default App;
