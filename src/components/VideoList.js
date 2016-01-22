import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectVideo} from '../actions';

import VideoListItem from './VideoListItem';

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

const VideoList = ({videos, selectedId, selectVideo}) => {
  return (
    <div className="col-md-4 list-group">
      {renderItems(videos, selectedId, selectVideo)}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    videos: state.videos,
    selectedId: state.selectedIndex
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectVideo}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
