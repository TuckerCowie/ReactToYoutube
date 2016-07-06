import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {searchVideos, searchVideosAsync} from '../actions/videos'
import {updateSearchTerm} from '../actions/search';

class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      // Hacky way to get first results
      props.dispatch(searchVideosAsync(props.searchTerm));
    }

    onChange(event) {
      this.props.dispatch(updateSearchTerm(event.target.value));
    }

    onSubmit(event) {
      event.preventDefault();
      this.props.dispatch(searchVideosAsync(this.props.searchTerm));
    }

    render() {
      return (
        <nav className="navbar navbar-full navbar-light bg-faded">
          <div className="container">
            <a className="navbar-brand" href="#">Re<sup>3</sup> Workshop</a>
            <form onSubmit={this.onSubmit} className="form-inline pull-xs-right">
              <div className="input-group">
                <input 
                  className="form-control"
                  type="text"
                  placeholder="Search"
                  value={this.props.searchTerm}
                  onChange={this.onChange}
                  autoFocus
                />
                <span className="input-group-btn">
                  <button
                    className="btn btn-primary"
                    type="submit"
                  >
                    Search
                  </button>
                </span>
              </div>
            </form>
          </div>
        </nav>
      );
    }

}

export default connect(
  /**
   * @param {Object} state - an object to be merged with this.props
   * @returns {Object} That gets merged with this.props
   */
  (state) => ({
    searchTerm: state.search,
  })
)(SearchBar);
