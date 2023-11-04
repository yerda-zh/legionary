"use client";
import {
  NavContainer,
  FirstDiv,
  SecondDiv,
  SmallScreenContainer,
  MenuIcon,
  SmallScreen,
  CloseIcon,
  SmallScreenLinks,
} from "./navbar.styles";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "../../_animations/animations.scss";

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
        <p onClick={() => router.push("/")}>LEGIONARY</p>
      </FirstDiv>
      <SecondDiv>
        <p onClick={() => router.push("/my-workout")}>My Workout Plan</p>
        {user.id ? (
          <p className="username" onClick={() => router.push("/profile")}>
            {user.name}
          </p>
        ) : (
          <p onClick={() => router.push("/signin")}>Log In</p>
        )}
      </SecondDiv>

      <SmallScreenContainer>
        <MenuIcon onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <SmallScreen className={`${toggleMenu && "navbar-slide-left"}`}>
            <CloseIcon onClick={() => setToggleMenu(false)} />
            <SmallScreenLinks>
              <li><p onClick={() => handleMenuLinks("/my-workout")}>My Workout Plan</p></li>
              <li>
                {user.id ? (
                  <p className="username" onClick={() => handleMenuLinks("/profile")}>{user.name}</p>
                ) : (
                  <p onClick={() => handleMenuLinks("/signin")}>Log In</p>
                )}
              </li>
            </SmallScreenLinks>
          </SmallScreen>
        )}
      </SmallScreenContainer>
    </NavContainer>
  );
};

export default Navbar;
