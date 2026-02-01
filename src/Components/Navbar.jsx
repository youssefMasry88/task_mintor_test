import React, {    useState } from "react";
import { NavLinks } from "../data/NavLinks";
import { Link} from "react-router";
import forgotImg from "../assets/book-bookmark 1.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <header className="w-full px-[3em] py-6 bg-white/20 flex z-50 justify-between items-center fixed text-white font-bold  ">
        <div className="flex items-center gap-2">
          <img src={forgotImg} className="w-7" alt="" />
          <h1>Book Shop</h1>
          <span>|</span>
          <nav className="hidden md:flex gap-6 ">
            {NavLinks.map((link, index) => (
              <Link key={index} to={link.path} className="hover:text-[#D9176C]">
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="btn hidden md:flex items-center gap-2">
          <Link to="/login" onClick={() => setOpen(false)}>
            <button className="px-4 py-2.5 text-center bg-[#D9176C] rounded-md text-white border border-[#D9176C] hover:bg-white hover:text-[#D9176C] hover:border-[#D9176C]">
              {" "}
              Login
            </button>
          </Link>
          <Link to="/signup" onClick={() => setOpen(false)}>
            <button className="px-4 py-2.5 text-center bg-white rounded-md border border-[#D9176C] text-[#D9176C] hover:bg-[#B71059] hover:text-white hover:border-white">
              {" "}
              Sign Up
            </button>
          </Link>
        </div>
        {/* Mobile Menu */}
        <button className="md:hidden text-3xl " onClick={() => setOpen(!open)}>☰</button>
      {open && (
        <div className="md:hidden absolute top-20 right-10 left-5 bg-white rounded-lg shadow p-4 flex flex-col gap-4">
          {NavLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setOpen(false)}
              className="text-black hover:text-[#D9176C]"
            >
              {link.name}
            </Link>
          ))}

          <Link to="/login" onClick={() => setOpen(false)}>
            <button className="w-full py-2 rounded-md bg-[#D9176C] text-white">
              Login
            </button>
          </Link>

          <Link to="/signup" onClick={() => setOpen(false)}>
            <button className="w-full py-2 rounded-md bg-white text-[#D9176C] border border-[#D9176C]">
              Sign Up
            </button>
          </Link>
        </div>
      )}
      </header>
    </div>
  );
}

// import React, { useState } from "react";
// import { NavLinks } from "../data/NavLinks";
// import { Link } from "react-router-dom";
// import forgotImg from "../assets/book-bookmark 1.png";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="w-full px-[3em] py-6 bg-white/20 flex justify-between items-center fixed text-white font-bold">
//       <div className="flex items-center gap-2">
//         <img src={forgotImg} className="w-7" alt="" />
//         <h1>Book Shop</h1>
//         <span>|</span>
//         <nav className="hidden md:flex gap-6 ">
//           {NavLinks.map((link, index) => (
//             <Link key={index} to={link.path} className="hover:text-[#D9176C]">
//               {link.name}
//             </Link>
//           ))}
//         </nav>
//       </div>
//       <div className="btn hidden md:flex items-center gap-2">
//         <Link to="/login" onClick={() => setOpen(false)}>
//           <button className="px-4 py-2.5 text-center bg-[#D9176C] rounded-md text-white border border-[#D9176C] hover:bg-white hover:text-[#D9176C] hover:border-[#D9176C]">
//             {" "}
//             Login
//           </button>
//         </Link>
//         <Link to="/signup" onClick={() => setOpen(false)}>
//           <button className="px-4 py-2.5 text-center bg-white rounded-md border border-[#D9176C] text-[#D9176C] hover:bg-[#B71059] hover:text-white hover:border-white">
//             {" "}
//             Sign Up
//           </button>
//         </Link>
//       </div>
//       {/* ... Desktop stuff ... */}

//       <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
//         ☰
//       </button>

//       {open && (
//         <div className="md:hidden absolute top-20 right-4 left-4 bg-white rounded-lg shadow p-4 flex flex-col gap-4">
//           {NavLinks.map((link, index) => (
//             <Link
//               key={index}
//               to={link.path}
//               onClick={() => setOpen(false)}
//               className="text-black hover:text-[#D9176C]"
//             >
//               {link.name}
//             </Link>
//           ))}

//           <Link to="/login" onClick={() => setOpen(false)}>
//             <button className="w-full py-2 rounded-md bg-[#D9176C] text-white">
//               Login
//             </button>
//           </Link>

//           <Link to="/signup" onClick={() => setOpen(false)}>
//             <button className="w-full py-2 rounded-md bg-white text-[#D9176C] border border-[#D9176C]">
//               Sign Up
//             </button>
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// }
