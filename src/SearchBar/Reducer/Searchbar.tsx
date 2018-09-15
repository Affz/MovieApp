import * as constants from '../Actions/Searchbar';
import SearchState from '../State/SearchBarState';
export default function SearchBarReducer(state: SearchState = { searchData: [], searchloader: false }, action: any) {
    switch (action.type) {
        case constants.SEARCHDETAILS_SUCCESS: {
            return { ...state, searchData: action.payload, searchloader: action.searchloader };
        }
        default:
            return { ...state };
    }

}