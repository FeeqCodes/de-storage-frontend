import { useEffect, useRef, useState } from "react";




export default function Files({ key, filename, searchResults }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      {/* File Start */}
      <div
        key={key}
        className="gap-y-10 w-[160px] h-[150px] bg-circleRed rounded-[10px] p-2"
      >
        <div className="flex gap-4 ">
          <span>
            <img
              className="w-12 h-12 ml-10"
              alt=""
              src="/c144927d-03d3-47bf-a4cc-e450f712d1b8.svg"
            ></img>
          </span>
          <div className="dropdown text-black" ref={dropdownRef}>
            <img
              alt=""
              src="/pepicons-pop_dots-y.svg"
              className="dropdown-toggle"
              onClick={toggleDropDown}
            ></img>
            <ul className={`dropdown-menu ${isOpen ? "open" : ""} `}>
              <li>Delete</li>
              <li>Share </li>
              <li></li>
            </ul>
          </div>
        </div>

        <div className="mt-5">
          {searchResults ? <p>{filename}</p> : <p>Image.jpeg</p>
          }
        </div>
      </div>
      {/* 1st File end */}
    </>
  );
};
