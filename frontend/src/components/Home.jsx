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
      
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-black text-white mt-10">
  <div className="absolute inset-0 bg-black opacity-60"></div>
  <div className="relative z-10 flex flex-col items-center justify-center text-center px-8">
    <h1 className="text-3xl font-semibold mb-4 text-white">
    Get 75% Attendance With Math    </h1>
    <button className="mt-4 px-8 py-3 bg-white text-black mb-10 rounded-xl font-semibold shadow-md hover:shadow-xl transition duration-300 ease-in-out flex items-center justify-center" onClick={e=>window.location.href="/form"}>
            Try Now 
            <svg className="inline-block ml-2" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="currentColor">
                <path d="m15.95 9.465-8.193 8.192a1 1 0 1 1-1.414-1.414l8.192-8.193H9.878a1 1 0 1 1 0-2h7.072a1 1 0 0 1 1 1v7.071a1 1 0 1 1-2 0V9.465z"></path>
            </svg>
        </button>
    <img 
      src={flexCover} 
      alt="Bunkify Overview" 
      className="rounded-lg shadow-lg w-full max-w-[80vw] h-[55vh] object-cover" 
    />
  </div>
</section>

                
                {/* Card Section */}
                <section className="container flex flex-wrap justify-center gap-8 mb-20 p-10 mt-10">
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
