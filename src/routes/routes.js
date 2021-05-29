import React from 'react'
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import Person from "../pages/Person/Person";
import HomePage from "../pages/Home/HomePage";
import NotFound from "../pages/NotFound/NotFound";

export const Routes = () => {
    return (
        <Router>
            <Switch>
            <Route path="/" exact>
                <HomePage />
            </Route>
            <Route path="/person/:id">
                <Person />
            </Route>
            <Route>
                <NotFound />
            </Route>
            </Switch>
        </Router>
    )
}