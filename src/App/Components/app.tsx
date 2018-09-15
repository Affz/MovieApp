import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import MovieApp from '../../MovieApp/Container/movieApp';
import Searchbar from '../../SearchBar/Containers/SearchBar';

const history = createBrowserHistory();

export interface Props {
}

export default class App extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }
    render() {
 
    var RoutingApp = (
    <div>
      <Router history={history}>
        <div>
          <Switch>
          <Route path="/searchbar" component={Searchbar}/>
            <Route path="/" component={MovieApp} />
           
          </Switch>
        </div>
      </Router>
    </div>);
    return RoutingApp;
}
}