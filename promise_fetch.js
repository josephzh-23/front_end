
// then here is part 1 and then we have the code 
const fetchPromise = fetch(
    "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );

  fetchPromise.then(res=>{

    if (!res.ok){

        throw new Error('I failed')
    }

    return res.json()
  }).then(data=>{

    console.log(data[0].name);
  }).catch(e =>{
    // It gets logged right here 
    console.log('error is ', e);
  })

