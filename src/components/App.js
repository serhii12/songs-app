import React from 'react'
import SongListPresenter from './SongListPresenter';

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongListPresenter />
        </div>
      </div>
    </div>
  );
}

export default App;

