import React from 'react';

function Discussions() {
  return (
    <div className='new_stuff_wrapper'>
      <div className='block purple_gradient'>
        <div className='inner_content'>
          <h2>
            <a href='/discuss?language=en-US'>Discussions</a>
          </h2>
          <p>
            <a href='/discuss?language=en-US'>Catch up now</a>
          </p>
        </div>
      </div>
      <div className='block stamp'>
        <div className='inner_content'>
          <h2>
            <a href='/2019?language=en-US'>That's a Wrap!</a>
          </h2>
          <p>
            <a href='/2019?language=en-US'>Read the 2019 recap</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Discussions;
