import React, { Component } from 'react';

import { connect } from 'react-redux';

import SearchForm from './SearchForm';

import MoviesContainer from './MoviesContainer';
import Spinner from '../layout/Spinner';

export class Landing extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div>
        <div className='border-bottom'>
          <SearchForm />
        </div>
        <div>
          {loading ? <Spinner /> : <MoviesContainer />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading
});

export default connect(mapStateToProps)(Landing);
