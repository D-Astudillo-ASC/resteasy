import React, {lazy} from 'react'
import {Route, Switch, BrowserRouter, withRouter} from 'react-router-dom'

const Questions = lazy(() => import('./views/Questions/Questions'));

class Routes extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/my/create" component={withRouter(Questions)} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Routes;
