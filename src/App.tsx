import React from "react";
import "./App.css";
import AppRoutes from "./AppRoutes";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app-container">
      <div className="app-content">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
