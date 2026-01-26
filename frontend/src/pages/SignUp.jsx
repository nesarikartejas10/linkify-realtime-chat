import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password } = formData;
    try {
      setLoading(true);
      const result = await api.post("/auth/signUp", {
        username,
        email,
        password,
      });

      setFormData({ username: "", email: "", password: "" });
      setError("");
      if (result.data.success) {
        navigate("/login");
      }
    } catch (error) {
      setError(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-slate-200">
      <div className="w-full max-w-120 bg-white rounded-[20px] shadow-gray-400 shadow-lg flex flex-col gap-7.5 overflow-hidden">
        <div className="w-full h-50 bg-[#33826a] rounded-b-[30%] shadow-gray-400 shadow-lg flex items-center justify-center">
          <h1 className="text-[30px] font-bold text-[#d9f5c0]">
            Welcome to <span className="text-white">Our Linkify</span>
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-full gap-5 mb-8"
        >
          {error && <p className="text-red-600 font-medium">{error}</p>}
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-[90%] h-12.5 outline-none border border-[#33826a] px-5 py-2.5 bg-white rounded-lg shadow-gray-200 shadow-lg text-gray-700 text-[19px]"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-[90%] h-12.5 outline-none border border-[#33826a] px-5 py-2.5 bg-white rounded-lg shadow-gray-200 shadow-lg text-gray-700 text-[19px]"
          />
          <div className="w-[90%] h-12.5 border border-[#33826a] shadow-gray-200 shadow-lg rounded-lg overflow-hidden relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full h-full outline-none px-5 py-2.5 bg-white text-gray-700 text-[19px]"
            />
            <span
              className="absolute top-2.5 right-5 text-[16px] text-[#33826a] font-semibold cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? "hide" : "show"}
            </span>
          </div>
          <button
            type="submit"
            className="px-5 py-2.5 rounded-2xl bg-[#33826a] shadow-gray-200 shadow-md text-[19px] w-50 mt-5 text-white font-semibold hover:bg-[#5ba58f] cursor-pointer"
            disabled={loading}
          >
            {loading ? "Loading..." : "Sign Up"}
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
