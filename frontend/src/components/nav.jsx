import React, { useState } from 'react';

function Nav() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  return (
    <>
    <style>
        {`
                   @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
 body {
                    background-color: black !important;
                    color: white !important;
                    font-family:'Poppins',sans;
            }
        `}
    </style>
      <nav className="flex items-center justify-between p-4 mt-2 bg-black text-white font-poppins">
        {/* Logo Section */}
        <h2 className="text-2xl font-extrabold text-white ">
          <a href="/">Bunkify</a>
        </h2>

        {/* Navigation Links */}
        <ul className="hidden sm:flex items-center gap-4">
          <li className="list-none bg-white text-black rounded-full px-4 py-2 hover:bg-gray-200">
            <a href="/form">Try Now</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="block sm:hidden w-12 h-12 text-2xl bg-white border border-gray-800 rounded-full text-black"
          onClick={openDialog}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Dialog */}
      {dialogOpen && (
        <div
          id="myDialog"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <div className="bg-white bg-opacity-20 rounded-lg shadow-md backdrop-blur-sm p-8 text-black w-full max-w-md">
            <h1 className="text-xl font-semibold mb-4 text-center">
              Navigation Menu
            </h1>
            <ul className="flex flex-col items-center gap-4">
              <li className="list-none bg-white text-black rounded-full px-4 py-2 hover:bg-gray-200 w-full text-center">
                <a href="/form">Try Now</a>
              </li>
            </ul>
            <div className="flex justify-end mt-6">
              <button
                onClick={closeDialog}
                className="px-6 py-2 rounded-md bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
