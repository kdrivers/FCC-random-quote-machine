import React, { Component } from 'react';
import axios from 'axios';
import Quote from './Quote';
import './App.css';

class App extends Component {
  state = {
    quote: "",
    author: ""
  }
  
  componentDidMount() {
    axios.get('https://talaikis.com/api/quotes/random/')
      .then(response => {
        console.log(response);
        this.setState({quote: response.data.quote, author: response.data.author})
      })
      .catch(error => console.log(error))
  }
  
  handleGetRandomQuote = (event) => {
    event.preventDefault();
    axios.get('https://talaikis.com/api/quotes/random/')
      .then(response => {
        console.log(response);
        this.setState({quote: response.data.quote, author: response.data.author})
      })
      .catch(error => console.log(error))
  }
  
  handleTweetQuote = (event) => {
    let tweet = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(this.state.quote + ' \n' + this.state.author);
    window.open(tweet);
  }
  
  handleShareOnTumblr = (event) => {
    let tumblr = 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent(this.state.author)+'&content=' + encodeURIComponent(this.state.quote)+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
    window.open(tumblr);
  };
  
  
  render() {
    return (
      <div className="App">
        <Quote 
          text={this.state.quote}
          author={this.state.author}
          clicked={this.handleGetRandomQuote}
          tweet={this.handleTweetQuote}
          tumblr={this.handleShareOnTumblr}/>
      </div>
    );
  }
}

export default App;
