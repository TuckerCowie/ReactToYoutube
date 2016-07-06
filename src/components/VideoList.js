import React from 'react';
import VideoListItem from './VideoListItem';

class RenderItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedId: props.selectedId || 0
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({selectedId: nextProps.selectedId});
  }

  handleClick(id) {
    return (e) => {
      if (this.props.selectVideo) {
        this.setState({selectedId: id});
        this.props.selectVideo(id);
      }
    };
  }

  render() {
    const {videos} = this.props;
    if(videos && videos.length > 0) {
      return (
        <div>
          {videos.map((data, id) => (
          <VideoListItem
            onClick={this.handleClick(id)}
            active={id === this.state.selectedId}
            title={data.snippet.title}
            key={data.etag}
            thumbnail={data.snippet.thumbnails.default.url}
          />))}
        </div>
      );
    } else {
      return renderNoVideo();
    }
  }
}

const VideoList = (props) => {
  return (
    <div className="col-md-4 list-group">
      <RenderItems {...props} />
    </div>
  );
}

export default VideoList;

function renderNoVideo() {
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
