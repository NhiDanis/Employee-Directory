import React from "react";
import logo from './logo.svg';
import './App.css';
import Jumbotron from './components/jumbotron';
import SearchBar from "./components/searchBar";
import Table from "./components/table";

function App() {
  return (
    <div className="App">
      <Jumbotron/>
      <Table/>
      
    </div>
  );
}

export default App;
