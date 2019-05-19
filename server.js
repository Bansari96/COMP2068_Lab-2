//require in express
const express=require('express');
const doMath=require('./math');
//init express application
const app=express();
const PORT=3000;
app.get('/',doMath);
  
  const validOptions = ['add', 'subtract', 'multiply', 'divide'];
//listen to port 3000
app.listen(3000);
console.log(`Application is listening on http://localhost:${PORT}`);