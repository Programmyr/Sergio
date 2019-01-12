import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Table from './components/Table';
//import Error from './components/Error';

class App extends Component {


  state = {
    error:'',
    query:[],
    table: []
  }



  componentDidMount(){

    this.queryApi();
  }

  queryApi = player => {
    

    let url=`https://football-players-b31f2.firebaseio.com/players.json?print=pretty`;
    //Fetch API
    fetch(url)
    .then(response =>{
      return response.json();
    })
    .then(data=>{
      this.setState({
        table: data
      })
    })
    .catch(error =>{
      console.log(error)
    })

  }

  dataQuery = response =>{
    if (response.playerName === '') {
      this.setState({
        error:true
      })
    }else{
      this.setState({
        query: response,
        error: false
      })
    }
  }


  getEvents = async (look) => {
   
    

  }

  render() {

    return (
      <div className="container">
        <Header/>
        
        <Form
          dataQuery = {this.dataQuery}
          getEvents= {this.getEvents}
        />
        
               <table className="table">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">Player</th>
                    <th scope="col">Position</th>
                    <th scope="col">Team</th>
                    <th scope="col">Age</th>
                    </tr>
                </thead>
                
                <Table
                  table = {this.state.table}
                      />
                
              </table>
      </div>
    );
  }
}

export default App;
