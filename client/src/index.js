import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import "antd/dist/antd.css";
import './assets/fonts/euphemia.ttf';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {REMOTE_HOST} from "./constants";
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppContextProvider } from "./AppContext";

const $ = require("jquery");
//test
// NOTE: All ajax requests will be append to REMOTE_HOST url
(function($) {
    let xhrPool = [];
    $(document).ajaxSend(function(e, xhr, options) {

        // NOTE: Add no authorization tokens at userLogin and userSignUp endpoints
        if (options.url
            && options.url.indexOf("userLogin") === -1
            && options.url.indexOf("userSignUp") === -1) {
                xhr.setRequestHeader(
                    "Authorization",
                    "Token " + localStorage.getItem("access_token")
                );
        }
        options.url = REMOTE_HOST + options.url;
        xhrPool.push(xhr);
    });

    $(document).ajaxComplete(function(e, xhr, options) {
        xhrPool = $.grep(xhrPool, function(x) {
            return x !== xhr;
        });
        if (xhrPool.length === 0) {
            setTimeout(() => {
            }, 1000);
        }
    });

    const abort = function() {
        $.each(xhrPool, function(idx, jqXHR) {
            jqXHR.abort();
        });
    };

    let oldbeforeunload = window.onbeforeunload;
    window.onbeforeunload = function() {
        let r = oldbeforeunload ? oldbeforeunload() : undefined;
        if (r === undefined) {
            // only cancel requests if there is no prompt to stay on the page
            // if there is a prompt, it will likely give the requests enough time to finish
            abort();
        }
        return r;
    };
})($);

ReactDOM.render(
    <AppContextProvider>
        <App />
    </AppContextProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
