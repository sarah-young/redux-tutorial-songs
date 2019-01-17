import React from 'react'
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
    if (!song) {
        return <div>Please select a song <span role="img" aria-label="music-notes">🎶</span></div>
    } 
    return (
        <div>
            <h3>Details for:</h3>
            <p>Title: {song.title}</p>
            <p>Song length: {song.duration}</p> 
        </div>
        )
    }

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);