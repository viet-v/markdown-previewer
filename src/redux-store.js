import { legacy_createStore as createStore } from 'redux';
import markdownReducer from './redux-reducer';

const store = createStore(markdownReducer);

export default store;

