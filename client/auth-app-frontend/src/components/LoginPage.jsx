import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const res = await axios.post("https://auth-app-backend-ou86.onrender.com/api/users/login", formData);
      console.log(res.data);

      if(res.data.success === true){
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user_name", res.data.user_name);
        navigate("/mainpage");
      }
    } catch (error) {
      if (error.res) {
        console.log("Server Error:", error.res.data);
      } else {
        console.log("Network Error:", error.message);
      }
    }
  }
  return (
    <>
      <h1
        className="text-center m-5 bg-linear-to-r from-[#0099f7] to-[#f11712]
           bg-clip-text text-transparent font-bold text-4xl leading-normal"
      >
        Welcome to Our Page
      </h1>
      <div className="min-h-[80vh] overflow-y-clip flex items-center justify-center ">
        <form className="flex flex-col rounded-2xl p-4  bg-[#d70652] text-[#002E5D] sm:w-100 shadow-2xl shadow-black/40 ring-2 ring-white/20"
        onSubmit={handleSubmit}>
          <h2 className="text-xl font-bold text-center mb-4">LogIn</h2>
          <br />

          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your Email"
            className="mb-3"
          />

          <label htmlFor="password">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full pr-10"
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <Link to="/signup" className="font-bold mt-2 hover:cursor-pointer">
            SignIn?
          </Link>
          <br />
          <button
            className="inline-block p-2 rounded-md text-white font-semibold
         bg-linear-to-r from-[#1F1C2C] via-[#928DAB] to-[#1F1C2C]
         bg-[length:200%_auto] transition-all duration-500
         hover:bg-position-[right_center] mt-3"
          >
            LogIn
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
