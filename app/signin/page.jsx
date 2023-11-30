"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import { SigninContainer, LoaderDiv, EmailIcon, PasswordIcon } from "./signin.styles";
import { orbit } from 'ldrs';

export default function SignIn() {
  orbit.register();

  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [fetching, setFetching] = useState(false);

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitSignIn = async (event) => {
    event.preventDefault();
    setMessage("");
    setFetching(true);

    try {
      const response = await fetch("http://localhost:5000/signin", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.status === 400) {
        setFetching(false);
        setMessage("Incorrect email or password");
      } else {
        const user = await response.json();
        if (user.id) {
          dispatch(
            setUser({
              id: user.id,
              name: user.name,
              email: user.email,
              bmi: user.bmi,
              joined: user.joined,
              routine: user.routine,
            })
          );
          setFetching(false);
          router.push("/");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SigninContainer>
      <div>
        <h2>Sign In</h2>
        <form onSubmit={onSubmitSignIn}>
          <p>Email</p>
          <div className="inputDiv">
             <input
              placeholder="Enter Email"
              type="email"
              value={email}
              onChange={onEmailChange}
              required
            />
            <EmailIcon />
          </div>
         
          <p>Password</p>
          <div className="inputDiv">
            <input
              placeholder="Enter Password"
              type="password"
              value={password}
              onChange={onPasswordChange}
              required
            />
            <PasswordIcon/>
          </div>
          
          {fetching && <LoaderDiv>
            <l-orbit size="35" speed="1.3"color="white"/>
          </LoaderDiv>}
          {message && <p>{message}</p>}
          <button type="submit">Sign In</button>
        </form>
        <p>Don't have an account?</p>
        <p className="register" onClick={() => router.push("/register")}>Click here to register</p>
      </div>
    </SigninContainer>
  );
}
