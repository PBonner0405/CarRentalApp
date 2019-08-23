import { DAILY_VIEW, WEEKLY_VIEW } from '../actions/timeActions';

const initialState = {
    calendarDisplayType: DAILY_VIEW,
};

const timeReducer = (state = initialState, action) => {
    switch (action.type) {
    case DAILY_VIEW:
        return { ...state, calendarDisplayType: action.type };
    case WEEKLY_VIEW:
        return { ...state, calendarDisplayType: action.type };
    default:
        return state;
    }
};

export default timeReducer;