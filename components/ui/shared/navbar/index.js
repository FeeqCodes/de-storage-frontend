import { Button }from "@components/ui/shared/";



export default function Navbar() {
  return (
    <>
      <div
        style={{ background: "rgba(160, 150, 150, 0.54)" }}
        className="flex justify-between items-center py-4 px-16   w-full h-auto m-auto   backdrop-blur-sm font-roboto"
      >
        <p className=" text-2xl text-white font-normal">
          <span style={{ color: "rgba(255, 255, 255, 0.8)" }}>De</span>Storage
        </p>

        <Button>Connect wallet</Button>
      </div>
    </>
  );
}
