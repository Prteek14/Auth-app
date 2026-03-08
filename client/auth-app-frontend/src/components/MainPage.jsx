import { useNavigate } from "react-router-dom";

function MainPage() {
  const user_name = localStorage.getItem("user_name");
  const navigate = useNavigate();
  const handleClick = () =>{
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user_name");
    navigate("/login");
  }
  return (
    <div className='mx-auto flex flex-col justify-center  items-center min-h-screen  text-center bg-linear-to-r from-[#0575e6] to-[#021b79]'>
      <h1 className='p-2'>Welcome</h1>
      <br />
      <p className='p-2'>You are Most welcome to our Page, {user_name}</p>
      <button onClick={handleClick}>Logout</button>
    </div>
  )
}

export default MainPage
