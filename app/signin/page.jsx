"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

export default function SignIn() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitSignIn = () => {
    fetch("http://localhost:5000/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        if (res.status === 400) {
          alert("Incorrect form submission");
        }
        return res.json();
      })
      .then((user) => {
        if (user.id) {
          dispatch(
            setUser({
              id: user.id,
              name: user.name,
              email: user.email,
              bmi: user.bmi,
              joined: user.joined,
              routine: user.routine
            })
          );
          router.push("/");
        }
      })
      .catch(console.log);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <div>
        <p>Email</p>
        <input
          placeholder="Enter Email"
          type="email"
          onChange={onEmailChange}
          required
        />
        <p>Password</p>
        <input
          placeholder="Enter Password"
          type="password"
          onChange={onPasswordChange}
          required
        />
        <button type="submit" onClick={onSubmitSignIn}>
          Sign In
        </button>
      </div>
    </div>
  );
}
