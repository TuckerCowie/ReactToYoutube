import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {searchVideos} from '../actions';

class SearchBar extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = { 
        searchTerm: ''
      }
      this.onSubmit = this.onSubmit.bind(this);
      this.props.searchVideos('React JS');
    }

    onSubmit(event) {
      event.preventDefault();
      this.props.searchVideos(this.state.searchTerm);
      this.setState({searchTerm: ''});
    }

    render() {
      return (
        <nav className="navbar navbar-full navbar-light bg-faded" style={{backgroundColor: '#f2dede'}}>
          <div className="container">
            <a className="navbar-brand" href="#">React to Youtube</a>
            <form onSubmit={this.onSubmit} className="form-inline pull-xs-right">
              <input 
                className="form-control"
                type="text"
                placeholder="Search"
                value={this.state.searchTerm}
                onChange={(event) => this.setState({searchTerm: event.target.value})}
                autoFocus
              />
              <button
                className="btn btn-danger-outline"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      );
    }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({searchVideos}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);
