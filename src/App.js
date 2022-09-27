import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home, Detail, Login, Profile } from "./pages";                                  
import { GlobalLayout } from "./components";        
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <GlobalLayout>
            <Routes>
              <Route path="/profile" element={<Profile />} />
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
