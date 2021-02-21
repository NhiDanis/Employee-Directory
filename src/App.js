import React from "react";
import logo from './logo.svg';
import './App.css';
import Jumbotron from './components/jumbotron';
import SearchBar from "./components/searchBar";

function App() {
  return (
    <div className="App">
      <Jumbotron/>
      <SearchBar/>
      
    </div>
  );
}

export default App;
