






export default function Hero() {
  
  return (
    <>
      <div className="w-[70%] py-2  mx-auto  flex justify-center  items-center gap-5">
        <div className=" ">
          <h1 className="font-[800] text-[2.4rem]">
            <span style={{ color: "rgba(0, 0, 0, 0.8)" }}>
              &quot;Unleash the Potential of Your Data:
            </span>{" "}
            <span style={{ color: "rgba(0, 0, 0, 0.6)" }}>
              Store Safely and Securely with Blockchain Decentralized
              Cloud&quot;
            </span>
          </h1>

          <div className="flex items-center gap-[8%]  text-black font-bold">
            {/* <div className="flex gap-2  items-center">
                <span className='w-[4px] h-[25px] bg-white'></span><span>EASY</span>
              </div>
              <div className="flex gap-2  items-center">
                <span className='w-[4px] h-[25px] bg-white'></span><span>EASY</span>
              </div>
              <div className="flex gap-2  items-center">
                <span className='w-[4px] h-[25px] bg-white'></span><span>EASY</span>
              </div>
              <div className="flex gap-2  items-center">
                <span className='w-[4px] h-[25px] bg-white'></span>
              </div> */}

            <span className="w-[4px] h-[35px] bg-white"></span>
            <span>Easy</span>
            <span className="w-[4px] h-[35px] bg-white"></span>
            <span>Fast</span>
            <span className="w-[4px] h-[35px] bg-white"></span>
            <span>Secure</span>
            <span className="w-[4px] h-[35px] bg-white"></span>
          </div>
        </div>

        <img
          className=" h-[30vw]  "
          alt=""
          src="/undraw_ether_re_y7ft (1) 1.png"
        ></img>
      </div>
    </>
  );
};
