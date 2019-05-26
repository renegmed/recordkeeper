import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

class Routes extends Component {
    
    render() {
        return (

            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => <Redirect to={`/`} />}
                />
            </Switch>
        )
    }
}