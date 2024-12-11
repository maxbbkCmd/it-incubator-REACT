import { combineReducers, createStore } from 'redux';
import dialogReducer from './dialog-reducer';
import profileReducer from './profile-reducer';

const store = createStore(reduser);

let reduser = combineReducers({
  dialogReducer,
	profileReducer, 
})