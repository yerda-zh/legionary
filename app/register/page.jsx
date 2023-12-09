"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import { RegisterContainer, LoaderDiv, EmailIcon, PasswordIcon, NameIcon } from "./register.styles";
import { ButtonAccent } from "../_components/buttons/Button";
import { orbit } from 'ldrs';

export default function Register() {
  orbit.register();

  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [message, setMessage] = useState("");
  const [fetching, setFetching] = useState(false);

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
    setFetching(true);

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
          setFetching(false);
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
            setFetching(false);
            router.push("/");
          }
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      setFetching(false);
      setMessage("Passwords must match");
    }
  };

  return (
    <RegisterContainer>
      <div>
        <h2>Register</h2>
        <form onSubmit={onSubmitRegister}>
          <p>Name</p>
          <div className="inputDiv">
            <input
              placeholder="Enter Name"
              type="text"
              value={name}
              onChange={onNameChange}
              required
            />
            <NameIcon />
          </div>
          
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
              value={pass1}
              onChange={onPass1Change}
              required
            />
            <PasswordIcon />
          </div>
          <div className="inputDiv">
            <input
              placeholder="Enter Password Again"
              type="password"
              value={pass2}
              onChange={onPass2Change}
              required
            />
            <PasswordIcon />
          </div>
          
          {fetching && <LoaderDiv>
            <l-orbit size="35" speed="1.3"color="white"/>
          </LoaderDiv> }
          {message && <p>{message}</p>}
          
          <ButtonAccent type="submit">Register</ButtonAccent>
        </form>
      </div>
    </RegisterContainer>
  );
}
