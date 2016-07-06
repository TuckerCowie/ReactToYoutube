import React from 'react';
VideoListItem.propTypes = {
  active: React.PropTypes.bool,
  title: React.PropTypes.string,
  thumbnail: React.PropTypes.string,
};
function VideoListItem(props) {
  return (
    <button type="button" onClick={props.onClick} className={'list-group-item' + (props.active ? ' active' : '')}>
      <div className="video-list media">
        <div className="media-left">
          <img src={props.thumbnail} className="media-object" />
        </div>
        <div className="media-body">
          <span className="media-heading">{props.title}</span>
        </div>
      </div>
    </button>
  );
}
export default VideoListItem;