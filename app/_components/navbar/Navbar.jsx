"use client"
import { NavContainer } from "./navbar.styles";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const router = useRouter();

  return (
    <NavContainer>
        <div>
          <p>Logo</p>
        </div>
        <ul>
          <li onClick={()=>router.push("/")}>Home</li>
          <li>About</li>
          <li onClick={()=>router.push("/my-workout")}>My Workout Plan</li>
          <li>{user.name}</li>
        </ul>
    </NavContainer>
  )
}

export default Navbar;