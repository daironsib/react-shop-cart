import {createStore as reduxCreateStore, applyMiddleware} from 'redux';
import reducer from '../reducers/index';
import thunk from 'redux-thunk';
import {request} from '../utils/request';
import logger from 'redux-logger';

export async function createStore() {
    const response = await request('GET', `goods`);
    const state = await response.json();

    return reduxCreateStore(reducer, state, applyMiddleware(thunk, logger));
}