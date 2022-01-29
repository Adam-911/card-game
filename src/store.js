import { combineReducers, createStore } from 'redux';
import reducer from './redux/reducers/index';
import imgReducer from './redux/reducers/imgs/index'

const rootReducer = combineReducers({rootState: reducer, images: imgReducer});

const store = createStore(rootReducer);

export default store;