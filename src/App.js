//Including modules and components
import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Error from './Error404';
import Home from './Home';
import Info from './Info';


//Creating the Routes for the App
const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/info' component={Info} />
                    <Route exact path='/*' component={Error} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;