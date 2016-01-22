import React from 'react';

import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

const App = () => {
  return (
    <div>
      <SearchBar />
      <div className="container">
        <div className="row">
          <VideoDetail />
          <VideoList />
        </div>
      </div>
    </div>
  );
}

export default App;
