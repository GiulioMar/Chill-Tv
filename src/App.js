import React from "react";
import "./App.css";
import Row from "./components/Row";
import requests from "./utils/request";
import TopBanner from "./components/TopBanner";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Home, Detail } from "./pages";
import { GlobalLayout } from "./components";

function App() {
  return (
    <div className="app">
      <GlobalLayout>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/detail/:slug/:id" element={<Detail />}/>
            <Route path="*"  element={<Navigate  to="/" replace/>}/>
          </Routes>
        </Router>
      </GlobalLayout>
    </div>
  );
}

export default App;
