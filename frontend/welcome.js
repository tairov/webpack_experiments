'use strict';

export default function(message) {

    if (NODE_ENV == 'development') {
        console.log(message);
    }
    // let yy = process.env.USER;

    alert(`Welcome ${message}`);
};