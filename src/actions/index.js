// Action creator
export const selectSong = (song) => {
    // Reaturn an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}

