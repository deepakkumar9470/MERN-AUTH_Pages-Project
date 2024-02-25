import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../redux/usersApiSlice";
import { setCredentials } from "../redux/authSlice";
import { toast } from "react-hot-toast";
import Button from "../components/Button";
import arrow from "../assets/arrow.svg";
import { validation } from "../utils/valdation";
import InputText from "../components/InputText/InputText";

const initialState = {
  name: "",
  email: "",
  password: "",
  phone: "",
};

const SignUp = () => {
  const [register, { isLoading }] = useRegisterMutation();

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (checked) {
        setFormData({ ...formData, [name]: [...formData[name], value] });
      } else {
        setFormData({
          ...formData,
          [name]: formData[name].filter((item) => item !== value),
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const { userInfo } = useSelector((state) => state.auth);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setErrors(validation(formData));

    try {
      const res = await register(formData, latitude, longitude).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success("Registration Successfully");
      navigate("/login");
    } catch (error) {
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
      <div className="min-h-screen mt-32 flex flex-col items-center justify-center">
        <div className="flex flex-col gap-0 md:gap-2">
          <h3 className="text-4xl md:text-6xl tracking-wider font-bold py-2 ">
            Create Account
          </h3>
          <span className="text-4xl md:text-6xl text-center tracking-wider font-bold py-2 ">
            with Email
          </span>
        </div>

        <p>
          Location:{" "}
          {latitude !== null && longitude !== null
            ? `${latitude}, ${longitude}`
            : "Fetching location..."}
        </p>
        <div className="w-full px-6 md:px-0 md:max-w-md flex flex-col items-center min-h-screen pt-4  mt-2 sm:justify-center sm:pt-0">
          <form
            onSubmit={submitHandler}
            className="flex item-center flex-col gap-2"
          >
            <div className="mb-2">
              <InputText
                type={"text"}
                name={"name"}
                inputvalue={formData.name}
                onInputChange={handleChange}
                labelFor="name"
                title="Name"
                placeHolder="First name"
              />
              {errors.name && (
                <p className="text-sm text-red-400 font-semibold">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2/3 mb-2">
                <InputText
                  type={"number"}
                  name={"phone"}
                  inputvalue={formData.phone}
                  onInputChange={handleChange}
                  labelFor="phone"
                  title="Phone"
                  placeHolder="+91-999-888-7770"
                />
                {errors.phone && (
                  <p className="text-sm text-red-400 font-semibold">
                    {errors.phone}
                  </p>
                )}
              </div>
              <div className="w-1/3 mb-2">
                <InputText
                  type={"number"}
                  name={"otp"}
                  inputvalue={""}
                  onInputChange={""}
                  labelFor="otp"
                  title="Otp"
                  placeHolder="o o o o o"
                />
              </div>
            </div>
            <div className="mb-2">
              <InputText
                type={"text"}
                name={"email"}
                inputvalue={formData.email}
                onInputChange={handleChange}
                labelFor="email"
                title="Email"
                placeHolder="Enter e-mail here"
              />
              {errors.email && (
                <p className="text-sm text-red-400 font-semibold">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="mb-2">
              <InputText
                type={"password"}
                name={"password"}
                inputvalue={formData.password}
                onInputChange={handleChange}
                labelFor="password"
                title="Password"
                placeHolder="o o o o o o o o"
              />
              {errors.password && (
                <p className="text-sm text-red-400 font-semibold">
                  {errors.password}
                </p>
              )}
            </div>

            <div className="flex gap-6 items-center px-2">
              <input
                className="h-8 w-8 rounded-full bg-darkRed1 border-darkRed1 text-darkRed2 focus:darkRed1"
                type="checkbox"
              />

              <div className="flex flex-col">
                <div className="flex gap-1">
                  <p className="text-darkGrey1 text-center text-xl font-medium opacity-100">
                    I agree to the{" "}
                  </p>
                  <Link
                    className="text-darkRed1 text-center 
                  text-xl font-medium 
                   cursor-pointer"
                  >
                    Terms & Conditions
                  </Link>
                </div>

                <div className="flex gap-1">
                  <p className="text-darkGrey1 text-center text-xl font-medium  opacity-90">
                    and{" "}
                  </p>
                  <Link
                    className="text-darkRed1 text-center 
                  text-xl font-medium 
                   cursor-pointer"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>

            <Button>{isLoading ? "Submitting.." : "Sign up"}</Button>
            <p className="text-darkGrey2 text-center tracking-wide pt-14 text-xl md:text-2xl font-semibold opacity-90">
              Already have an account ?{" "}
              <Link
                className="text-darkRed1 text-center 
                    text-xl md:text-2xl  
                    font-extrabold 
                            underline cursor-pointer"
                to="/login"
              >
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
