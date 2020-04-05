import React, { Component } from 'react';
import axios from 'axios';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      currentQuote: {},
    };
  }
  async componentDidMount() {
    let res = await axios.get(
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    );
    this.setState({
      quotes: res.data.quotes,
    });
    this.randomQuote();
  }

  randomQuote = () => {
    let quotes = this.state.quotes;
    console.log(quotes, 'QUOTES');
    let randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    this.setState({
      currentQuote: quote,
    });
  };

  render() {
    console.log(this.state.currentQuote);
    return (
      <div className="center">
        <div id="text">{this.state.currentQuote.quote}</div>
        <div id="author">{this.state.currentQuote.author}</div>
        <div className="buttons">
          <a className="button" id="new-quote" onClick={this.randomQuote}>
            Next Quote
          </a>
          <a
            className="button"
            href={`https://twitter.com/intent/tweet?hashtags=QuoteOfTheDay&text="${this.state.currentQuote.quote} - ${this.state.currentQuote.author}"`}
            id="tweet-quote"
          >
            Tweet this quote!
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
