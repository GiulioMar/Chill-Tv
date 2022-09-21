import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home, Detail, Login } from "./pages";
import { GlobalLayout } from "./components";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const user = null;

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
      } else {
      }
    });

    return;
    unsubscribe;
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <GlobalLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/detail/:slug/:id" element={<Detail />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </GlobalLayout>
        )}
      </Router>
    </div>
  );
}

export default App;
