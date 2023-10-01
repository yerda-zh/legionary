"use client"
import { NavContainer } from "./navbar.styles";

const Navbar = () => {
  return (
    <NavContainer>
        <div>
          <p>Logo</p>
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>My Workout Plan</li>
        </ul>
    </NavContainer>
  )
}

export default Navbar;