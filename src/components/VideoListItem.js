import React from 'react';

const VideoListItem = ({active, data, id, onVideoClick}) => {
  const classes = 'list-group-item' + (active ? ' active' : '');
  return (
    <button
      type="button"
      onClick={() => onVideoClick(id)}
      className={classes}
    >
      <div className="video-list media">
        <div className="media-left">
          <img src={data.snippet.thumbnails.default.url} className="media-object" />
        </div>
        <div className="media-body">
          <span className="media-heading">{data.snippet.title}</span>
        </div>
      </div>
    </button>
  );
}

// Simple component doesn't care about state changes so React-Redux#connect is not needed
export default VideoListItem;