import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Page from './component/Page';
import Dropdown from './component/Dropdown';

const Home = () => (
    <div>
        <h2>React: Navigate Programmatically Example</h2>
        <h3>Please select from dropdown list above</h3>
    </div>
);

ReactDOM.render(
    <Router>
        <div>
            <Dropdown/>
            <hr/>
            <Route exact={true} path="/" component={Home}/>
            <Route exact={true} path="/:page" component={Page}/>
        </div>
    </Router>,
    document.getElementById('root')
);