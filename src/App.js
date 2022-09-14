import React from "react";
import "./App.css";
import Row from "./components/Row";
import requests from "./request";
import TopBanner from "./components/TopBanner";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Detail from "./pages/Detail";
import { Home } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  render={() => <Home /> }/>
        <Route path="*"  element={<Navigate  to="/" replace/>}/>



      </Routes>
    </Router>
  );
}

export default App;
