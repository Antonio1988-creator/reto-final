import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { searchManager } from './common/components/SearchFilters/_reducers';

export const store = configureStore({
  	reducer: combineReducers({
		  searchManager
	  }),
});
