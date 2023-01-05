import mysql from 'mysql';

const config = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'food_court'
});

export default config;