import React from 'react'

const SongItem = ({ song, selectSong }) => {
  return (
    <div className="item">
      <div className="right floated content">
        <button
          className="ui button primary"
          onClick={() => selectSong(song)}
        >
          Select
        </button>
      </div>
      <div className="content">
        {song.title}
      </div>
    </div>
  )
}

export default SongItem;
