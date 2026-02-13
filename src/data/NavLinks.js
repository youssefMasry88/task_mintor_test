import AboutPage from "../Pages/HomePageAfterLogin/AboutPage";

export const NavLinks = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/Books",
    name: "Books",
  },
  {
    path: "/About",
    name: "About Us",
  },
  {
    name: "pages    ",
    path: "#",
    children: [
      { name: "SinglePage", path: "/SinglePage" },
      { name: "wishlist", path: "/wishlist" },
      { name: "myCart", path: "/myCart" },
      { name: "Checkout", path: "/Checkout" },
      { name: "History", path: "/History" },
    ],
  },
];
