import logo from './logo.svg';
import './App.css';
import ContentLayer from "./components/contentLayer";
import React from "react";
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Link to='/task_manager'>Task Manager</Link>

        <ContentLayer/>
    </div>
  );
}

export default App;
