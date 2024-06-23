import { React, useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
const Navbar = ({ search, setSearch,searchTask }) => {

  return (
    <>
      <nav className="bg-white flex justify-between p-5 items-center shadow-md ">
        <a href="">
          <h1 className=" font-bold text-3xl text-primary">Tasks </h1>
        </a>
        <form
          className=" hidden h-full w-1/4 md:flex items-center relative"
          onSubmit={searchTask}
        >
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search"
            className=" px-2 h-9 w-full rounded-lg bg-white border border-primary text-grey-700 focus:outline-sky-600 "
          />
          {search && (
            <RxCross2
              className="text-red-500 absolute right-7 text-sm "
              onClick={(e) => setSearch("")}
            />
          )}
          <button
            className="absolute right-2 text-lg text-primary"
            type="submit"
          >
            <IoIosSearch />
          </button>
        </form>

        <div className="hidden md:block">
          <FaRegUserCircle className="text-4xl text-primary" />
          <a
            href=""
            className="text-sm font-medium text-primary-600 hover:underline"
          ></a>
        </div>

        <button className="text-gray-600 text-xl md:hidden">
          <RxHamburgerMenu />
        </button>
      </nav>
    </>
  );
};

export default Navbar;
