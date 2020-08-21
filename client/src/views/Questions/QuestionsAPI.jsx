const $ = require('jquery');

const uploadMedia = (file) => {

    

    // let formData = new FormData();

    // formData.append('file', file);

    // const url = '/api/uploadMedia/';
    // const dfd = new $.Deferred();

    // $.ajax({
    //     url,
    //     type: 'POST',
    //     contentType: false,
    //     data: formData,
    //     cache: false,
    //     processData: false,
    // }).done(function (response) {
    //     dfd.resolve(response);
    // }).fail(function(jqXHR, textStatus, errorThrown) {
    //     dfd.reject(jqXHR);
    // });
    // return dfd.promise();
};

const saveStripeToken = (token_id, payee_email) => {
    let formData = new FormData();

    formData.append('token_id', token_id);
    formData.append('payee_email', payee_email);

    const url = '/api/saveStripeToken/';
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
    uploadMedia,saveStripeToken
}
