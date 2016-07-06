import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

import {selectVideo} from '../actions/videos';

import {getVideos, getSelectedIndex} from '../selectors/video';

const App = (props) => {
  return (
    <div>
      <SearchBar />
      <div className="container">
          {props.loading ?
            <div className="row">
              <progress className="progress progress-striped progress-animated" value="100" max="100"></progress>
            </div>
           :
            <div className="row">
              <VideoDetail />
              <VideoList videos={props.videos} selectVideo={props.selectVideo} selectedId={props.selectedIndex} />
            </div>
          }
      </div>
    </div>
  );
}

export default connect(
  /**
   * @param {Object} state - an object to be merged with this.props
   * @returns {Object} That gets merged with this.props
   */
  (state) => ({
    loading: state.videos.loading,
    videos: getVideos(state),
    selectedIndex: getSelectedIndex(state),
  }),
  (dispatch) => bindActionCreators({
    selectVideo,
  }, dispatch) // actionCreator => dispatch(actionCreator)
)(App);
