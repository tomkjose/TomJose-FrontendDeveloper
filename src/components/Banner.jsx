import React from "react";

function Banner() {
  return (
    <div className="flex justify-center  w-3/4 ml-auto bg-black  rounded-lg mr-auto  mt-4 p-8">
      <div className="flex w-full justify-between">
        <div className="w-1/2 flex flex-col	">
          <h1 className="text-8xl pb-4 font-semibold text-white	pt-16">
            SpaceX
          </h1>
          <p className=" text-white	pt-8">
            SpaceX, founded by Elon Musk, is a pioneering aerospace manufacturer
            and space transportation company known for revolutionizing space
            travel through reusable rockets, ambitious missions to Mars, and the
            goal of making space accessible for humanity's future.
          </p>
        </div>
        <img
          src="/images/capsule.svg"
          alt="capsule"
          style={{ maxWidth: "400px" }}
          className="w-1/2"
        />
      </div>
    </div>
  );
}

export default Banner;
