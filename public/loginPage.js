'use strict'
let userForm = new UserForm();
userForm.loginFormCallback = function(data) {
    const xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = processResponse;
    // function processResponse(e) {   
    //     if (xhr.readyState === 4) {
    //         ApiConnector.login();   // ??? Передайте в запрос авторизации функцию, которая будет выполняться при попытке авторизации ???
    //         console.log(xhr.responseText);
    //     }
    //  }
    xhr.open('GET', 'db.json', true);
    xhr.onload = function() {
        console.log(xhr.response);
    }
    xhr.send();
}
  
    
