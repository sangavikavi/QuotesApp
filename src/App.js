
import './App.css';
import axios from 'axios';
import React from 'react';


class App extends React.Component {

  state = {quote:'', author:""}

  flag = 0;

  componentDidMount(){
    document.title = "Quotes App";
    if (this.flag===0){
      this.fetchData();
      this.flag = 1;
    }

    
  }


  fetchData = () => {
    axios({
      url: 'https://api.api-ninjas.com/v1/quotes?category=inspirational',
      method: 'get',
      headers: {
        'X-Api-Key': 'uY1UkkHUvhJWwzx3FiSdwg==lTKDAuUUiTvbLpVv',
        'Content-Type': 'application/json'
      }
   })
   .then(response => {
      console.log(response.data[0]);
      this.setState(response.data[0])
      this.flag = 1;
       }) 
   .catch(err => {
      console.log(err);
   });
  }


  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Quotes</h1>
        </header>
        <div className='container'>
          <div className='quoteContainer'>
            <h3 className='quote-text'>"{this.state.quote}"</h3>
          </div>
          <h2 className='author-name'>- {this.state.author}</h2>
          <button className='btn' onClick={this.fetchData} >New Quotes</button>
        </div>
      </div>
    );
  }
  
}

export default App;
