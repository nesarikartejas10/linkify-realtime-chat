import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center w-full h-screen bg-slate-200">
      <div className="w-full max-w-120 bg-white rounded-[20px] shadow-gray-400 shadow-lg flex flex-col gap-7.5 overflow-hidden">
        <div className="w-full h-50 bg-[#33826a] rounded-b-[30%] shadow-gray-400 shadow-lg flex items-center justify-center">
          <h1 className="text-[30px] font-bold text-[#d9f5c0]">
            Welcome to <span className="text-white">Our Linkify</span>
          </h1>
        </div>

        <form className="flex flex-col items-center w-full gap-5 mb-8">
          <input
            type="text"
            placeholder="Username"
            className="w-[90%] h-12.5 outline-none border border-[#33826a] px-5 py-2.5 bg-white rounded-lg shadow-gray-200 shadow-lg text-gray-700 text-[19px]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-[90%] h-12.5 outline-none border border-[#33826a] px-5 py-2.5 bg-white rounded-lg shadow-gray-200 shadow-lg text-gray-700 text-[19px]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-[90%] h-12.5 outline-none border border-[#33826a] px-5 py-2.5 bg-white rounded-lg shadow-gray-200 shadow-lg text-gray-700 text-[19px]"
          />
          <button
            type="submit"
            className="px-5 py-2.5 rounded-2xl bg-[#33826a] shadow-gray-200 shadow-md text-[19px] w-50 mt-5 text-white font-semibold hover:bg-[#5ba58f] cursor-pointer"
          >
            SignUp
          </button>

          <p className="cursor-pointer" onClick={() => navigate("/login")}>
            Aready have an account ?{" "}
            <span className="text-[#33826a] font-bold">Login</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
