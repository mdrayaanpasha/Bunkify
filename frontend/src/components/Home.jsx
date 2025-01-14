import flexCover from "../assets/imgs/cover-home.jpeg";
import Card1 from "../assets/imgs/home-card-1.jpeg";
import Card2 from "../assets/imgs/car2.jpeg";
import Card3 from "../assets/imgs/home-card-3.jpeg";
import Nav from "./nav";

function Home() {
    return (
        <>
            <main>
                <Nav />
                <section className="hero">
                    <div className="other p-10 mt-10">
                        {/* Gradient Heading */}
                        <h1 className="text-transparent bg-gradient-to-r from-pink-300 via-blue-300 to-green-300 font-normal bg-clip-text text-3xl sm:text-4xl sm:m-2 md:text-5xl lg:text-4xl">
    Get 75% Attendance With Math.
</h1>
<h1 className="text-white text-lg sm:text-xl md:text-2xl mt-2 sm:mt-3 md:mt-4">
    Unlock The 75% Achievement Now!
</h1>

                    </div>

                    <div className="hero-a flex flex-col items-center justify-center pb-10 px-10 ">
    <div className="flex flex-col sm:flex-row items-center justify-between bg-lightBlack w-full sm:w-9/10 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
        <img className="w-1/2 sm:w-4/5 sm:h-96 object-cover rounded-xl mb-4 sm:mb-0" src={flexCover} alt="Cover for home section" />
        <div className="pl-0 sm:pl-12 mt-4 sm:mt-0">
            <h1 className="text-white text-2xl sm:text-3xl font-semibold">Course Demos</h1>
            <p className="text-gray-400 text-base sm:text-lg mt-2">Try experimental demos featuring all courses from SJU, covering every school.</p>
            <button className="mt-4 px-8 py-3 bg-black text-white rounded-full font-bold shadow-md hover:shadow-xl transition duration-300 ease-in-out flex items-center justify-center" onClick={e=>window.location.href="./form"}>
                Try it
                <svg className="inline-block ml-3" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="currentColor">
                    <path d="m15.95 9.465-8.193 8.192a1 1 0 1 1-1.414-1.414l8.192-8.193H9.878a1 1 0 1 1 0-2h7.072a1 1 0 0 1 1 1v7.071a1 1 0 1 1-2 0V9.465z"></path>
                </svg>
            </button>
        </div>
    </div>
</div>

                </section>
                
                {/* Card Section */}
                <section className="container flex flex-wrap justify-center gap-8 mb-20 p-10">
    <div className="container-card bg-lightBlack sm:w-[97vw] lg:w-[28rem] p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center">
        <img className="h-60 w-full object-cover rounded-xl mb-4" src={Card1} alt="" />
        <h2 className="text-white text-2xl font-semibold mt-4">How This Works?</h2>
        <p className="text-gray-400 mt-2">Understand how the math & code works, to trust the product.</p>
        <h5 className="text-transparent bg-gradient-to-r from-pink-300 via-blue-300 to-green-300 bg-clip-text mt-4 text-xl font-normal">Unlock Potential</h5>
        <button className="mt-4 px-8 py-3 bg-black text-white rounded-xl font-semibold shadow-md hover:shadow-xl transition duration-300 ease-in-out flex items-center justify-center" onClick={e=>window.location.href="./how"}>
            Check Out!
            <svg className="inline-block ml-2" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="currentColor">
                <path d="m15.95 9.465-8.193 8.192a1 1 0 1 1-1.414-1.414l8.192-8.193H9.878a1 1 0 1 1 0-2h7.072a1 1 0 0 1 1 1v7.071a1 1 0 1 1-2 0V9.465z"></path>
            </svg>
        </button>
    </div>

    <div className="container-card bg-lightBlack sm:w-[97vw] lg:w-[28rem] p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center">
        <img className="h-60 w-full object-cover rounded-xl mb-4" src={Card3} alt="" />
        <h2 className="text-white text-2xl font-semibold mt-4">Report a Problem</h2>
        <p className="text-gray-400 mt-4">Encounter any issues? Let us know and we'll help you solve them as quickly as possible.</p>
        <h5 className="text-transparent bg-gradient-to-r from-pink-300 via-blue-300 to-green-300 bg-clip-text mt-4 text-xl font-normal">Get Help Now</h5>
        <button className="mt-4 px-8 py-3 bg-black text-white rounded-xl font-semibold shadow-md hover:shadow-xl transition duration-300 ease-in-out flex items-center justify-center" onClick={(e) => window.location.href = "https://forms.gle/euRjYFhVKvvj2rxg6"}>
            Report Now
            <svg className="inline-block ml-2" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="currentColor">
                <path d="m15.95 9.465-8.193 8.192a1 1 0 1 1-1.414-1.414l8.192-8.193H9.878a1 1 0 1 1 0-2h7.072a1 1 0 0 1 1 1v7.071a1 1 0 1 1-2 0V9.465z"></path>
            </svg>
        </button>
    </div>

    <div className="container-card bg-lightBlack sm:w-full lg:w-[28rem] p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center">
        <img className="h-60 w-full object-cover rounded-xl mb-4" src={Card2} alt="" />
        <h2 className="text-white text-2xl font-semibold mt-4">Meet Our Team</h2>
        <p className="text-gray-400 mt-4">We're a dedicated team solving Attendance Problem.</p>
        <h5 className="text-transparent bg-gradient-to-r from-pink-300 via-blue-300 to-green-300 bg-clip-text mt-4 text-xl font-normal">Get to Know Us</h5>
        <button className="mt-4 px-8 py-3 bg-black text-white rounded-xl font-semibold shadow-md hover:shadow-xl transition duration-300 ease-in-out flex items-center justify-center" onClick={e=>window.location.href="./about"}>
            Learn More!
            <svg className="inline-block ml-2" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="currentColor">
                <path d="m15.95 9.465-8.193 8.192a1 1 0 1 1-1.414-1.414l8.192-8.193H9.878a1 1 0 1 1 0-2h7.072a1 1 0 0 1 1 1v7.071a1 1 0 1 1-2 0V9.465z"></path>
            </svg>
        </button>
    </div>
</section>

            </main>
        </>
    );
}

export default Home;
