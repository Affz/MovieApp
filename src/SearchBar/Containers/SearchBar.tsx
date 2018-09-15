import { connect } from 'react-redux';
import Searchbar from '../Components/SearchBar';
import SearchDetailsActions from '../Actions/Searchbar';
export function mapStateToProps(appState: any) {
    return {
        searchData: appState.SearchReducer.searchData,
        searchloader: appState.SearchReducer.searchloader,
    };
}
export function mapDispatchToProps(dispatch: any) {
    return {
        getsearchDetails: (query: string) => dispatch(SearchDetailsActions.getSearchDetails(query))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar as any);
