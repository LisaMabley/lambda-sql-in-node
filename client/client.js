var app = angular.module('myApp', []);

app.controller('PersonController', ['$http', function(bananaSandwich){
  var person = this;

  person.name = '';
  person.address = '';
  person.city  = '';
  person.state = '';
  person.zip_code = '';
  person.list = [];

  person.getData = function() {
    console.log('get data called');
    bananaSandwich.get('/people').then(function(response) {
      console.log(response.data);
      person.list = response.data;
    });
  };

  person.sendData = function() {
    bananaSandwich.post('/people',
      {
        name: person.name,
        address: person.address,
        city: person.city,
        state: person.state,
        zip_code: person.zip_code
      })
      .then(function(serverResponse){
        person.getData();
        console.log(serverResponse);
      });
  };

  person.getData();
}]);
