'use client';
import { useState } from "react";

export default function SignIn() {
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
          password: password
        }),
      })
        .then((res) => res.json())
        .then((answers) => {
          console.log(answers);
        })
        .catch(console.log);
  }

  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <p>Email</p>
        <input placeholder="Enter Email" type="email" onChange={onEmailChange} required />
        <p>Password</p>
        <input placeholder="Enter Password" type="password" onChange={onPasswordChange} required />
        <button type="submit" onClick={onSubmitSignIn}>Sign In</button>
      </form>
    </div>
  );
}
