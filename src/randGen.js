import React from "react";
import axios from "axios";
import "./InputForm.css";
import Typography from "@material-ui/core/Typography";

export default class RandGen extends React.Component {
  state = {
    joke: "",
    quote: ""
  };

  getJoke = () => {
    axios.get("http://localhost:9000/joke").then(res => {
      this.setState({ joke: res.data.joke });
    });
  };

  getAnother = () => {
    this.setState({
      joke: "",
      quote: ""
    });
  };

  getQuote = () => {
    axios.get("http://localhost:9000/quote").then(res => {
      this.setState({ quote: res.data });
    });
  };

  render() {
    if (this.state.joke) {
      return (
        <div>
          <br />
          <Typography component="h6" variant="h6" gutterBottom color="inherit">
            {this.state.joke}
          </Typography>
          <br />
          <button type="primary" onClick={this.getAnother}>
            Still Bored?
          </button>
        </div>
      );
    } else if (this.state.quote) {
      return (
        <div>
          <br />
          <Typography component="h6" variant="h6" gutterBottom color="inherit">
            {this.state.quote}
          </Typography>
          <br />
          <button type="primary" onClick={this.getAnother}>
            Still Bored?
          </button>
        </div>
      );
    }
    return (
      <div>
        <br />
        <Typography component="h4" variant="h4" gutterBottom color="inherit">
          Pass the Time!
        </Typography>
        <button type="pretty" onClick={this.getJoke}>
          Need a Laugh?
        </button>
        <br />
        <br />
        <button type="pretty" onClick={this.getQuote}>
          Need Inspiration?
        </button>
      </div>
    );
  }
}
