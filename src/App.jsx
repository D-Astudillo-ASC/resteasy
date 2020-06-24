import React, {Component, lazy, Suspense} from 'react';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';

import './styles/styles.css'
import RouteList from './routelist.js'

/* From the last dev. Not sure what it does.
 * I got rid of this directory but it's essentiall SwitchRoutes below

const Routes = lazy(() => import('./routes/Routes'));
function PrivateRoute({component: Component, authed, ...rest}){
    return (
        <Route
            {...rest}
            render={
                (props) => authed
                    ? <Component {...rest} />
                    : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
            }
        />
    )
}
*/

//Automatically load routes fro routelist.js
function SwitchRoutes(props){
        const mappedPropsRoutes = props.routes.map((item) => {
            const ItemRouter = lazy(() => import(`${item.dirpath}`))
            return (
                <Route exact path={item.URLpath} component={withRouter(ItemRouter)} key = {item.id}/>
            )
        })

        return(
            <Switch>
                {mappedPropsRoutes}
            </Switch>
        )
}

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <Suspense
                    fallback={
                        <div className="absolute-middle">
                            Loading...
                        </div>
                    }
                >
                    <SwitchRoutes routes={RouteList}/>
                </Suspense>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
