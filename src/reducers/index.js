import { combineReducers } from 'redux'

const songsReducer = () => {
    return [
        {title: 'Song 2', duration: '2:00'},
        {title: 'Wonderwall', duration: '4:19'},
        {title: 'Disarm', duration: '3:20'},
        {title: 'Smells Like Teen Spirt', duration: '5:01'}
    ]
}

const selectedSongReducer = (slectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return slectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSongs: selectedSongReducer
})