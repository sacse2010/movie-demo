import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  searchMovie,
  fetchMovies,
  setLoading
} from '../../actions/searchActions';

export class SearchForm extends Component {
  onChange = e => {
    this.props.searchMovie(e.target.value);
    // this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };

  render() {
    return (
      <div className='container text-center'>
        <form id='searchForm' onSubmit={this.onSubmit}>
          <div className='has-search'>
            <span className='fa fa-search form-control-feedback'></span>
            <input
              type='text'
              className='form-control search-form-control-custom'
              name='searchText'
              placeholder='Search for a movie, tv show, person...'
              onChange={this.onChange}
            />
          </div>

          {/* <button type='submit' className='btn btn-primary btn-bg mt-3'>
            Search
          </button> */}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.movies.text
});

export default connect(mapStateToProps, {
  searchMovie,
  fetchMovies,
  setLoading
})(SearchForm);
