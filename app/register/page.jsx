"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

export default function Register() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [message, setMessage] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPass1Change = (event) => {
    setPass1(event.target.value);
  };
  const onPass2Change = (event) => {
    setPass2(event.target.value);
  };

  const onSubmitRegister = async (event) => {
    event.preventDefault(); //prevents default action of form which is refreshing
    setMessage("");

    if (pass1 === pass2) {
      try {
        const response = await fetch("http://localhost:5000/register", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name,
            email: email,
            password: pass1,
          }),
        });

        if (response.status === 400) {
          setMessage("Failed to register, try again");
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
    } else {
      setMessage("Passwords must match");
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={onSubmitRegister}>
        <p>Name</p>
        <input
          placeholder="Enter Name"
          type="text"
          value={name}
          onChange={onNameChange}
          required
        />
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
          value={pass1}
          onChange={onPass1Change}
          required
        />
        <input
          placeholder="Enter Password Again"
          type="password"
          value={pass2}
          onChange={onPass2Change}
          required
        />
        <p>{message}</p>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
