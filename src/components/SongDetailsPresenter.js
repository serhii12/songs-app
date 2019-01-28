import React from 'react';
import { connect } from 'react-redux';

const SongDetailsPresenter = ({ selectedSong }) => {
  if (!selectedSong) {
    return <div>Select a song</div>
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>Title: {selectedSong.title}</p>
      <p>Duration: {selectedSong.duration}</p>
    </div>
  );
};

const mapStateToProps = state => ({
  selectedSong: state.selectedSong,
});

export default connect(mapStateToProps)(SongDetailsPresenter);
