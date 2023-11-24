import React from 'react'
import { IoIosOptions } from "react-icons/io";
const SearchField = () => (
    <form className="form-inline relative">
                <input
                  className="form-control mr-sm-2 outline-none bg-gray-300 placeholder:text-black"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{
                    border: "none",
                    marginBottom: "0px",
                    width: "100%",
                    height: "50px",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                />
                <button className="absolute top-3 right-5">
                  <IoIosOptions className="text-2xl" />
                </button>
              </form>
)

export default SearchField