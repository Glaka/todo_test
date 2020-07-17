import React from 'react';
import './App.css';
import { ToDoList } from './components/ToDos/ToDoList';
import { Filter } from './components/Filter/Filter';
import { Header } from './components/Header/Header';

function App() {
    return (
        <div className="App">
            <Header />
            <Filter />
            <ToDoList />
        </div>
    );
}

export default App;
