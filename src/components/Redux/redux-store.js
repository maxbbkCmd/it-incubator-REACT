import { combineReducers, createStore } from 'redux';
import dialogReducer from './dialog-reducer';
import profileReducer from './profile-reducer';


let reduser = combineReducers({
  messagePage: dialogReducer,
	profilePage: profileReducer, 
})
const store = createStore(reduser);

export default store