import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../redux/usersApiSlice";
import { logout } from "../redux/authSlice";
import Button from "./Button";
import toast from "react-hot-toast";
import { Menu, X, LogOut } from "lucide-react";

import { linksData } from "../data/data";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      toast.success("Logged out");
      navigate("/");
    } catch (error) {
      toast.error("Oops some error!");
    }
  };

  return (
    <div className="w-full fixed bottom-0 left-0 z-[999]">
      <div className="w-full flex items-center justify-center text-gray-800  bg-gray-50  py-4 px-6">
        {userInfo && (
          <ul className="flex gap-5 md:gap-12 uppercase items-center  transition-all duration-500 ease-in">
            {linksData?.map((item, i) => (
              <Link
                key={i}
                to={item.url}
                className=" flex items-center flex-col gap-1 text-gray-800 hover:scale-105 duration-500"
              >
                <img src={item.iconUrl} alt={item.title} />
                <span className="text-sm tracking-wider font-bold text-gray-800 opacity-70 capitalize">
                  {item.title}
                </span>
              </Link>
            ))}

            <button
              className="flex items-center flex-col gap-2 text-sm tracking-wider font-bold text-gray-800 opacity-70  capitalize"
              onClick={logoutHandler}
            >
              <LogOut color="#444444" />
              Logout
            </button>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
