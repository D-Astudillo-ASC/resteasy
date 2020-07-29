import React from "react"
import { Route, Redirect } from "react-router-dom";
import { withContext } from "./AppContext"

function ProtectedRoute(props) {
    const { component: Component, ...rest } = props;

    const routeAttempted = (route) => {
        console.log("routeAttempted: "+ route)
        props.routeUpdate(route)
        return (<Redirect to="/login" />)
    }
    return (
        props.token ?
            <Route {...rest} component={Component} /> :
            routeAttempted(props.path)
    )
}

export default withContext(ProtectedRoute);