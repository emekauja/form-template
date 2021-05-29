import { combineReducers } from 'redux';

import templateReducers from '../template/template.reducers';
import searchReducers from '../search/search.reducers';
// import paginationReducers from '../pagination/pagination.reducers';

export const rootReducer = combineReducers({
  templates: templateReducers,
  search: searchReducers,
  // pagination: paginationReducers,
});
export default rootReducer;
