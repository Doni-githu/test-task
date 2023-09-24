import { combineReducers } from '@reduxjs/toolkit';
import auth from './auth';
import product from './product';

const rootReducer = combineReducers({
    auth,
    product
});

export default rootReducer;