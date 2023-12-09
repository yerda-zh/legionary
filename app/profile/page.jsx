"use client";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { resetUser } from "../redux/userSlice";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { orbit } from 'ldrs';
import {ProfileContainer, ProfileDiv, Block, Modal, LoaderDiv} from './profile.styles';
import { ButtonGrey } from "../_components/buttons/Button";

export function getInitialProps() {
  return {
    props: {}, // Optional props to pass to the page
  };
}

export default function Profile({ props }) {
  useEffect(()=>{
    orbit.register();
  }, []);
  
  const router = useRouter();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const [message, setMessage] = useState('');
  const [deleteClicked, setDeleteClicked] = useState(false);
  const [fetching, setFetching] = useState(false);

  const date = new Date(user.joined);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const formattedDate = `${month}/${day}/${year}`;

  const handleDeleteButton = async () => {
    setMessage('');
    setFetching(true);

    try {
      const response = await fetch("https://legionary-api.onrender.com/delete", {
        method: "delete",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user.email,
        }),
      });

      if(response.status === 400) {
        setFetching(false);
        setMessage('There was an issue, try again');
      } else {
        const result = await response.json();
        dispatch(resetUser());
        setFetching(false);
        setMessage(result);
      }
    } catch (error) {
      setFetching(false);
      setMessage('There was an issue, try again');
    }
  };

  const handleCloseButton =() => {
    if (!user.id) {
      router.push('/');
    }
    setDeleteClicked(false);
  }

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
            <ButtonGrey onClick={handleSignOut}>Sign out</ButtonGrey>
            <ButtonGrey onClick={()=>setDeleteClicked(true)}>Delete account</ButtonGrey>
          </div>
        </ProfileDiv>
      )}
      <Modal $clicked={deleteClicked}>
        <IoClose className="close" onClick={handleCloseButton}/>
        <h4>Are you sure?</h4>
        <ButtonGrey onClick={handleDeleteButton}>Delete account</ButtonGrey>
        {fetching && <LoaderDiv>
            <l-orbit size="35" speed="1.3"color="var(--color-main)"/>
          </LoaderDiv>}
        {<p>{message}</p>} 
      </Modal>
    </ProfileContainer>
  );
}
