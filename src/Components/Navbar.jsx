import React, { useState } from "react";
import { NavLinks } from "../data/NavLinks";
import { NavLink, useNavigate, Link } from "react-router";
import forgotImg from "../assets/book-bookmark 1.png";
import { useAuthStore } from "../store";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuthStore();
  const [open, setOpen] = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);
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
          <Link to="/" className="flex gap-2 items-center">
            <img src={forgotImg} className="w-7" alt="" />
            <h1>Book Shop</h1>
          </Link>
        </div>
        <span>|</span>

       <nav className="hidden md:flex gap-6">
          {NavLinks.map((link, index) => {
            if (link.children) {
              return(
                <div key={index} className="relative group">
                  <button className="flex items-center gap-2 hover:text-[#D9176C]" >
                    {link.name}
                  <span className="text-xs transition-transform duration-200 group-hover:rotate-180">▼</span>
                  </button>
                  <ul className="absolute left-0 top-full mt-2 w-44 rounded-lg bg-white text-black shadow-lg opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 overflow-hidden">
                    {link.children.map((child,index) =>(
                      <li key={index} className="px-4 py-2 hover:bg-gray-100">
                        <NavLink to={child.path}
                          className="block px-4 py-2 text-sm hover:bg-pink-50 hover:text-[#D9176C]"
                          >
                            {child.name}
                          </NavLink>
                      </li>
                    ))}
                    
                  </ul>
                </div>
              )
            }
            return (
              <NavLink 
                key={index}
                to={link.path}
                className={({ isActive }) => `hover:text-[#D9176C] ${isActive ? "text-[#D9176C]" : ""}`} >
                {link.name}
              </NavLink>
            )
          }) }
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
      {/* Mobile right */}
      <div className="flex md:hidden items-center gap-4">
        {isAuthenticated && (
          <img
            src="https://images.pexels.com/photos/3756941/pexels-photo-3756941.jpeg?_gl=1*boo9vf*_ga*MTc2Mzk3MjY4LjE3NjcxNDUwMTQ.*_ga_8JE65Q40S6*czE3NzAwNTYyNzMkbzEyJGcxJHQxNzcwMDU2MjkxJGo0MiRsMCRoMA.."
            className="w-8 h-8 rounded-full object-cover cursor-pointer"
            alt=""
          />
        )}

        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-20 right-10 left-5 bg-white rounded-lg shadow p-4 flex flex-col gap-4">
          {NavLinks.map((link, index) => {
            
            if (link.children?.length) {
              return (
                <div key={index} className="flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => setMobilePagesOpen((p) => !p)}
                    className="flex items-center justify-between text-black hover:text-[#D9176C]"
                  >
                    <span className="font-semibold">{link.name}</span>
                    <span
                      className={`transition-transform ${
                        mobilePagesOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▾
                    </span>
                  </button>

                  {mobilePagesOpen && (
                    <div className="ml-3 flex flex-col gap-2 border-l border-gray-200 pl-3">
                      {link.children.map((child, i) => (
                        <NavLink
                          key={i}
                          to={child.path}
                          onClick={() => {
                            setOpen(false);
                            setMobilePagesOpen(false);
                          }}
                          className={({ isActive }) =>
                            `${
                              isActive
                                ? "text-[#D9176C] font-bold"
                                : "text-black"
                            } hover:text-[#D9176C]`
                          }
                        >
                          {child.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            
            return (
              <NavLink
                key={index}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `hover:text-[#D9176C] ${
                    isActive ? "text-[#D9176C] font-bold" : "text-black"
                  }`
                }
              >
                {link.name}
              </NavLink>
            );
          })}

          <button
            onClick={() => {
              handleAuth();
              setOpen(false);
            }}
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