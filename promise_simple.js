/*
Learn to build promise better here 

A basic promise here 
*/


// promise is triggered to resolve here, when creating
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolved');
    }, 1000);
});

promise.then((res) => {
    console.log(res);
});