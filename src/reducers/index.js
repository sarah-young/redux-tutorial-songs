import { combineReducers } from 'redux';

// Reducers! 

const songsReducer = () => {
    return [
            { title: 'No Scrubs', duration: '4:05'},
            { title: 'Latch', duration: '4:15'},
            { title: 'Cirrus', duration: '5:52'},
            { title: 'Language', duration: '4:35'},
        ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer, 
    selectedSong: selectedSongReducer
});