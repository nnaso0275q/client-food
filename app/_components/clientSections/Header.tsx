import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <>
      <div className="w-full h-fit bg-black">
        <div className="py-[40px] mx-[88px]">
          <div className="h-[68px] justify-between bg-black flex items-center ">
            {/* logo container */}
            <div className="w-41 h-11 gap-2 flex">
              {/* <img src="/Logo.svg" /> */}
              <Image src="/Logo.svg" alt="Logo" width="46" height="37"></Image>
              <div>
                <div className="text-white font-semibold text-lg ">
                  Nom<span className="text-red-500">Nom</span>
                </div>
                <div className="text-muted-foreground font-normal text-xs ">
                  Swift delivery
                </div>
              </div>
            </div>
            {/* logo container */}

            {/* sign up | log in */}
            <div className="gap-[12px] flex items-center w-41">
              <Link href="/sign">
                <Button className="w-[75px] h-[36px] bg-white text-black rounded-full ">
                  Sign up
                </Button>
              </Link>
              <Link href="/login">
                <Button className="w-[75px] h-[36px] bg-red-500 text-white rounded-full">
                  Log in
                </Button>
              </Link>
            </div>
            {/* sign up | log in */}
          </div>
        </div>
      </div>
      <Image src="/food.svg" alt="foodPhoto" width="1440" height="668"></Image>
      {/* <img src="/food.svg"></img> */}
    </>
  );
};
