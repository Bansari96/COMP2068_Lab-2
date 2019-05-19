
const validOptions = ['add', 'subtract', 'multiply', 'divide'];
const calculator=(method,x,y)=>{
    switch(method.toLowerCase()){
        case 'add':
        return {operation: '+',result:x+y};
        case 'subtract':
        return {operation: '-',result:x-y};
        case 'multiply':
        return {operation: 'x',result:x*y};
        case 'divide':
        return {operation: '/',result:x/y};
        default:'This is not a valid option';
    }
};

const calculatorRoute = (req, res) => {
  req.query.x = Number(req.query.x); // Parse string value of x into an integer
  req.query.y = Number(req.query.y); // Parse string value of y into an integer

  const { method, x, y } = req.query; // Destructure out method, x, y from request.query

  // if y and x is Not a Number - tell them it has to be a number
  if (isNaN(y) || isNaN(x)) {
    return res.send('Both X and Y must be a number');
  }

  // If method is not in our valid options - tell them it has to be and display them
  if (!validOptions.includes(method.toLowerCase())) {
    return res.send(
      `Method must include one of the following operations: ${validOptions.join(', ')}`
    );
  }

  // Get Operation and Result from simple calculate function
  const { operation, result } = calculator(method, x, y);

  //print the result
  res.send(`x = ${x} | y = ${y} | operation = '${operation}' | Answer : ${x} ${operation} ${y} = ${result}`); 
  
};

module.exports = calculatorRoute; // Export out function