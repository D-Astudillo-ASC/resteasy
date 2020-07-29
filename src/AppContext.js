import React, { Component } from "react";
import axios from "axios";
import { REMOTE_HOST } from "./constants"

const authAxios = axios.create();

const API_URL = REMOTE_HOST;


// intercepts the outgoing request and attaches the jwt token to the header
authAxios.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

const AppContext = React.createContext();

export class AppContextProvider extends Component {
    constructor() {
        super()
        this.state = {
            user: JSON.parse(localStorage.getItem("user")) || null,
            token: localStorage.getItem("token") || "",
            routeAttempted: null
        }
    }


    signup = (firstName, lastName, email, password) => {
        return authAxios.post(API_URL+"/users/register", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        })
            .then(response => {
                const { email, token } = response.data
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(response.data));
                this.setState({
                    user: response.data,
                    token: token
                });

                return response;
            })
    }

    login = (email, password) => {
        return authAxios.post(API_URL+"/users/authenticate", {
            email: email,
            password: password
        })
            .then(response => {
                console.log(response.data)
                const { token, email } = response.data;
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(response.data))
                this.setState({
                    user: response.data,
                    token: token
                });
                return response;
            }).catch(e => console.log(e))
    }

    logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        this.setState({
            user: null,
            token: ""
        })
    }

    routeUpdate = (route) => {
        console.log(this.state)
        console.log(route)
        this.setState({
            routeAttempted: route,
        })
    }

    render() {
        return (
            <AppContext.Provider
                value={{
                    signup: this.signup,
                    login: this.login,
                    logout: this.logout,
                    routeUpdate: this.routeUpdate,
                    ...this.state
                }}
            >

                {this.props.children}

            </AppContext.Provider>
        )
    }
    
}



export const withContext = Component => {
    return props => {
        return (
            <AppContext.Consumer>
                {
                    globalState => {
                        return (
                            <Component
                                {...globalState}
                                {...props}
                            />
                        )
                    }
                }
            </AppContext.Consumer>
        )
    }
}