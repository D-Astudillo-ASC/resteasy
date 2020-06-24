import React, {Component, lazy, Suspense} from 'react';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';

import Header from './views/Header/Header'
import Footer from './views/Footer/Footer'

function PageWrapper(props){
    return(
        <div>
            <Header search={true}/>
            {props.content}
            <Footer />
        </div>
    )
}

export default PageWrapper
