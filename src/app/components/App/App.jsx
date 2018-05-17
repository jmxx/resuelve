import React       from 'react';
import { hot }     from 'react-hot-loader';
import classes     from './App.styl';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={ classes.Wrapper }>
        <h1>Bienvenido a Resuelve</h1>
      </div>
    );
  }
}

export default hot(module)(App);
