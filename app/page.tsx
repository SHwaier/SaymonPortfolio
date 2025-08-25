import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Vortex } from "@/components/ui/vortex";
export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* <div className="p-12 flex flex-col md:flex-row relative overflow-hidden ">
          
        </div> */}

        <div className="h-[40rem] flex items-center justify-center relative overflow-hidden">
          <Vortex
            backgroundColor="black"
            className="flex items-center flex-col justify-center px-2 md:px-10 py-4"
            rangeSpeed={0.5}
          >
            <TextHoverEffect text="SAYMON" />
          </Vortex>
        </div>
      </div>
    </>
  );
}
