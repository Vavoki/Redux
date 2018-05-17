import reducers from './reducer';
import { createStore, compose } from 'redux';
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export default (initialState = {}) => {
    return createStore(reducers, initialState, compose(
        (window.devToolsExtension && !IS_PRODUCTION) ? window.devToolsExtension() : f => f,
    ));
}