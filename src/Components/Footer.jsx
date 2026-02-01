import React from "react";
import forgotImg from "../assets/book-bookmark 1.png";
import { Link } from "react-router";
import { NavLinks } from "../data/NavLinks";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { IoEarthSharp } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="w-full bg-[#3B2F4A] py-20 ">
      <div className="container_footer w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-white">
          {/* Left: Logo + Links */}
          <div className="flex flex-col md:flex-row md:items-center gap-5">
            <div className="flex items-center gap-2">
              <img src={forgotImg} className="w-7" alt="logo" />
              <span className="font-bold">Bookshop</span>
            </div>

            <nav className="flex items-center gap-6 font-medium flex-wrap">
              {NavLinks.map((link, index) => (
                <Link key={index} to={link.path} className="hover:text-[#D9176C]">
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          {/* {NavBAr} */}
          <div className="Right_Icons flex items-center gap-4 md:justify-end">
            <Link to="https://www.facebook.com/">
              <FaFacebook size={24} color="#1877F2" />
            </Link>
            <Link to="https://www.instagram.com/">
              <RiInstagramLine size={24} color="#E1306C" />
            </Link>
            <Link to="https://www.youtube.com/">
              <FaYoutube size={24} color="#FF0000" />
            </Link>
            <Link to="https://twitter.com/">
              <FaXTwitter size={24} color="#1DA1F2" />
            </Link>
          </div>
        </div>
        {/* Bottom Row */}
          <hr className="my-6 border-white/25 w-full" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4  ">
            <p className="text-white text-sm sm:text-base text-center sm:text-left">
              Developed by EraaSoft All Copy Rights Reserved @2024
            </p>
            <div className="flex items-center gap-3 sm:justify-end">
              <Link to="https://www.google.com/">
                <IoEarthSharp color="white" size={30} />
              </Link>
              <p className="px-4 py-2 border border-white/30 text-white/80 rounded-2xl hover:bg-white/10 transition flex items-center gap-2">
                English ︿
              </p>
            </div>
          
        </div>
      </div>
    </footer>
  );
}
// import React from "react";
// import forgotImg from "../assets/book-bookmark 1.png";
// import { Link } from "react-router-dom";
// import { NavLinks } from "../data/NavLinks";
// import { FaFacebook, FaYoutube } from "react-icons/fa";
// import { RiInstagramLine } from "react-icons/ri";
// import { FaXTwitter } from "react-icons/fa6";
// import { IoEarthSharp } from "react-icons/io5";

// export default function Footer() {
//   return (
//     <footer className="w-full bg-[#3B2F4A] py-10">
//       {/* Container زي Figma */}
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Top Row */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-white">
//           {/* Left: Logo + Links */}
          // <div className="flex flex-col md:flex-row md:items-center gap-5">
          //   <div className="flex items-center gap-2">
          //     <img src={forgotImg} className="w-7" alt="logo" />
          //     <span className="font-bold">Bookshop</span>
          //   </div>

          //   <nav className="flex items-center gap-6 font-medium flex-wrap">
          //     {NavLinks.map((link, index) => (
          //       <Link key={index} to={link.path} className="hover:text-[#D9176C]">
          //         {link.name}
          //       </Link>
          //     ))}
          //   </nav>
          // </div>

//           {/* Right: Social */}
//           <div className="flex items-center gap-4 md:justify-end">
//             <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
//               <FaFacebook size={20} />
//             </a>
//             <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
//               <RiInstagramLine size={20} />
//             </a>
//             <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
//               <FaYoutube size={20} />
//             </a>
//             <a href="https://twitter.com/" target="_blank" rel="noreferrer">
//               <FaXTwitter size={20} />
//             </a>
//           </div>
//         </div>

//         {/* HR */}
//         <hr className="my-6 border-white/25" />

//         {/* Bottom Row */}
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//           <p className="text-white/80 text-sm">
//             Developed By EraaSoft &lt;All Copy Rights Reserved&gt; ©2024
//           </p>

//           <div className="flex items-center gap-3 sm:justify-end">
//             <a href="https://www.google.com/" target="_blank" rel="noreferrer">
//               <IoEarthSharp color="white" size={22} />
//             </a>

//             <button className="px-4 py-2 border border-white/30 text-white/80 rounded-2xl hover:bg-white/10 transition flex items-center gap-2">
//               English <span className="text-xs">›</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
