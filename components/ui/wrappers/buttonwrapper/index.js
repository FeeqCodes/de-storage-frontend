import { Button } from "@components/ui/shared";
import Link from "next/link";

export default function ButtonWrapper() {
  return (
    <>
      <div className="flex justify-center py-10 relative w-full">
        <div
          style={{ background: "rgba(160, 150, 150, 0.54)" }}
          className="h-[220px] w-[220px] absolute bottom-[-50%] m-auto rounded-full  backdrop-blur-2xl z-[-1]"
        ></div>

        <Link href="/uploads"><Button>Start Uploading</Button></Link>
      </div>
    </>
  );
}
