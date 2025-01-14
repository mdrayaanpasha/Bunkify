import Nav from "./nav";
import HowImg from "../assets/imgs/home-card-1.jpeg";

function How() {
    return (
        <>
            <Nav />
            <div className="hero flex flex-col md:flex-row items-center justify-between p-8 md:px-16 py-12 rounded-lg shadow-xl">
                <div className="hero-des w-full md:w-1/2 space-y-4 md:space-y-6 mr-5">
                    <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight tracking-wide">
                        Know How TrackAtt Works!
                    </h1>
                    <h2 className="text-xl md:text-2xl text-white opacity-90">
                        Understand the Math & Code Behind TrackAtt to Trust the Algorithm and Hit 75%.
                    </h2>
                </div>
                <div className="hero-img mt-8 md:mt-0 flex justify-center w-full md:w-1/2">
                    <img
                        className="rounded-lg shadow-2xl w-full object-cover h-[400px] md:h-[600px]"
                        src={HowImg}
                        alt="TrackAtt Overview"
                    />
                </div>
            </div>

            <div className="how mt-12 md:mt-20 p-6 md:p-12 text-white shadow-lg rounded-lg mx-8 md:mx-16">
                <h1 className="text-3xl md:text-4xl font-semibold ">How it Works?</h1>
                <p className="mt-4 ">We know, classes can be dull, but attendance matters! Here's a simple tool to stay on track.</p>

                <ul className="mt-6 space-y-6 pl-5">
                    <li>
                        <h3 className="text-xl font-semibold">Step 1: Enter Attendance</h3>
                        <p className="">Be honest. How many classes have you actually attended?</p>
                    </li>

                    <li>
                        <h3 className="text-xl  font-semibold">Step 2: Aim for 75% Attendance</h3>
                        <p className="">Set your goal: 75% attendance – like getting a C+ in life!</p>
                    </li>
                    <li>
                        <h3 className="text-xl  font-semibold">Step 3: The Math Behind It</h3>
                        <ol className="list-decimal pl-5  space-y-2">
                            <li>Count the total classes.</li>
                            <li>Calculate the classes needed for 75% attendance.</li>
                            <li>See your attended classes so far.</li>
                            <li>Figure out how many more you need.</li>
                        </ol>
                    </li>
                </ul>
            </div>

            <div className="algorithm mt-12 md:mt-20 mx-8 md:mx-16">
                <h1 className="text-3xl md:text-4xl font-semibold text-white">Algorithm!</h1>
                <div className="code mt-6 p-6 bg-lightBlack rounded-lg shadow-lg">
                    <pre className="text-sm text-gray-200 overflow-x-auto">
{`const generateRemainingClasses = (startDate, endDate, holidays, classSchedule, attendancePercentage) => {
  // 1. Generate all days excluding weekends and holidays
  const generateDays = (startDate, endDate, holidays) => {
    const days = [];
    let currentDate = new Date(startDate);
    const end = new Date(endDate);

    while (currentDate <= end) {
      let isHoliday = holidays.some(holiday => holiday.getTime() === currentDate.getTime());
      if (currentDate.getDay() !== 0 && !isHoliday) { // Exclude Sundays (0)
        days.push(new Date(currentDate));
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return days;
  };

  // 2. Filter days based on subject's schedule
  const filterSubjectDays = (allDays, subjectDays) => {
    const daysOfSubject = [];
    const futureClasses = [];
    const today = new Date();

    allDays.forEach(date => {
      const dayName = date.toLocaleString('en-US', { weekday: 'long' }).toLowerCase();
      if (subjectDays.includes(dayName)) {
        daysOfSubject.push(date);
        if (date > today) futureClasses.push(date); // Future classes
      }
    });

    return { daysOfSubject, futureClasses };
  };

  // 3. Calculate the total classes to attend for 80% attendance
  const calculateAttendance = (daysOfSubject, attendedClasses, percentage) => {
    const totalDays = daysOfSubject.length;
    const totalRequired = totalDays * 0.8; // 80% attendance
    const attendedRequired = attendedClasses * (percentage / 100);

    return Math.ceil(totalRequired - attendedRequired); // Remaining classes to attend
  };

  // Execution:
  const allDays = generateDays(startDate, endDate, holidays);
  const { daysOfSubject, futureClasses } = filterSubjectDays(allDays, classSchedule);
  const attendedClasses = Math.floor(allDays.filter(date => date < new Date()).length * (attendancePercentage / 100));

  return calculateAttendance(daysOfSubject, attendedClasses, attendancePercentage);
};
`}
                    </pre>
                </div>
            </div>

            <div className="sourceCode mt-12 mx-8 md:mx-16 bg-lightBlack p-8 rounded-lg shadow-xl flex flex-col items-center gap-8">
                <h1 className="text-3xl md:text-4xl font-semibold text-white">Play With Code:</h1>
                <a href="" className="btn text-white bg-teal-500 hover:bg-teal-600 py-3 px-6 rounded-xl flex items-center gap-2 transform hover:scale-105 transition duration-200">
                    Source code
                    <svg viewBox="0 0 24 24" fill="currentColor" width="1.5em" height="1.5em" className="transform -rotate-45">
                        <g clipPath="url(#a)">
                            <path d="m15.95 9.465-8.193 8.192a1 1 0 1 1-1.414-1.414l8.192-8.193H9.878a1 1 0 1 1 0-2h7.072a1 1 0 0 1 1 1v7.071a1 1 0 1 1-2 0V9.465z"></path>
                        </g>
                        <defs>
                            <clipPath>
                                <path d="M0 0H24V24H0z"></path>
                            </clipPath>
                        </defs>
                    </svg>
                </a>
            </div>
        </>
    );
}

export default How;
