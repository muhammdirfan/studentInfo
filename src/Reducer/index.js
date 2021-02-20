
import { combineReducers } from "redux";
import studentReducer from '../Reducer/studentReducer';

const allReducers = combineReducers({
    studentReducer: studentReducer,
});

export default allReducers;