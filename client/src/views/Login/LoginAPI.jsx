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

export {
    tryUserLogin,
}
