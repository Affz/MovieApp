import * as constants from '../Actions/movieApp';
import MovieAppParentState from '../State/MovieApp';
export default function MovieAppReducer(state: MovieAppParentState = { details: [] }, action: any) {
    switch (action.type) {
        case constants.MOVIEDETAILS_SUCCESS: {
            return { ...state, details: action.payload };
        }
        default:
            return { ...state };
    }
}