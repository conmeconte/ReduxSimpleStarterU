import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import YTSearch from 'youtube-api-search';
const API_KEY= 'AIzaSyAz-cr7tW2g8-6gwVViqcuuPt1Y1nO5v6c';
import VideoList from './components/video_list'

// import App from './components/app';
import reducers from './reducers';
import SearchBar from './components/search_bar';

const createStoreWithMiddleware = applyMiddleware()(createStore);


class App extends Component{
  constructor(props){
    super(props);

    this.state={
      videos: []
    }

    YTSearch({key: API_KEY, term: 'surfboards'}, videos=>{
      // this.setState({videos: videos}); 
      this.setState({videos}); 
    })
  }
  render(){
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }

}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
