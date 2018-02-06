import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import YTSearch from 'youtube-api-search';
const API_KEY= 'AIzaSyAz-cr7tW2g8-6gwVViqcuuPt1Y1nO5v6c';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'; 

// import App from './components/app';
import reducers from './reducers';
import SearchBar from './components/search_bar';

const createStoreWithMiddleware = applyMiddleware()(createStore);


class App extends Component{
  constructor(props){
    super(props);

    this.state={
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('surfboards');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, videos=>{
      this.setState({
        videos,
        selectedVideo: videos[0]}); 
    })
  }

  render(){
    return (
      <div>
        <SearchBar onSearchTermChange={term=> this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    )
  }

}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
