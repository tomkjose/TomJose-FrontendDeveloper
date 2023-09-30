import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";
function Landing() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center w-70 relative hideScroll ">
      <img
        src="/images/capsule.svg"
        alt="capsule"
        style={{ maxWidth: "800px" }}
      />
      <div
        className={`absolute transform -translate-x-1/2 ${
          showContent
            ? "top-1/2 left-1/2 translate-y-0 opacity-100 transition-all duration-500 ease-in-out"
            : "bottom-0 left-1/2 translate-y-full opacity-0"
        } flex flex-col items-center pt-16`}
      >
        <h1 className="text-8xl pb-4 font-semibold">SpaceX</h1>
        <Link to="/home">
          {" "}
          <button className="bg-black text-white px-4 py-2 rounded-full w-32 hover:bg-blue-700 ">
            Explore
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
