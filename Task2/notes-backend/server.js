const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser');
const port = 8000;                
const connection = require('./db'); 
app.use(express.json());


const cors = require('cors');
app.use(cors()); 
app.use(bodyParser.json()); 


app.get('/notes', (req, res) => {
    connection.query('SELECT * FROM notes', (err, results) => {
        if (err) return res.status(500).json({ error: err.message }); 
        res.json(results); 
    });
});

app.post('/notes', (req, res) => {
    const { title, content } = req.body; 
    connection.query(
        'INSERT INTO notes (title, content) VALUES (?, ?)', 
        [title, content], 
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message }); 
            res.status(201).json({ id: results.insertId, title, content }); 
        }
    );
});

app.delete('/notes/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM notes WHERE id = ?', [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
           if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json({ message: 'Note deleted successfully' });
    });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); 
});
