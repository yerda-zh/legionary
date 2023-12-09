"use client";
import {NavContainer, FirstDiv, SecondDiv, SmallScreenContainer, SmallScreen} from "./navbar.styles";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "../../_animations/animations.scss";
import { Twirl as Hamburger } from 'hamburger-react';

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const [toggleMenu, setToggleMenu] = useState(false);

  const router = useRouter();

  const handleMenuLinks = (route) => {
    setToggleMenu(false);
    router.push(route);
  };

  return (
    <NavContainer>
      <FirstDiv>
        <h4 onClick={() => router.push("/")}>LEGIONARY</h4>
      </FirstDiv>
      <SecondDiv>
        <p onClick={() => router.push("/my-workout")}>My Workout Plan</p>
        {user.id ? (
          <p className="username" onClick={() => router.push("/profile")}>
            {user.name}
          </p>
        ) : (
          <p onClick={() => router.push("/signin")}>Login</p>
        )}
      </SecondDiv>

      <SmallScreenContainer>
        <Hamburger rounded size={25} toggled={toggleMenu} onToggle={(toggle) => {setToggleMenu(toggle)}}/>
        <SmallScreen className={`${toggleMenu && "navbar-slide-down"}`} $toggle={toggleMenu}>
          <ul>
            <li><p onClick={() => handleMenuLinks("/my-workout")}>My Workout Plan</p></li>
            <li>
              {user.id ? (
                <p className="username" onClick={() => handleMenuLinks("/profile")}>{user.name}</p>
              ) : (
                <p onClick={() => handleMenuLinks("/signin")}>Log In</p>
              )}
            </li>
          </ul>
        </SmallScreen>
      </SmallScreenContainer>
    </NavContainer>
  );
};

export default Navbar;
