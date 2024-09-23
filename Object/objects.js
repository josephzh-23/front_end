const object1 = {
    a: 'somestring',
    b: 42,
  };
  // Here it's iterating over an object here 
  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }
  

  // Using array methods
Object.entries(object1).forEach(([key, value]) => {
    console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
  });
  // Expected output:
  // "a: somestring"
  // "b: 42"
  