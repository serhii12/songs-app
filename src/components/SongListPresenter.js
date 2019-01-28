import React, { Component } from 'react';
import { connect } from 'react-redux';
import SongItem from './SongItem';


export class SongListPresenter extends Component {
  renderList = () => {
    const { songs } = this.props;
    return songs.map(song => {
      return (
        <SongItem song={song} key={song.title} />
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>
  }
};

const mapStateToProps = state => ({
  songs: state.songs,
});

export default connect(mapStateToProps)(SongListPresenter);
