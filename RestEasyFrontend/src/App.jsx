import React, {Component, lazy, Suspense} from 'react';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {Spin} from "antd";
import NotFound from "./views/NotFound";
import {ACCESS_TOKEN} from "./constants";

const Landing = lazy(() => import('./views/Landing/Landing'));
const Routes = lazy(() => import('./routes'));
const SignUp = lazy(() => import('./views/Login/SignUp'));
const Login = lazy(() => import('./views/Login/Login'));
const ForgotPassword = lazy(() => import('./views/Login/ForgotPassword'));
const ResetPassword = lazy(() => import('./views/Login/ResetPassword'));
const EmailVerify = lazy(() => import('./views/Login/EmailVerify'));
const Memorial = lazy(() => import('./views/Memorial/Memorial'));

class App extends Component {
    render() {
        const PrivateRoute = ({component: Component, authed, ...rest}) => {
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
        };
        return (
            <div style={{ height: '100vh'}}>
                <BrowserRouter>
                <Suspense
                    fallback={
                        <div
                            style={{
                                textAlign: 'center',
                                height: '80vh',
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column'
                            }}
                        >
                            <Spin size="large" />
                        </div>
                    }
                >
                    <Switch>
                        <Route exact path="/" component={withRouter(Landing)}/>
                        <Route exact path="/login" component={withRouter(Login)}/>
                        <Route exact path="/forgot_password" component={withRouter(ForgotPassword)}/>
                        <Route exact path="/SignUp" component={withRouter(SignUp)}/>
                        <Route path="/confirm_email/:uuid" component={withRouter(EmailVerify)}/>
                        <Route path="/reset_password/:uuid" component={withRouter(ResetPassword)}/>
                        <Route path="/registry/:endpoint" component={withRouter(Memorial)}/>
                        <PrivateRoute authed={localStorage.getItem(ACCESS_TOKEN)} path="/my" component={Routes}/>

                        <Route path="*" component={withRouter(NotFound)} />
                    </Switch>
                </Suspense>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
