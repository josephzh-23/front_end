/*
THe interative solution here 

*/

Promise.all = function promiseAllIterative(values) {
    return new Promise((resolve, reject) => {
       let results = [];

       /*
       Completed lets u know when everything is completed or not here and this is important 

       
       */
       let completed = 0;
       
       values.forEach((value, index) => {
            Promise.resolve(value).then(result => {
                results[index] = result;
                completed += 1;
                
                if (completed == values.length) {
                    resolve(results);
                }
            }).catch(err => reject(err));
       });
    });
}