import { useState } from "react";
import FormInput from "./formInput";
import Button from "./buttonComponent";

import "./auth.scss";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { ReactComponent as Illustration } from "../../assets/login-illustrator.svg";
import { signInUserService } from "../../services/authServices";
import { ReactComponent as Illustration1 } from "../../assets/reset.svg";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data1 = {
      username: email,
      password: password,
    };

    try {
      const { statusText, status } = await signInUserService(data1);

      if (status === 200 && statusText === "OK") {
        //to be updated
        navigate("/");
      }
      resetFormFields();
    } catch (error) {
      console.log({ error });
      //change to 403
      if (error.response.status === 401) {
        alert(error.response.data.detail);
      }
    }
  };

  return (
    <div className="auth-page">
      <div className="container">
        <div className="split">
          <div className="illustration">
            <Illustration className="svg" />
            <Illustration1 className="svg1" />
          </div>
          <div className="sign-in-container">
            <h2>Welcome Back Leader</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit} className="signin-form">
              <FormInput
                label="Email"
                type="email"
                required
                name="email"
                value={email}
                onChange={handleChange}
              />
              <FormInput
                label="Password"
                type="password"
                required
                name="password"
                value={password}
                onChange={handleChange}
              />
              <div className="buttons-container">
                <Button type="submit">Sign In</Button>
              </div>
              <br></br>
              <Link to="/signin" style={{ color: "#880000" }}>
                Forgotten Password?
              </Link>
              <br></br>
              <hr />
              <span>
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  style={{ color: "#880000", fontWeight: "bold" }}
                >
                  Sign Up
                </Link>
              </span>
              <Outlet></Outlet>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
