import car2 from "../assets/imgs/car2.jpeg";
import Nav from "./nav";
import rayaan from "../assets/imgs/rayaan.png";
import mahesh from "../assets/imgs/mahesh.jpeg";
import Zakwan from "../assets/imgs/Zakwan.jpeg";
import john from "../assets/imgs/john.jpeg";

function About() {
  return (
    <>
      <Nav />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-black text-white mt-10">
  <div className="absolute inset-0 bg-black opacity-60"></div>
  <div className="relative z-10 flex flex-col items-center justify-center text-center px-8">
    <h1 className="text-5xl font-semibold mb-4 text-white">
      The Creation of Bunkify
    </h1>
    <p className="text-lg max-w-xl text-gray-400 mb-8">
      A simple, effective solution built by a group of BCA students at St. Joseph's University.
    </p>
    <img 
      src={car2} 
      alt="Bunkify Overview" 
      className="rounded-lg shadow-lg w-full max-w-[80vw] h-[55vh] object-cover" 
    />
  </div>
</section>


      {/* Meet Our Team Section */}
      <section className="py-16 bg-black">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold text-white mb-12">Meet Our Team</h2>
    <div className="flex flex-wrap justify-center gap-12">
      {/* Team Member 1 */}
      <div className="flex flex-col items-center">
        <img src={rayaan} alt="Mohammed Rayaan Pasha" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-700" />
        <h3 className="text-xl font-semibold text-white">Mohammed Rayaan Pasha</h3>
        <p className="text-sm text-gray-400">Lead, Frontend & Algorithm Developer</p>
      </div>
      {/* Team Member 2 */}
      <div className="flex flex-col items-center">
        <img src={john} alt="Johnnatan V" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-700" />
        <h3 className="text-xl font-semibold text-white">Johnnatan V</h3>
        <p className="text-sm text-gray-400">DB Team</p>
      </div>
      {/* Team Member 3 */}
      <div className="flex flex-col items-center">
        <img src={Zakwan} alt="Mohammed Zakwan" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-700" />
        <h3 className="text-xl font-semibold text-white">Mohammed Zakwan</h3>
        <p className="text-sm text-gray-400">DB Team</p>
      </div>
      {/* Team Member 4 */}
      <div className="flex flex-col items-center">
        <img src={mahesh} alt="Mahesh Khadayat" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-700" />
        <h3 className="text-xl font-semibold text-white">Mahesh Khadayat</h3>
        <p className="text-sm text-gray-400">DB Team</p>
      </div>
    </div>
  </div>
</section>


      {/* Bunkify Description */}
      <section className="bg-lightBlack py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">What is Bunkify?</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-6">
            We, a group of 1st year BCA students at St. Joseph's University, felt your pain—literally. Who needs social lives, right? So, we created Bunkify for the Elixir Event 2024, an innovative solution to make attendance tracking less of a headache. With Bunkify, you can finally say goodbye to manual tracking and hello to more free time (or let's be real, more time to catch up on lectures you slept through).
          </p>
          <a href="./few" className="inline-block bg-black text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300">
            Try Now
            <svg className="inline-block ml-2" viewBox="0 0 24 24" fill="currentColor" width="1.5em" height="1.5em">
              <path d="m15.95 9.465-8.193 8.192a1 1 0 1 1-1.414-1.414l8.192-8.193H9.878a1 1 0 1 1 0-2h7.072a1 1 0 0 1 1 1v7.071a1 1 0 1 1-2 0V9.465z"></path>
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}

export default About;
