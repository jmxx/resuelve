import React, { Component } from 'react';
import ReactDOM             from 'react-dom';
import { Provider }         from 'react-redux';
import {
  applyMiddleware, compose, createStore, combineReducers
}                           from 'redux';
import thunk                from 'redux-thunk';
import {
  mapReducer,
  formReducer
}                           from '@/store/reducers';
import App                  from '@/containers/App/App.jsx';
import '@/app.styl';

const rootReducer = combineReducers({
  map: mapReducer,
  form: formReducer
});

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk)
));

const app = (
  <Provider store={ store }>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'), () => {
  console.log('mounted');
});
