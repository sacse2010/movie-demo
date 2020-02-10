import React from 'react';

function MediaShow() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm col-sm-coustom'>
          <h5>On TV</h5>
          <div>
            <img
              data-sizes='auto'
              className='media-img'
              alt='Star Trek: Picard'
              src='https://image.tmdb.org/t/p/w500_and_h282_face/mK286PAkhgLJqk5cO0BCmFLkNE7.jpg'
            />

            <div className='media-text'>
              <a href='#' className='text'>
                <h5 className='custom-text-head'>Star Trek: Picard</h5>
                <p className='media-text-p'>New episode airs today</p>
              </a>
            </div>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-sm col-sm-coustom'>
                <div>
                  <img
                    data-sizes='auto'
                    className='media-img'
                    alt='Star Trek: Picard'
                    src='https://image.tmdb.org/t/p/w250_and_h141_face/6ZdQTBy20HzWudZthAV7NkZWfIb.jpg'
                  />{' '}
                  <div className='media-text-thum'>
                    <a href='#' className='text'>
                      <h5 className='custom-text-head'>The Flash</h5>
                      <p className='media-text-p'>New episode airs 5 days</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-sm col-sm-coustom'>
                <div>
                  <img
                    data-sizes='auto'
                    className='media-img'
                    alt='Star Trek: Picard'
                    src='https://image.tmdb.org/t/p/w250_and_h141_face/kOvt2BOOwSAQCT8yo3pM3X2GXjh.jpg'
                  />

                  <div className='media-text-thum'>
                    <a href='#' className='text'>
                      <h5 className='custom-text-head'>
                        Law & Order: Special Victi...
                      </h5>
                      <p className='media-text-p'>New episode airs 5 days</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm col-sm-coustom'>
          <h5>In Theaters</h5>
          <div className='container'>
            <div className='row'>
              <div className='col-sm col-sm-coustom'>
                <div>
                  <img
                    data-sizes='auto'
                    className='media-img'
                    alt='Star Trek: Picard'
                    src='https://image.tmdb.org/t/p/w250_and_h141_face/upUy2QhMZEmtypPW3PdieKLAHxh.jpg'
                  />
                  <div className='media-text-thum'>
                    <a href='#' className='text'>
                      <h5 className='custom-text-head'>Bad Boys for Life</h5>
                      <p className='media-text-p'>
                        Will Smith, Martin Lawrence
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-sm col-sm-coustom'>
                <div>
                  <img
                    data-sizes='auto'
                    className='media-img'
                    alt='Star Trek: Picard'
                    src='https://image.tmdb.org/t/p/w250_and_h141_face/lG802rseTZcN9mtLsQPVfApEVzM.jpg'
                  />
                  <div className='media-text-thum'>
                    <a href='#' className='text'>
                      <h5 className='custom-text-head'>Dolittle</h5>
                      <p className='media-text-p'>
                        Antonio Banderas, Robert Downey Jr.
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img
              className='media-img'
              data-sizes='auto'
              alt='Star Trek: Picard'
              src='https://image.tmdb.org/t/p/w500_and_h282_face/jiqD14fg7UTZOT6qgvzTmfRYpWI.jpg'
            />
            <div className='media-text'>
              <a href='#' className='text'>
                <h5 className='custom-text-head'>
                  Birds of Prey (and the Fantabulous Emancipation...
                </h5>
                <p className='media-text-p'>
                  Mary Elizabeth Winstead, Jurnee Smollett-Bell, Margot Robbie
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaShow;
