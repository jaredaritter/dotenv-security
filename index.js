require('dotenv').config({
  path: __dirname + '/obscuring_folder/.env',
});

console.log(process.env.TEST_KEY);
