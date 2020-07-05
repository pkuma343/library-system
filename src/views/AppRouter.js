import { BrowserRouter, Route, Switch, NavLink, Link } from 'react-router-dom';
import Header from './Header';
import ListLibraries from './ListLibraries';
import React from 'react';

const AppRouter = () => {
    return (
        <BrowserRouter>
        <div>
            <Header />
        <Switch>
            
            <Route path="/libraries" component={ListLibraries} />
            
        </Switch>
        </div>
        </BrowserRouter>
    )
}

export default AppRouter;