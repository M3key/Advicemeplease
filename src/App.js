import React from 'react';
import axios from 'axios';
import './App.css';



class App extends React.Component {
    state = { advice: '' };

    componentDidMount() {
      this.fetchAdvice();
    }

fetchAdvice =() => {
  axios.get('https://api.adviceslip.com/advice')
    .then((response) => {
      const { advice } = response.data.slip;
      this.setState({ advice });
    })

    .catch((error) => {
      console.log(error);
    });
}

render() {
  const { advice } = this.state;
  return (
    <div className="GuruAdvice">
      <div className="card">
        <h1 className="header">{advice}</h1>
        <button className="button" onClick={this.fetchAdvice}>
          <span>
            Advice me please!
          </span>
        </button>
        <button className="button" id="tweetquote" onClick={event =>  window.location.href='https://twitter.com/intent/tweet?hashtags=&related=freecodecamp&text=' + encodeURIComponent('"' + advice)}>Thanks I should Tweet this!</button>
      </div>
    </div>

  );
}
}


export default App;