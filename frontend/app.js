'use strict';

let moduleName = 'home';
console.log(moduleName);

let handler;
try {
    handler = require('bundle!./routes/' + moduleName);
} catch (e) {
    alert('404 path not found');
}

if (handler) {
    handler(function (route) {
        route();
    });
}

// let moduleName = location.href.slice(1);
// let context = require.context('./routes', false);
//
// context.keys().forEach(function(path) {
//     let module = context(path);
//     module();
// });
//
// let route;
// try {
//     route = context('./' + moduleName);
// } catch (e) {
//     alert(e);
// }
//
// if (route) {
//     route();
// }


// let button = document.querySelector('#loginButton');
//
// document.addEventListener('click', function() {
//     require.ensure([], function(require) {
//         let login = require('./login');
//
//         login();
//     }, 'auth')
// })
//
// let buttonLogOut = document.querySelector('#logoutButton');
//
// document.addEventListener('click', function() {
//     require.ensure([], function(require) {
//         let logout = require('./logout');
//         logout();
//     }, 'auth')
// })