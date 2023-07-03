import songReducer from './reducer/songReducer'
import dataReducer from './reducer/dataReducer';
import { createStore } from "redux";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
      data: dataReducer,
      selectedSong: songReducer
  });

const store = createStore(rootReducer);

export default store; 