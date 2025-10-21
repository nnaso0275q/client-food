import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="w-full h-[60px] bg-black"></div>
      <div className="h-[755px] w-full bg-black">
        <div className=" h-[92px] bg-red-500  text-white flex items-center justify-between">
          <p>Fresh fast delivered </p>
          <p>Fresh fast delivered </p>
          <p>Fresh fast delivered </p>
          <p>Fresh fast delivered </p>
          <p>Fresh fast delivered </p>
        </div>

        <div className="mx-[88px] h-[56px] mt-[76px] flex justify-between">
          <div className="w-41 h-11 gap-2">
            <img src="/Logo.svg" />
            <div>
              <div className="text-white font-semibold text-lg ">
                Nom<span className="text-red-500">Nom</span>
              </div>
              <div className="text-muted-foreground font-normal text-xs ">
                Swift delivery
              </div>
            </div>
          </div>

          {/* NomNom */}
          <div>
            <div className="text-muted-foreground">NomNom</div>
            <div className="text-white grid gap-y-4 mt-4">
              <p>Home</p>
              <p>Contact us</p>
              <p>Delivery zone</p>
            </div>
          </div>
          {/* NomNom*/}

          {/* MENU */}
          <div className="ml-[112px]">
            <div className="text-muted-foreground">MENU</div>
            <div className="flex gap-[56px] items-center mt-4">
              <div className="text-white grid gap-y-4 ">
                <p>Appatizer</p>
                <p>Salad</p>
                <p>Pizzas</p>
                <p>Pizzas</p>
                <p>Pizzas</p>
              </div>
              <div className="text-white grid gap-y-4">
                <p>Pizzas</p>
                <p>Pizzas</p>
                <p>Pizzas</p>
                <p>Pizzas</p>
                <p>Pizzas</p>
              </div>
            </div>
          </div>
          {/* MENU */}

          {/* FOLLOW US */}
          <div className="ml-[112px]">
            <div className="text-muted-foreground">FOLLOW US</div>
            <div className="mt-4 gap-4 flex items-center">
              <img src="/fbook.svg" />
              <img src="/insta.svg" />
            </div>
          </div>
          {/* FOLLOW US */}
        </div>

        {/* Border */}
        <div className="mx-[88px] ">
          <div className="border border-muted-foreground w-full mt-[300px]"></div>
          <div className="text-muted-foreground flex items-center gap-12 mt-[32px]">
            <p>Copy right 2024©Nomnom LLC</p>
            <p>Privacy policy</p>
            <p>Terms and conditoin</p>
            <p>Cookie policy</p>
          </div>
        </div>
        {/* Border */}
      </div>
    </>
  );
};
