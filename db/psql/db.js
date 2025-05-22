const { Client } = require('pg');

// Create a client instance
const client = new Client({
    user: 'user', 
    host: 'localhost',       
    database: 'employee', 
    password: 'nirbh@y7838A', 
    port: 5432,              
  });
  
//   // Connect to the PostgreSQL database
//   client.connect()
//     .then(() => console.log('Connected to the PostgreSQL database'))
//     .catch((err) => console.error('Connection error', err.stack));
  
  module.exports = client;