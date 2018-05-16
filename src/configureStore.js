import { createStore } from 'redux';
import reducers from './reducer';

export default (initialState = {}) => {
    return createStore(reducers, initialState);
}