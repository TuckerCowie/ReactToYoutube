import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectVideo} from '../actions';

import VideoListItem from './VideoListItem';

// Map functions help render lists of repeated dom elements
const renderItems = (videos, selectedId, selectVideo) => {
  if(videos.length > 0) {
    return videos.map((video, id) => {
      return (
        <VideoListItem
          active={id === selectedId}
          data={video}
          id={id}
          key={video.etag}
          onVideoClick={selectVideo}
        />
      );
    });
  } else {
    // If we don't have an iterable, show empty list
    return (
      <div className="list-group-item">
        <div className="media">
          <div className="media-body">
            <span className="media-heading">No Videos Found</span>
          </div>
        </div>
      </div>
    );
  }
}

// Simple Component
const VideoList = ({videos, selectedId, selectVideo}) => {
  return (
    <div className="col-md-4 list-group">
      {renderItems(videos, selectedId, selectVideo)}
    </div>
  );
}

// Put certain state properties on this.props
function mapStateToProps(state) {
  return {
    videos: state.videos,
    selectedId: state.selectedIndex
  }
}

// Also put certain action creators on this.props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectVideo}, dispatch)
}

// When action is called or state changes, re-render component
export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
