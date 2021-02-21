import React from "react";
import logo from './logo.svg';
import './App.css';
import Jumbotron from './components/jumbotron';
import Table from "./components/table";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Jumbotron/>
      <Table/>
      <Footer/>
      
    </div>
  );
}

export default App;
