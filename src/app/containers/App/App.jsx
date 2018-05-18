import React       from 'react';
import { hot }     from 'react-hot-loader';
import classes     from './App.styl';
import Form        from '@/containers/Form/Form.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={ classes.Wrapper }>
        <div className={ classes.Sidebar }>
          <h1>Bienvenido a Resuelve</h1>
          <Form />
        </div>
        <div className={ classes.Sidebar }>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
