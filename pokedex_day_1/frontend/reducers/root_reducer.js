import React from 'react';
import entitiesReducer from './entities_reducer';
import uiReducer from './ui_reducer';
import { combineReducers } from 'redux';

export default combineReducers ({
  entities: entitiesReducer,
  // ui: uiReducer,
});
