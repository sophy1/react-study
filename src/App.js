import "./styles.css";

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from "./tutorial/Home";
import StateAndLifecycle from "./tutorial/state-and-lifecycle/StateAndLifecycle";

export default function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/state-and-lifecycle">State and Lifecycle</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/state-and-lifecycle" element={<StateAndLifecycle />} />
      </Routes>
    </div>
  );
}
