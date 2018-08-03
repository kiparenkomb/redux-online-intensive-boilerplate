// Core
import { createStore } from 'redux';

// Reducer
import { rootReducer } from './rootReduser';

export const store = createStore(rootReducer);
