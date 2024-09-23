/*
Using the promise function here we can keep going 
*/

// This is the new start here 
const getPromise = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(res);
        }, 1000);
    });
};

// promise is triggered to resolve here, when calling the function
getPromise().then((res) => {
    console.log(res);
});