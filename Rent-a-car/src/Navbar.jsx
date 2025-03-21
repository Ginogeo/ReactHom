// import  { useState } from 'react';
// import { Menu, Car } from 'lucide-react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-gray-900 shadow-lg border-b border-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo */}
//           <div className="flex items-center">
//             <div className="flex items-center space-x-2 group">
//               <div className="bg-blue-500 bg-opacity-20 p-2 rounded-full group-hover:bg-opacity-30 transition-all duration-300">
//                 <Car className="h-5 w-5 text-blue-400" />
//               </div>
//               <span className="font-bold text-xl text-blue-300 group-hover:text-blue-200 transition-colors duration-300">Rentaride</span>
//             </div>
//           </div>

//           {/* Desktop navigation */}
//           <div className="hidden md:flex md:items-center">
//             <div className="flex space-x-4 mr-6">
//               <a href="#" className="text-gray-300 hover:bg-gray-800 hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200">Become a renter</a>
//               <a href="#" className="text-gray-300 hover:bg-gray-800 hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200">Rental deals</a>
//               <a href="#" className="text-gray-300 hover:bg-gray-800 hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200">Why choose us</a>
//               <a href="#" className="text-gray-300 hover:bg-gray-800 hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200">Testimonials</a>
//             </div>
//             <div className="flex items-center space-x-3 ml-4 border-l border-gray-700 pl-4">
//               <a href="#" className="text-blue-300 hover:text-blue-200 px-4 py-2 text-sm font-medium transition-all duration-200 hover:underline">Sign up</a>
//               <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg">Sign in</a>
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={toggleMenu}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//               aria-expanded="false"
//             >
//               <Menu className="h-6 w-6" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu, show/hide based on menu state */}
//       {isMenuOpen && (
//         <div className="md:hidden border-t border-gray-700">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <a href="#" className="text-gray-300 hover:bg-gray-800 hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200">Become a renter</a>
//             <a href="#" className="text-gray-300 hover:bg-gray-800 hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200">Rental deals</a>
//             <a href="#" className="text-gray-300 hover:bg-gray-800 hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200">Why choose us</a>
//             <a href="#" className="text-gray-300 hover:bg-gray-800 hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200">Testimonials</a>
//           </div>
//           <div className="pt-4 pb-3 border-t border-gray-700 bg-gray-800 bg-opacity-50">
//             <div className="flex items-center justify-center space-x-4 px-5 py-3">
//               <a href="#" className="text-blue-300 hover:text-blue-200 px-4 py-2 text-base font-medium transition-all duration-200 hover:underline">Sign up</a>
//               <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-base font-medium transition-all duration-200 shadow-md hover:shadow-lg">Sign in</a>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
"use client";
import React from "react";

const NavBar = () => {
  const navItems = [
    "Become a renter",
    "Rental deals",
    "Why choose us",
    "Testimonials",
  ];

  return (
    <header className="flex justify-between items-center px-40 py-5 bg-slate-950 max-md:p-10 max-sm:p-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c443c00c830c27fd984f0076c21a899726fbf029"
        alt="Logo"
        className="rounded-md border border-black border-solid h-[42px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-[155px]"
      />

      <nav className="flex gap-10 max-sm:hidden">
        {navItems.map((item) => (
          <button
            key={item}
            className="text-base text-white cursor-pointer hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            aria-label={item}
          >
            {item}
          </button>
        ))}
      </nav>

      <div className="flex gap-4 items-center max-sm:gap-2">
        <button
          className="text-base text-white cursor-pointer hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          aria-label="Sign up"
        >
          Sign up
        </button>
        <button
          className="px-8 py-4 text-base text-white rounded-lg cursor-pointer bg-zinc-500 hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          aria-label="Sign in"
        >
          Sign in
        </button>
      </div>
    </header>
  );
};

export default NavBar;
