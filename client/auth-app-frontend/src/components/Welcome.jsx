import { Link } from "react-router-dom";

function Welcome() {
  return (
    <>
      <h1
        className="text-center m-5 bg-linear-to-r from-[#0099f7] to-[#f11712]
           bg-clip-text text-transparent font-bold text-4xl leading-normal"
      >
        Welcome to Our Page
      </h1>
      <div className="mx-auto min-h-[60vh] mt-10 overflow-y-clip flex flex-col items-center justify-around w-50 rounded-2xl p-2 bg-linear-to-r from-[#c06c84] via-[#6c5b7b] to-[#355c7d] shadow-2xl shadow-black/40 ring-2 ring-white/20 sm:min-h-[70vh] sm:w-70">
        <h1 className="text-black">Hello User</h1>
        <p className="text-center">
          Inspiring Tech Solutions for a Brighter Future
        </p>
        <Link
          to="/signup"
          className="inline-block px-6 py-2 rounded-md text-white font-semibold
         bg-linear-to-r from-[#AA076B] via-[#61045F] to-[#AA076B]
         bg-[length:200%_auto] transition-all duration-500
         hover:bg-position-[right_center] border-b border-black"
        >
          Get Started
        </Link>
      </div>
    </>
  );
}

export default Welcome;
