import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/navbar.component';
import ExercisesList from './components/exercises-list.component';
import EditExercise from './components/edit-exercises.component';
import CreateUser from './components/create-user.component';
import CreateExercise from './components/create-exercises.component';

export default function App() {
  return (
    <Router>
    <div className = 'container' >
    <Navbar/>
      <br/>
      <Routes>
            <Route exact path="/" element = {<ExercisesList/>} />
            <Route path="/edit/:id" element={<EditExercise/>} />
            <Route path="/create" element={<CreateExercise/>} />
            <Route path="/user" element={<CreateUser/>} />
      </Routes>
    </div>
   
    </Router>
  );
}
