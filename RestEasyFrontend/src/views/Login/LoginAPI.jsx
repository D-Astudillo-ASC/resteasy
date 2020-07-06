const $ = require('jquery');

const tryUserLogin = (email, password) => {
    let formData = new FormData();

    // not that the form data shud in this format only
    // coz we need to obtain token from django rest_framework package

    formData.append('username', email);
    formData.append('password', password);
    formData.append('grant_type', 'password');

    const url = '/api/userLogin/';
    const dfd = new $.Deferred();

    $.ajax({
        url,
        type: 'POST',
        contentType: false,
        data: formData,
        cache: false,
        processData: false,
    }).done(function (response) {
        dfd.resolve(response);
    }).fail(function(jqXHR, textStatus, errorThrown) {
        dfd.reject(jqXHR);
    });

    return dfd.promise();

};

const tryUserSignUp = (first_name, last_name, email, password) => {

    const json = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password
    };

    const url = '/api/userSignUp/';
    const dfd = new $.Deferred();

    $.ajax({
        url,
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify(json),
        cache: false,
        processData: false,
    }).done(function (response) {
        dfd.resolve(response);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        dfd.reject(jqXHR);
    });

    return dfd.promise();

};

const forgotPasswordRequest = (email) => {

    let formData = new FormData();
    formData.append('email', email);

    const url = '/api/forgot_password/';
    const dfd = new $.Deferred();

    $.ajax({
        url,
        type: 'POST',
        contentType: false,
        data: formData,
        cache: false,
        processData: false,
    }).done(function (response) {
        dfd.resolve(response);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        dfd.reject(jqXHR);
    });

    return dfd.promise();
};


const resetPasswordRequest = (endpoint, password) => {

    let formData = new FormData();
    formData.append('password', password);

    const url = '/api'+endpoint;
    const dfd = new $.Deferred();

    $.ajax({
        url,
        type: 'POST',
        contentType: false,
        data: formData,
        cache: false,
        processData: false,
    }).done(function (response) {
        dfd.resolve(response);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        dfd.reject(jqXHR);
    });

    return dfd.promise();
};

const verifyEmail = (endpoint) => {
    let formData = new FormData();

    const url = '/api'+endpoint;
    const dfd = new $.Deferred();

    $.ajax({
        url,
        type: 'POST',
        contentType: false,
        data: formData,
        cache: false,
        processData: false,
    }).done(function (response) {
        dfd.resolve(response);
    }).fail(function(jqXHR, textStatus, errorThrown) {
        dfd.reject(jqXHR);
    });

    return dfd.promise();

};

export {
    tryUserLogin, tryUserSignUp, verifyEmail, forgotPasswordRequest, resetPasswordRequest
}
