'use client';
import { useState } from "react";

export default function SignIn() {


  return (
    <div>
      <h1>Sign In</h1>
      <div>
        <p>Email</p>
        <input placeholder="Enter Email" type="email" required />
        <p>Password</p>
        <input placeholder="Enter Password" type="password" required />
        <button type="submit">Sign In</button>
      </div>
    </div>
  );
}
