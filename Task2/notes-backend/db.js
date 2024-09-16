const mysql = require('mysql2'); 

const connection = mysql.createConnection({
    host: 'localhost',        
    user: 'root',            
    password: 'password',
    database: 'notes_db'      
});

connection.connect(err => {
    if (err) {
        console.error('Database connection error:', err); 
        process.exit(1);   
    }
     console.log('Connected Your database.'); 
});

module.exports = connection; 
