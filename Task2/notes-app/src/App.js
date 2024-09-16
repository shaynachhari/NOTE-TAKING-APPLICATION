import React from 'react';
import './App.css';
import Note from './Note/Note';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <nav className="App-nav">
                    <div className="App-nav-content">
                        <div className="App-nav-icon">
                            <span>☰</span>
                        </div>
                        <span className="App-nav-link">Notes</span>
                    </div>
                </nav>
            </header>
            <main>
                <Note/>
            </main>
            <footer className="App-footer">
                <p>copyright © 2022 Web Notes App</p>
            </footer>
        </div>
    );
}

export default App;
