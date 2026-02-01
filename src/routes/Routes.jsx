import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../LayOut/AppLayout";
import HomePageBeforeLogin from "../Pages/HomePageBeforeLogin/HomePageBeforeLogin";
import AddCodePAge from "../Pages/Authentication/AddCodePAge";
import ResetPassPage from "../Pages/Authentication/ResetPassPage";
import ForgetPassPage from "../Pages/Authentication/ForgetPassPage";
import SignUpPage from "../Pages/Authentication/SignUpPage";
import LoginPage from "../Pages/Authentication/LoginPage";
import HomePageAfterLogin from "../Pages/HomePageAfterLogin/HomePageAfterLogin";
import AboutPage from "../Pages/HomePageAfterLogin/AboutPage";
import ProfilePage from "../Pages/HomePageAfterLogin/ProfilePage";

export const Router = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                index: true,
                element: <HomePageBeforeLogin/>
            },
            {
                path:"/home_login",
                element:<HomePageAfterLogin/>
            },
            {
                path:"/login",
                element:<LoginPage/>
            },
            {
                path:"/signup",
                element:<SignUpPage/>
            },
            {
                path:"/forget_pass",
                element:<ForgetPassPage/>
            },
            {
                path:"/reset_pass",
                element:<ResetPassPage/>
            },
            {
                path:"/add_code",
                element:<AddCodePAge/>
            },
            {
                path:"/about",
                element:<AboutPage/>
            }
            ,
            {
                path:"/profile",
                element:<ProfilePage/>
            },
            
            
        ]
    }
])