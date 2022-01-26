import { FETCH_TODOS } from '../actions/index';
const INITIALSTATE = {
    list_data: []
}
export default function (state = INITIALSTATE, action) {
    switch (action.type) {
        case FETCH_TODOS:
            return { ...state, list_data: action.payload.data, }
    }
    return state;
}