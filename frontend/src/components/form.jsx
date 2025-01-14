import React, { useState, useEffect } from "react";
import data from "../tt.json";
import Nav from "./nav";
const FForm = () => {
  const [school, setSchool] = useState("");
  const [uniqueCourses, setUniqueCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [year, setYear] = useState("");
  const [shift, setShift] = useState("");
  const [perc, setPerc] = useState(0);
  const [fetchedKeys, setFetchedKeys] = useState([]);
  const [selectedKey, setSelectedKey] = useState(""); // To track the selected key

  const schoolOptions = [
    "PhysicalSciences",
    "LifeSciences",
    "SocialWork",
    "ChemicalScience",
    "Communication&Media",
    "Humanities",
    "IT",
    "Business",
  ];

  const yearMapping = { 1: 24, 2: 23, 3: 22 };

  useEffect(() => {
    if (school) {
      // Fetch unique courses when school changes
      if (data[school]) {
        const courses = Object.keys(data[school])
          .map((key) => key.split("-").pop())
          .filter((course, index, arr) => arr.indexOf(course) === index); // Deduplicate
        setUniqueCourses(courses);
      } else {
        setUniqueCourses([]);
      }
    } else {
      setUniqueCourses([]);
    }
    setSelectedCourse(""); // Reset course selection when school changes
  }, [school]);

  useEffect(() => {
    if (school && year && shift && selectedCourse) {
      // Construct the key
      const yearCode = yearMapping[year];
      const constructedKey = `${yearCode}-${shift}-${selectedCourse}`;
      const keys = data[school] ? Object.keys(data[school]) : [];

      const Constructed = data[school][constructedKey];
      if (Constructed) {
        console.log(Constructed);
        setFetchedKeys(Object.keys(Constructed)); // Set the keys of the constructed data
      } else {
        setFetchedKeys([]); // No data found, clear the fetched keys
      }
    } else {
      setFetchedKeys([]); // Clear the fetched keys when any field is empty
    }
  }, [school, year, shift, selectedCourse]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (school && selectedCourse && year && shift && selectedKey) {
      const url = `/result/${school}/${selectedCourse}/${shift}/${yearMapping[year]}/${selectedKey}/${perc}`;
      window.location.href = url;
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <>
    <Nav></Nav>
    
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <div className="w-full max-w-xl p-8 bg-lightBlack rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Course Selection Form</h1>
        <form onSubmit={handleSubmit}>
          {/* Percentage Input */}
          <div className="mb-4">
            <label htmlFor="percentage" className="block text-lg mb-2">Enter Current Att %</label>
            <input
              type="number"
              min={0}
              max={100}
              id="percentage"
              className="w-full p-3 bg-lightBlack text-white border-2 border-gradient-to-r from-pink-500 to-blue-500 rounded-lg"
              value={perc}
              onChange={(e) => setPerc(e.target.value)}
            />
          </div>

          {/* School Selection */}
          <div className="mb-4">
            <label htmlFor="school" className="block text-lg mb-2">Select School</label>
            <select
              id="school"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              className="w-full p-3 bg-lightBlack text-white border-2 border-gradient-to-r from-pink-500 to-blue-500 rounded-lg"
            >
              <option value="">--Select School--</option>
              {schoolOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Course Selection */}
          {uniqueCourses.length > 0 && (
            <div className="mb-4">
              <label htmlFor="course" className="block text-lg mb-2">Select Course</label>
              <select
                id="course"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full p-3 bg-lightBlack text-white border-2 border-gradient-to-r from-pink-500 to-blue-500 rounded-lg"
              >
                <option value="">--Select Course--</option>
                {uniqueCourses.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Year Selection */}
          <div className="mb-4">
            <label htmlFor="year" className="block text-lg mb-2">Select Year</label>
            <select
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full p-3 bg-lightBlack text-white border-2 border-gradient-to-r from-pink-500 to-blue-500 rounded-lg"
            >
              <option value="">--Select Year--</option>
              {Object.keys(yearMapping).map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>

          {/* Shift Selection */}
          <div className="mb-4">
            <label htmlFor="shift" className="block text-lg mb-2">Select Shift</label>
            <select
              id="shift"
              value={shift}
              onChange={(e) => setShift(e.target.value)}
              className="w-full p-3 bg-lightBlack text-white border-2 border-gradient-to-r from-pink-500 to-blue-500 rounded-lg"
            >
              <option value="">--Select Shift--</option>
              {[1, 2, 3].map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Fetched Keys Selection */}
          {fetchedKeys.length > 0 && (
            <div className="mb-4">
              <label htmlFor="fetchedKey" className="block text-lg mb-2">Select Subject</label>
              <select
                id="fetchedKey"
                value={selectedKey}
                onChange={(e) => setSelectedKey(e.target.value)}
                className="w-full p-3 bg-lightBlack text-white border-2 border-gradient-to-r from-pink-500 to-blue-500 rounded-lg"
              >
                <option value="">--Select Subject--</option>
                {fetchedKeys.map((key) => (
                  <option key={key} value={key}>
                    {key}
                  </option>
                ))}
              </select>
            </div>
          )}

          <button type="submit" className="w-full p-3 bg-black text-white rounded-lg mt-4 hover:bg-lightBlack">
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default FForm;
