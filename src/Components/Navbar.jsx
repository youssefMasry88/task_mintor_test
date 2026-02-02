import React, { useState } from "react";
import { NavLinks } from "../data/NavLinks";
import { Link, useNavigate } from "react-router";
import forgotImg from "../assets/book-bookmark 1.png";
import { useAuthStore } from "../store";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuthStore();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleAuth = () => {
    if (isAuthenticated) {
      logout();
      navigate("/"); 
    } else {
      navigate("/login"); 
    }
  };
  return (
    <header className="w-full px-[3em] py-6 bg-white/20 flex z-50 justify-between items-center fixed text-white font-bold">
      <div className="flex items-center gap-2">
       <div className="flex">
         <Link to="/" className="flex gap-2 items-center"><img src={forgotImg} className="w-7" alt="" />
        <h1>Book Shop</h1>
        </Link>
       </div>
        <span>|</span>

        <nav className="hidden md:flex gap-6">
          {NavLinks.map((link, index) => (
            <Link key={index} to={link.path} className="hover:text-[#D9176C]">
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

<div className="hidden md:flex items-center gap-4">
  {!isAuthenticated ? (
    <>
    {/* if logOut use this */}
      <button
        onClick={handleAuth}
        className="px-4 py-2.5 bg-[#D9176C] rounded-md text-white border border-[#D9176C] hover:bg-white hover:text-[#D9176C]"
      >
        Login
      </button>

      <Link to="/signup">
        <button className="px-4 py-2.5 bg-white rounded-md border border-[#D9176C] text-[#D9176C] hover:bg-[#B71059] hover:text-white hover:border-white">
          Sign Up
        </button>
      </Link>
    </>
  ) : (
    <>
    {/* if logIn use this */}
      {/* Wishlist */}
      <button className="relative text-xl">
        ❤️
        <span className="absolute -top-2 -right-2 bg-[#D9176C] text-white text-xs rounded-full px-1">
          12
        </span>
      </button>

      {/* Cart */}
      <button className="relative text-xl">
        🛒
        <span className="absolute -top-2 -right-2 bg-[#D9176C] text-white text-xs rounded-full px-1">
          10
        </span>
      </button>

      {/* User */}
      <div className="flex items-center gap-2">
        <img
          src="https://images.pexels.com/photos/3756941/pexels-photo-3756941.jpeg?_gl=1*boo9vf*_ga*MTc2Mzk3MjY4LjE3NjcxNDUwMTQ.*_ga_8JE65Q40S6*czE3NzAwNTYyNzMkbzEyJGcxJHQxNzcwMDU2MjkxJGo0MiRsMCRoMA.."
          className="w-8 h-8 rounded-full object-cover"
          alt=""
        />
        <div className="leading-4">
          <p className="text-sm font-semibold">John Smith</p>
          <p className="text-xs text-white/70">johnsmith@gmail.com</p>
        </div>
      </div>

      {/* Logout */}
      <button
        onClick={handleAuth}
        className="px-4 py-2 bg-[#D9176C] rounded-md text-white border border-[#D9176C] hover:bg-white hover:text-[#D9176C]"
      >
        Logout
      </button>
    </>
  )}
</div>

{/* Mobile Nav */}


<div className=" flex md:hidden items-center gap-4">
{!isAuthenticated ? (
  <>
      <div className="hidden items-center gap-2 pl-20">
        <img
          src="https://images.pexels.com/photos/3756941/pexels-photo-3756941.jpeg?_gl=1*boo9vf*_ga*MTc2Mzk3MjY4LjE3NjcxNDUwMTQ.*_ga_8JE65Q40S6*czE3NzAwNTYyNzMkbzEyJGcxJHQxNzcwMDU2MjkxJGo0MiRsMCRoMA.."
          className="w-8 h-8 rounded-full object-cover cursor-pointer"
          alt=""
        />
      </div>
      </>
      ) : (
        <>
        <div className="md:hidden items-center gap-2 pl-20">
        <img
          src="https://images.pexels.com/photos/3756941/pexels-photo-3756941.jpeg?_gl=1*boo9vf*_ga*MTc2Mzk3MjY4LjE3NjcxNDUwMTQ.*_ga_8JE65Q40S6*czE3NzAwNTYyNzMkbzEyJGcxJHQxNzcwMDU2MjkxJGo0MiRsMCRoMA.."
          className="w-8 h-8 rounded-full object-cover cursor-pointer"
          alt=""
        />
      </div>
      </>
      )}
      </div>
      <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
        ☰
      </button>

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

          <button
            onClick={handleAuth}
            className="w-full py-2 rounded-md bg-[#D9176C] text-white"
          >
            {isAuthenticated ? "Logout" : "Login"}
          </button>

          {!isAuthenticated && (
            <Link to="/signup" onClick={() => setOpen(false)}>
              <button className="w-full py-2 rounded-md bg-white text-[#D9176C] border border-[#D9176C]">
                Sign Up
              </button>
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
