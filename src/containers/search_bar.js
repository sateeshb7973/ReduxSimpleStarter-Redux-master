import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { featchWeather } from '../actions/index';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state= {term: ''};
    // We have to bind the function in constructor other wise, the 'this' context in the method
    // is not going to be SearchBar component and it is going to be some mistary/ in-corrcet context
    this.onInputChange= this.onInputChange.bind(this);
    this.onFormSubmit= this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    // we need to fetch data here
    this.props.featchWeather(this.state.term);
    this.setState({term: ''});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
      <input
      placeholder="5 day forecast"
      className="form-control"
      value={this.state.term}
      onChange={this.onInputChange}/>
      <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">Submit</button>
      </span>
      </form>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ featchWeather }, dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);
