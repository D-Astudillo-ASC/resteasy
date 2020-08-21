import React, {Component, lazy, Suspense} from 'react';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';

import Header from './views/Header/Header'
import Footer from './views/Footer/Footer'

function PageWrapper(props){
    return(
        <div style={{height: "100%", backgroundColor: "white"}}>
            <Header search={true}/>
            <div style={{minHeight: "calc(100vh - 50px)", margin: "0"}}> {props.content} </div>
            <Footer />
        </div>
    )
}

export default PageWrapper
