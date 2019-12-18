import keymirror from 'keymirror';

const ACTION_TYPES = keymirror({
    REQUEST_FETCH_GIFS: null,
    REQUEST_FETCH_GIFS_SUCCESS: null,
    REQUEST_FETCH_GIFS_FAILURE: null,

    REQUEST_PLAY: null,
    REQUEST_PAUSE: null,
});

export { ACTION_TYPES };
