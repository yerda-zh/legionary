"use client";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { resetUser } from "../redux/userSlice";
import { useState } from "react";
import {ProfileContainer, ProfileDiv, Block} from './profile.styles';

export default function Profile() {
  const router = useRouter();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const [message, setMessage] = useState('');

  const date = new Date(user.joined);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const formattedDate = `${month}/${day}/${year}`;

  const handleDeleteButton = async () => {
    try {
      const response = await fetch("http://localhost:5000/delete", {
        method: "delete",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user.email,
        }),
      });

      if(response.status === 400) {
        setMessage('There was an issue, try again');
      } else {
        const result = await response.json();
        dispatch(resetUser());
        router.push("/");
        alert(result);
      }
    } catch (error) {
      setMessage('There was an issue, try again');
    }
  };

  const handleSignOut = () => {
    dispatch(resetUser());
    router.push('/');
  }

  return (
    <ProfileContainer>
      <h2>My Profile</h2>
      {user.name && (
        <ProfileDiv>
          <div>
            <h4>{user.name}</h4>
          </div>
          <Block/>
          <div>
            <p><span>Email - </span>{user.email}</p>
            <p><span>BMI - </span>{user.bmi}</p>
            <p><span>Date joined - </span>{formattedDate}</p>
            <button onClick={handleSignOut}>Sign out</button>
            <button onClick={handleDeleteButton}>Delete account</button>
          </div>
        </ProfileDiv>
      )}
      {message && <p>{message}</p>}
    </ProfileContainer>
  );
}
