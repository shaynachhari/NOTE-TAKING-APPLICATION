import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrashAlt, FaPlus } from 'react-icons/fa'; 
import './Note.css'; 

function Note() {
    const [notes, setNotes] = useState([]); 
    const [newNote, setNewNote] = useState(''); 
    const [newTitle, setNewTitle] = useState(''); 

    useEffect(() => {
        axios.get('http://localhost:8000/notes')
            .then(response => {
                console.log('Fetched notes:', response.data); 
                setNotes(response.data); 
            })
            .catch(error => console.error('Error fetching notes!', error));
    }, []);

    const addNote = () => {
        if (newNote.trim() === '' || newTitle.trim() === '') return; 
        
        axios.post('http://localhost:8000/notes', { title: newTitle, content: newNote }) 
            .then(response => {
                console.log('Added note:', response.data); 
                setNotes([...notes, { id: response.data.id, title: newTitle, content: newNote }]); 
                setNewNote(''); 
                setNewTitle(''); 
            })
            .catch(error => console.error('Error adding note!', error));
    };
    
    const deleteNote = (id) => {
        axios.delete(`http://localhost:8000/notes/${id}`) 
            .then(() => {
                console.log('Deleted note with ID:', id); 
                setNotes(notes.filter(note => note.id !== id)); 
            })
            .catch(error => console.error('Error deleting note!', error));
    };

    return (
        <div className="note-container">
            <h1>My Notes</h1>
            <div className="note-input-container  note-output">
                <input
                    type="text"
                    value={newTitle}
                    onChange={e => setNewTitle(e.target.value)}
                    placeholder="Enter a note title"
                    className="note-input title-input"
                />
                <div className="content-input-wrapper">
                    <textarea
                        value={newNote}
                        onChange={e => setNewNote(e.target.value)}
                        placeholder="Enter your content"
                        className="note-input content-input"
                    ></textarea>
                    <FaPlus 
                        className="add-note-icon" 
                        onClick={addNote} 
                        title="Add Note" 
                        style={{ cursor: 'pointer', fontSize: '1.5rem', marginLeft: '10px' }}
                    />
                </div>
            </div>
            <div className="note-list-grid">
                {notes.map(note => (
                    <div key={note.id} className="note-item">
                        <h2 className="note-title">{note.title}</h2>
                        <p className="note-content">{note.content}</p>
                        <FaTrashAlt 
                            className="delete-icon" 
                            onClick={() => deleteNote(note.id)} 
                            title="Delete note" 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Note;
