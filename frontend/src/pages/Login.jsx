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
        className="font-extrabold bg-lightRed1 text-darkRed2 rounded-2xl p-3 absolute left-[10%] top-[5%] md:left-[30%] md:top-[5%]"
        to="/"
      >
        <img src={arrow} alt="arrowleft" />
      </Link>

      <div
        className="flex flex-col items-center min-h-screen  mt-32 
      sm:justify-center sm:pt-0"
      >
        <div className="flex flex-col gap-2">
          <h3 className="text-6xl md:text-6xl tracking-wider font-bold py-2 ">
            Log in to your
          </h3>
          <span
            className="text-6xl md:text-6xl tracking-wider 
                font-bold text-center py-2"
          >
            account
          </span>
        </div>

        <div className="w-full px-6 py-4 mt-4 sm:max-w-md ">
          <form onSubmit={submitHandler}>
            <div className="w-full mt-4">
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
            <div className="w-full mt-4">
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

            <Link
              className="text-Grey1 tracking-wider text-xl 
                           font-medium cursor-pointer py-2"
              to="/signup"
            >
              Forget Password ?
            </Link>

            <Button>{isLoading ? "Logging.." : "Sign in"}</Button>
            <p className="text-darkGrey2 text-center tracking-wide pt-14 text-xl md:text-2xl font-semibold opacity-90">
              Doesn't have an account ?{" "}
              <Link
                className="text-darkRed1 text-center 
                       text-xl md:text-2xl 
                       font-extrabold 
                            underline cursor-pointer"
                to="/signup"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
