import React from "react";
import "./App.css";
import { Home } from "./pages";
import { Container } from "./components/templates";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Container>
  );
}

export default App;
