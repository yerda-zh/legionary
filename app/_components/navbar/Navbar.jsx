"use client";
import { NavContainer, FirstDiv, SecondDiv, UserP } from "./navbar.styles";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const router = useRouter();

  return (
    <NavContainer>
      <FirstDiv>
        <p onClick={() => router.push("/")}>LEGIONARY</p>
      </FirstDiv>
      <SecondDiv>
        <p onClick={() => router.push("/my-workout")}>My Workout Plan</p>
        {user.id ? (
          <p className="username" onClick={() => router.push("/profile")}>{user.name}</p>
        ) : (
          <p onClick={() => router.push("/signin")}>Log In</p>
        )}
      </SecondDiv>
    </NavContainer>
  );
};

export default Navbar;
