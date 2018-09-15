import { connect } from 'react-redux';
import MovieApp from '../../MovieApp/Components/movieApp';
import MovieActions from '../Actions/movieApp';
export function mapStateToProps(appState: any) {
  return {
    details: appState.MovieReducer.details,
  };
}

export function mapDispatchToProps(dispatch: any) {
  return {
    MovieDetails: () => dispatch(MovieActions.MovieDetails()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieApp as any);
