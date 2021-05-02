/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import 'semantic-ui-css/semantic.min.css';
import Spinner from './Spinner';

class App extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDom.render(<App />, document.getElementById('root'));