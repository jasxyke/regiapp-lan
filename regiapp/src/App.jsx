import axiosClient from "./axios";
import "./App.css";
import React, { useState, useEffect, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Upload from "./pages/Upload";
import Masterlist from "./pages/Masterlist";
import Navbar from "./components/Navbar";

export const CoursesContext = createContext();

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axiosClient
      .get("/courses")
      .then((res) => {
        console.log(res);
        setCourses(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <CoursesContext.Provider value={courses}>
      <Navbar />
      <div className="container mt-1">
        <Routes>
          <Route path="/" element={<Upload />} />
          <Route path="/masterlist" element={<Masterlist />} />
        </Routes>
      </div>
    </CoursesContext.Provider>
  );
}

export default App;
