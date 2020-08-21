const $ = require('jquery');

const tryUserSignUp = (name, email, password) => {

  const json = {
    name: name,
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

export {
  tryUserSignUp,
}
