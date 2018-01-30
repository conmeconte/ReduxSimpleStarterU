import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// import App from './components/app';
import reducers from './reducers';
import SearchBar from './components/search_bar';

const API_KEY= 'AIzaSyAz-cr7tW2g8-6gwVViqcuuPt1Y1nO5v6c';

const createStoreWithMiddleware = applyMiddleware()(createStore);


const App = ()=>{
  return (
    <div>
      <SearchBar />
    </div>
  )
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
