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
        className="font-bold bg-gray-300 rounded-sm px-2 py-1 absolute
        left-[10%] top-[5%] md:left-[25%] md:top-[5%]"
        to="/"
      >
        <img src={arrow} alt="arrowleft" />
      </Link>
      <div className="min-h-screen py-10 mt-8 flex flex-col items-center justify-center">
        <div className="flex items-center flex-col">
          <Link href="/">
            <h3 className="text-5xl tracking-widest font-bold text-gray-800 uppercase">
              Sign up
            </h3>
          </Link>
          <p className="text-sm text-gray-800 uppercase font-bold">
            and let us plan your events
          </p>
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
                  title="Oto"
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
              />
              {errors.password && (
                <p className="text-sm text-red-400 font-semibold">
                  {errors.password}
                </p>
              )}
            </div>

            <div className="flex flex-col items-center justify-end mt-4">
              <Button>{isLoading ? "Submitting.." : "Sign up"}</Button>
              <Link
                className="text-end tracking-wider  text-sm font-medium py-4"
                to="/login"
              >
                Have an account login?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
