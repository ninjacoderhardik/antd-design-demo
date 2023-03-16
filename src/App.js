import React from "react";
import "./App.css";
import Footer from "./component/footer/Footer";
import { Navbar } from "./component/navbar/Navbar";
import Router from "./routes/router";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="section">
        <Router />
        <Footer />
      </div>
    </div>
  );
}
export default App;