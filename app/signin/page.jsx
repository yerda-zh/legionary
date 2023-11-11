"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import { SigninContainer } from "./signin.styles";

export default function SignIn() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitSignIn = async (event) => {
    event.preventDefault();
    setMessage("");

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
          <input
            placeholder="Enter Email"
            type="email"
            value={email}
            onChange={onEmailChange}
            required
          />
          <p>Password</p>
          <input
            placeholder="Enter Password"
            type="password"
            value={password}
            onChange={onPasswordChange}
            required
          />
          {message && <p>{message}</p>}
          <button type="submit">Sign In</button>
        </form>
        <p>Don't have an account?</p>
        <p className="register" onClick={() => router.push("/register")}>Click here to register</p>
      </div>
    </SigninContainer>
  );
}
