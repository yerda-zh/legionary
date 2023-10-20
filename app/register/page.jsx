"use client";
import { useEffect, useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");

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
  const onSubmitRegister = () => {
    if (pass1 === pass2 && pass1.length !== 0) {
      const password = pass1;
      fetch("http://localhost:5000/register", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((answers) => {
          console.log(answers);
        })
        .catch(console.log);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form>
        <p>Name</p>
        <input
          placeholder="Enter Name"
          type="text"
          onChange={onNameChange}
          required
        />
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
          onChange={onPass1Change}
          required
        />
        <input
          placeholder="Enter Password Again"
          type="password"
          onChange={onPass2Change}
          required
        />
        <button type="submit" onClick={onSubmitRegister}>
          Register
        </button>
      </form>
    </div>
  );
}
