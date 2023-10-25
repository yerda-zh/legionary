"use client";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { resetUser } from "../redux/userSlice";

export default function Profile() {
  const router = useRouter();

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const date = new Date(user.joined);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${month}-${day}-${year}`;

  const handleDeleteButton = () => {
    fetch("http://localhost:5000/delete", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: user.email,
      }),
    })
      .then((res) => res.json())
      .catch(console.log);

    dispatch(resetUser());
    router.push("/");
  };

  const handleSignOut = () => {
    dispatch(resetUser());
    router.push('/');
  }

  return (
    <div>
      <h1>My Profile</h1>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.bmi}</p>
      <p>{formattedDate}</p>
      <button onClick={handleSignOut}>Sign out</button>
      <button onClick={handleDeleteButton}>delete account</button>
    </div>
  );
}
