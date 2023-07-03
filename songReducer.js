import { SELECT_SONG } from "../actions/songActionTypes";

const INITIAL_STATE = null;

const songReducer = (state = INITIAL_STATE, actions) => {

    // here we can use if-else as well as switch as per our convinient approach
    switch (actions.type) {
        case SELECT_SONG:
            return actions.payload;
        default:
            return state;
    } 
}

export default songReducer;