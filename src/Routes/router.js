import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import DetailOverview from '../pages/DetailOverview';

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/DetailOverview" exact>
                    <DetailOverview/>
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;