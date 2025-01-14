/* = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
                                                  🤓 Author: Mohammed Rayaan Pasha 
                                                  📅 Last Updation Date: 2024-01-25 
                                                  📝 File Name: Result.jsx 
                                                  Purpose: 
                                                  -> This component helps in tracking and selecting future classes 📚 
                                                  based on the attendance required for a particular subject. 🧑‍🏫 
                                                  It calculates the number of classes already attended ✔️, 
                                                  remaining classes 🔢, and allows the user to download a PDF 📄 
                                                  of selected future classes. 🎓📅

                                                TABLE OF CONTENT:

                                                - - - - - - - - - - - - - - - - - - - - - - - - - -
                                                | CODE | DESCRIPTION                               |
                                                - - - - - - - - - - - - - - - - - - - - - - - - - - 
                                                |  0   | External Libraries                        |
                                                |      |                                           |
                                                |  1   | INTERNAL COMPONENTS                       |
                                                |      |                                           |
                                                |  2   | Component Definitaion                     |                 
                                                |      |                                           |
                                                | 2.0  | HOLIDAYS & ORDER CHANGE SPACE             |
                                                |      |                                           |
                                                | 2.1  |  GENERATING DAYS FROM START DATE TILL     |
                                                |      |   END DATE                                |
                                                |      |                                           |
                                                | 2.2  | TIMETABLE OF SPECIFIED DETAILS            |                              
                                                |      |                                           |                                                
                                                | 2.3  | CLASS DETAILS OF SPECIFIED CREDENTIALS    |  
                                                |      |                                           |
                                                | 2.4  | UI Logic                                  |
                                                |      |                                           |                                                
                                                |2.4.0 | PDF CREATION LOGIC                        |
                                                |      |                                           |
                                                |2.5   | UI CREATION                               |
                                                |      |                                           |                                                
                                                |2.5.0 | NAV-BAR                                   |
                                                |      |                                           |
                                                |2.5.1 | STAT-HEADERS                              |
                                                |      |                                           |
                                                |2.5.2 | FUTURE CLASSES SECTION                    |
                                                |      |                                           |
                                                |2.5.3 | DOWNLOAD SECTION                          |
                                                |      |                                           |
                                                - - - - - - - - - - - - - - - - - - - - - - - - - - 

 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */

// = = = = = = = = = = = = = = =  0. External Libraries = = = = = = = = = = = = = = = = ==
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { jsPDF } from "jspdf";

// = = = = = = = = = = = = = = =  1. INTERNAL COMPONENTS = = = = = = = = = = = = = = = = ==
import Nav from "./nav";
import data from "../tt.json"

// = = = = = = = = = = = = = = =  2. Component Definitaion = = = = = = = = = = = = = = = = ==
export default function Result() {
  const { school, className, shift, year, subject, percentage } = useParams();

  // = = = = = = = = = = = = = = = = = = 2.0 HOLIDAYS & ORDER CHANGE SPACE = = = = = = = = = = = = = = = = = =

  const Holidays = [
    // cristmas holidays 🎄
    new Date("2024-12-23"),
    new Date("2024-12-24"),
    new Date("2024-12-25"),
    new Date("2024-12-26"),
    new Date("2024-12-27"),
    new Date("2024-12-28"),
    new Date("2024-12-29"),
    new Date("2024-12-30"),
    new Date("2025-1-1"),
    new Date("2025-1-2"),
    new Date("2025-1-3"),
    new Date("2025-1-4"),

    // makar sankranti
    new Date("2025-1-14"),

    //republic day
    new Date("2025-1-14"),

    //mid sem
    new Date("2025-2-7"),
    new Date("2025-2-8"),
    new Date("2025-2-9"),
    new Date("2025-2-10"),
    new Date("2025-2-11"),
    new Date("2025-2-12"),
    new Date("2025-2-13"),
    new Date("2025-2-14"),
    new Date("2025-2-15"),

    //visages
    new Date("2025-2-21"),
    new Date("2025-2-22"),

    //maha shivaratri
    new Date("2025-2-26"),

    //feast of St. Joseph's
    new Date("2025-3-19"),

    //ramazan
    new Date("2025-3-31"),

    // mahavir jayanti
    new Date("2025-4-10"),
  ];

  const ChangeInOrder = {
    "2025-01-22": "saturday",
    "2025-01-30": "tuesday",
    "2025-03-11": "wednesday",
    "2025-04-12": "thursday",
  };

  // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  //  = = = = = = = = = = = = 2.1 GENERATING DAYS FROM START DATE TILL END DATE = = = = = = = == = = = = = =
  function generateDays(startDate, endDate, holidays = []) {
    const days = [];

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start > end) {
      console.error("Start date cannot be after end date.");
      return [];
    }

    let currentDate = new Date(start);

    while (currentDate <= end) {
      let isHoliday = false;

      Holidays.forEach((holiday) => {
        if (
          holiday.getMonth() === currentDate.getMonth() &&
          holiday.getDate() === currentDate.getDate() &&
          holiday.getFullYear() === currentDate.getFullYear()
        ) {
          isHoliday = true;
        }
      });

      if (currentDate.getDay() !== 0 && !isHoliday) {
        days.push(new Date(currentDate));
      }

      currentDate.setDate(currentDate.getDate() + 1);
    }

    return days;
  }

  const AllDays = generateDays("2024-12-04", "2025-04-12");

  //= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  // = = = = = = = = = = = = = = = = = = = = = = 2.2 TIMETABLE OF SPECIFIED DETAILS = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  const courseTimetable = data[school][`${year}-${shift}-${className}`]

  //= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  // = = = = = = = = = = = = = = = = = = = = = = 2.3 CLASS DETAILS OF SPECIFIED CREDENTIALS = = = = = = = = = = = = = = = = = = = = = = =

  const AllDaysOfSpecifiedClass = [];
  const FutureClasses = [];
  const DaysOfSubject = courseTimetable[subject];
  let NoOfClassesTillToday = 0;
  const Today = new Date();

  AllDays.forEach((date) => {
    let today = date.getDay();
    if (date < new Date()) {
      NoOfClassesTillToday += 1;
    }

    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let TodaysDay = dayNames[today].toLowerCase();

    const dateKey = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
    if (ChangeInOrder[dateKey]) {
      TodaysDay = ChangeInOrder[dateKey];
    }
    DaysOfSubject.forEach((day) => {
      if (day == TodaysDay) {
        AllDaysOfSpecifiedClass.push(date);
        if (date > new Date()) {
          FutureClasses.push(date);
        }
      }
    });
  });

  const TotalDays = AllDaysOfSpecifiedClass.length;
  const NoOfDaysToAttend = TotalDays * (80 / 100);
  const NoOfDaysAttended = NoOfClassesTillToday * (percentage / 100);

  const RemaningClassesToAttend = Math.ceil(
    NoOfDaysToAttend - NoOfDaysAttended
  );

  console.log(AllDaysOfSpecifiedClass.length, FutureClasses.length);

  // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  // = = = = = = = = = = = = = = = = = = = = = = 2.4 UI Logic = = = = = = = = = = = = = = = = = = = = = = =

  const [SelectedClasses, setSelectedClasses] = useState({});
  const [NoOfTrue, setNoOfTrue] = useState(0);

  const handleClassClick = (Class) => {
    // Check if the class is already selected
    const isSelected = SelectedClasses[Class];

    // If it's already selected, we can deselect it
    if (isSelected) {
      setSelectedClasses((prevState) => {
        const updatedSelectedClasses = { ...prevState, [Class]: false };
        // Recalculate the selected count
        setNoOfTrue(
          Object.values(updatedSelectedClasses).filter((value) => value).length
        );
        return updatedSelectedClasses;
      });
    } else if (NoOfTrue < Math.ceil(NoOfDaysToAttend - NoOfDaysAttended)) {
      // If it's not selected and the limit is not reached, we can select it
      setSelectedClasses((prevState) => {
        const updatedSelectedClasses = { ...prevState, [Class]: true };
        // Recalculate the selected count
        setNoOfTrue(
          Object.values(updatedSelectedClasses).filter((value) => value).length
        );
        return updatedSelectedClasses;
      });
    }
  };

  // = = = = = = = = = = = = = = = = = = = = = = 2.4.0 PDF CREATION LOGIC = = = = = = = = = = = = = = = = = = = = = = =

  const generatePDF = () => {
    const doc = new jsPDF();
    const selectedDates = Object.keys(SelectedClasses).filter(
      (date) => SelectedClasses[date]
    );

    if (selectedDates.length === 0) {
      alert("No classes selected to generate PDF!");
      return;
    }

    // Header: Title centered
    doc.setFontSize(22);
    doc.setTextColor(0, 0, 0);
    doc.text("Bunkify", 105, 20, null, null, "center");

    // Subheading: Description centered
    doc.setFontSize(14);
    doc.setTextColor(100, 100, 100);
    doc.text(
      "Organizing College Bunks with Math",
      105,
      30,
      null,
      null,
      "center"
    );

    // Table Title
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("You Selected These Classes:", 20, 50);

    // Table Headers
    const startX = 20;
    const startY = 60;
    const rowHeight = 10;
    const colWidthDate = 80;
    const colWidthDay = 80;

    // Draw header row
    doc.setFillColor(220, 220, 220);
    doc.rect(startX, startY, colWidthDate, rowHeight, "F");
    doc.rect(startX + colWidthDate, startY, colWidthDay, rowHeight, "F");

    doc.setTextColor(0, 0, 0);
    doc.text("Date", startX + 5, startY + 7);
    doc.text("Day", startX + colWidthDate + 5, startY + 7);

    // Draw data rows
    let currentY = startY + rowHeight;
    doc.setFont("helvetica", "normal");

    selectedDates.forEach((date, index) => {
      const currentDate = new Date(date);
      const dayOfWeek = currentDate.toLocaleString("en-us", {
        weekday: "long",
      });
      const formattedDate = `${currentDate.getDate()} ${currentDate.toLocaleString(
        "default",
        { month: "short" }
      )} ${currentDate.getFullYear()}`;

      // Draw Date column cell
      doc.rect(startX, currentY, colWidthDate, rowHeight);
      doc.text(formattedDate, startX + 5, currentY + 7);

      // Draw Day column cell
      doc.rect(startX + colWidthDate, currentY, colWidthDay, rowHeight);
      doc.text(dayOfWeek, startX + colWidthDate + 5, currentY + 7);

      currentY += rowHeight;
    });

    // disclaimer
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(
      "Disclaimer: You are using this at your own risk. We trust our math and algorithm behind it, but sometimes, " +
        "and it’s very unlikely, there might be some uncertainties causing inaccuracies. We are not responsible for that.",
      10,
      doc.internal.pageSize.height - 20,
      { maxWidth: 180 }
    );

    // Save the PDF
    doc.save("selected-classes.pdf");
  };
  // = = = = = = = = = = = = = = = = = = = = = = 2.5 UI CREATION = = = = = = = = = = = = = = = = = = = = = = =

  return (
    <>
      {/* = = = = = = = = = = = = = = = = = = = = = = 2.5.0 NAV-BAR = = = = = = = = = = = = = = = = = = = = = = =  */}

      <Nav></Nav>

      {/* = = = = = = = = = = = = = = = = = = = = = = 2.5.1 STAT-HEADERS = = = = = = = = = = = = = = = = = = = = = = =  */}

      <div className="overflow-x-auto p-10">
  <table className="w-4/5 divide-y-2 divide-gray-700 bg-gray-800 text-sm text-white">
    <thead>
      <tr>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-300 text-left">Metric</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-300 text-left">Value</th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-700">
    <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-300">Subject</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-400">{subject}</td>
      </tr>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-300">Total Required for 75%</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-400">{Math.ceil(NoOfDaysToAttend)}</td>
      </tr>

      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-300">Classes Attended</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-400">{NoOfDaysAttended}</td>
      </tr>

      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-300">Remaining Classes</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-400">{RemaningClassesToAttend}</td>
      </tr>
    </tbody>
  </table>
</div>


<div className="flex flex-col items-center p-6 text-white">

    <h1 className="text-3xl font-medium text-white mt-5">
        Select {RemaningClassesToAttend} Future Classes
    </h1>



    {/* = = = = = = = = = = = = = = = = = = = = = = 2.5.2 FUTURE CLASSES SECTION = = = = = = = = = = = = = = = = = = = = = = =  */}

    <div className="w-full gap-12 flex flex-wrap justify-evenly align-center gap-4 mb-6 p-5">
        {FutureClasses.map((ele, index) => {
            const isDisabled =
                NoOfTrue >= RemaningClassesToAttend && !SelectedClasses[ele];
            return (
                <div
                    key={index}
                    onClick={() => !isDisabled && handleClassClick(ele)}
                    className={`cursor-pointer w-24 h-32 flex flex-col items-center justify-center rounded-lg shadow-lg text-center ${
                        SelectedClasses[ele]
                            ? "bg-green-600 text-white"
                            : isDisabled
                            ? "bg-gray-700 text-gray-500 opacity-60 cursor-not-allowed"
                            : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                >
                    {/* Header for the day */}
                    <div
                        className={`w-full py-1 rounded-t-lg text-sm font-bold ${
                            SelectedClasses[ele] ? "bg-green-700" : "bg-tomato"
                        }`}
                    >
                        {ele.toLocaleDateString("default", { weekday: "long" })}
                    </div>

                    {/* Date */}
                    <div className="flex-1 flex items-center justify-center text-4xl font-bold">
                        {ele.getDate()}
                    </div>

                    {/* Month */}
                    <div className="text-sm font-semibold">
                        {ele.toLocaleDateString("default", { month: "long" })}
                    </div>
                </div>
            );
        })}
    </div>
    {/* = = = = = = = = = = = = = = = = = = = = = = 2.5.3 DOWNLOAD SECTION = = = = = = = = = = = = = = = = = = = = = = =  */}

    {NoOfTrue === RemaningClassesToAttend && (
        <button
            onClick={generatePDF}
            className="fixed bottom-4 right-4 px-6 py-3 rounded-full font-bold text-black bg-white border-2 border-black hover:bg-gray-100 shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center gap-2"
        >
            <span>😃</span> Download Selected Classes
        </button>
    )}
</div>

    </>
  );
}
