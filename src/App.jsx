import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import { supabase } from "./supabase";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);
  const [connected, setConnected] = useState(null);
  const [connectionError, setConnectionError] = useState("");

  async function fetchNames() {
    const { data, error } = await supabase.from("people").select("*");
    if (error) {
      console.error("Error fetching names:", error);
      setConnected(false);
      setConnectionError(error.message || "Unable to fetch data");
      return;
    }
    setNames(data || []);
    setConnected(true);
    setConnectionError("");
  }

  async function checkSupabase() {
    const { error } = await supabase.from("people").select("id").limit(1);
    if (error) {
      console.error("Supabase connection failed:", error);
      setConnected(false);
      setConnectionError(error.message || "Connection failed");
      return;
    }
    setConnected(true);
    setConnectionError("");
  }

  async function addName() {
    await supabase.from("people").insert({ name });
    fetchNames();
  }

  useEffect(() => {
    console.log("refreshed");
    checkSupabase();
    fetchNames();
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <div className="supabase-status">
            {connected === null && <p>Checking Supabase connection...</p>}
            {connected === true && <p style={{ color: "green" }}>Supabase connected</p>}
            {connected === false && (
              <p style={{ color: "red" }}>
                Supabase not connected: {connectionError}
              </p>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;