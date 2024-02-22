import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../redux/usersApiSlice";
import { setCredentials } from "../redux/authSlice";
import { toast } from "react-hot-toast";
import arrow from "../assets/arrow.svg";
import { validation } from "../utils/valdation";
import Button from "../components/Button";
import InputText from "../components/InputText/InputText";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);
  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setErrors(validation(formData));
    try {
      const res = await login({
        email: formData.email,
        password: formData.password,
      }).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success("Login Successfully");
      navigate("/");
    } catch (err) {
      toast.error("Oops Invalid credentials!");
    }
  };

  return (
    <>
      <Link
        className="font-bold bg-gray-300 rounded-sm px-2 py-1 absolute left-[10%] top-[5%] md:left-[30%] md:top-[5%]"
        to="/"
      >
        <img src={arrow} alt="arrowleft" />
      </Link>

      <div className="flex flex-col items-center min-h-screen pt-6  mt-5 sm:justify-center sm:pt-0">
        <div className="flex items-center flex-col mt-4 md:mt-0">
          <Link href="/">
            <h3 className="text-5xl font-bold text-gray-800 uppercase">
              Login in
            </h3>
          </Link>
          <p className="text-md text-gray-800 uppercase font-bold">
            Hey Welcome back
          </p>
        </div>

        <div className="w-full px-6 py-4 mt-6 overflow-hidden sm:max-w-md ">
          <form onSubmit={submitHandler}>
            <div className="mt-4">
              <InputText
                type={"text"}
                name={"email"}
                inputvalue={formData.email}
                onInputChange={handleInputChange}
                labelFor="email"
                title="Phone or Email"
              />

              {errors.email && (
                <p className="text-sm text-red-400 font-semibold">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="mt-4">
              <InputText
                type={"password"}
                name={"password"}
                inputvalue={formData.password}
                onInputChange={handleInputChange}
                labelFor="password"
                title="Password"
              />

              {errors.password && (
                <p className="text-sm text-red-400 font-semibold">
                  {errors.password}
                </p>
              )}
            </div>

            <div className="flex flex-col items-center justify-end mt-8">
              <Button>{isLoading ? "Logging.." : "Log in"}</Button>
              <Link
                className="text-end tracking-wider text-sm font-medium py-4"
                to="/signup"
              >
                Don't have an account signup?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
