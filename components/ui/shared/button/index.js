

const Sizes = {
  sm: "py-2 px-8",
  md: "py-4 px-8",
};



export default function Button({children,className,  size="md"}) {


  
  
  return (
    <>
    
      <button  className={` bg-circleRed rounded-tl-[30px] rounded-br-[30px] text-white text-sm font-normal font-poppins   ${Sizes[size]} ${className}`}>
        {children}
      </button>
    </>
  );
};
