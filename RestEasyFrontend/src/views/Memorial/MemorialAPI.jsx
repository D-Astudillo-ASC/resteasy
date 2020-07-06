const $ = require('jquery');

const getMemorial = (memorial_url) => {
    let formData = new FormData();

    formData.append('url', memorial_url);

    const url = '/api/getMemorial/';
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

const uploadMedia = (file, memorial_url) => {
    let formData = new FormData();

    formData.append('file', file);
    formData.append('memorial_url',memorial_url);

    const url = '/api/uploadMedia/';
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

const updatePaymentWithServer = (memorial_url, epoch_time, amount, payment_id, card_id, payee_email, paid_items) => {
    let formData = new FormData();

    formData.append('memorial_url', memorial_url);
    formData.append('payment_epoch_time', epoch_time);
    formData.append('payment_amount', amount);
    formData.append('payment_id', payment_id);
    formData.append('card_id', card_id);
    formData.append('payee_email', payee_email);
    formData.append('paid_items', paid_items);

    const url = '/api/registryPayment/';
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
    getMemorial, uploadMedia, updatePaymentWithServer
}
