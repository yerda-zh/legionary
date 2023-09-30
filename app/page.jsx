'use client'

import { useState } from "react";

export default function Home() {
  const [response, setResponse] = useState('ee');

  

  return (
    <div>
      <input/>
      <p>{response}</p>
    </div>
  )
}
