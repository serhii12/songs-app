import React from 'react'
import SongListPresenter from './SongListPresenter';
import SongDetailsPresenter from './SongDetailsPresenter';

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongListPresenter />
        </div>
        <div className="column eight wide">
          <SongDetailsPresenter />
        </div>
      </div>
    </div>
  );
}

export default App;

