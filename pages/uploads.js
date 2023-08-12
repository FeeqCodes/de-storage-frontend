import { Files } from "@components/ui/filespage";
import { BaseLayout } from "@components/ui/layout";
import { Button, Navbar } from "@components/ui/shared";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";








export default function Uploads() {





  // Search for items
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const files = [
    "document.txt",
    "image.jpeg",
    "report.pdf",
    "presentation.pptx",
    // Your existing list of file names
  ];

  const handleSearch = () => {
    
    const filteredFiles = files.filter((file) =>
      file.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredFiles);
  };

  // Clear out search field when empty
  useEffect(() => {
    if(searchTerm === "") {
      setSearchResults([])
    }
  }, [searchTerm])



  return (
    <>
      <div
        className={`bg-gradient-radial from-grey to-grey2 relative   h-auto overflow-hidden  `}
      >
        <div className="h-[160px] w-[160px] absolute top-[0] left-[-55px] rounded-full bg-circleRed "></div>

        <Navbar />

        <div className="flex justify-center">
          <div className="w-[40%] flex justify-between text-center mt-10 px-8 py-3 bg-white rounded-[50px] border-[2px] border-circleRed">
            <input
              className="w-[100%] outline-none"
              placeholder="search files "
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            ></input>
            <button
              // value={searchTerm}
              onClick={handleSearch}
              variant="round"
              size="sm"
            >
              Search
            </button>
          </div>

        </div>
        {/* Displayed search items */}
          <ul>
            {searchResults.map((file, index) => (
              <li key={index}> <Files searchResults={searchResults} filename={file}/> </li>
            ))}
          </ul>

        <div className="flex px-16 mt-20 gap-7">
          <Link href="./"><Button>Back</Button></Link>
          <Button>Upload</Button>
        </div>

        <div
          style={{ background: "rgba(255, 255, 255, 0.26)" }}
          className="mt-10 w-full h-auto bg-indigo-400 border-circleRed border-t-2 backdrop-blur-[10px]"
        >
          <div className="p-16 grid grid-cols-5 gap-10 gap-y-20 text-white text-center">
            {Array.from({length: 20}).map((_, i) =>
              
              <Files key={i}/>
            
            )}
          </div>

        </div>
      </div>
    </>
  );
}

Uploads.Layout = BaseLayout;
