import React, { Component } from 'react';

import { connect } from 'react-redux';

import MovieCard from './MovieCard';
import Discussions from './Discussions';
import MediaShow from './MediaShow';

export class MoviesContainer extends Component {
  render() {
    const { movies } = this.props;
    let content = '';
    let defaultLanding = '';
    let mediaLeanding = '';
    mediaLeanding = (
      <div>
        <Discussions />
        <MediaShow />
      </div>
    );

    if (movies.Response === 'True') {
      content = movies.Search.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ));
    } else {
      defaultLanding = mediaLeanding;
    }
    return (
      <div>
        <div className='container'>
          <div className='row'>{content}</div>
        </div>
        <div>{defaultLanding}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(mapStateToProps)(MoviesContainer);
