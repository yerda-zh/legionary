'use client'
import { dotSpinner } from "ldrs";

export default function Loading() {
  dotSpinner.register();
  
  return (
    <div style={{width: '100%', height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <l-dot-spinner size="45" speed="0.9" color="white"/>
    </div>
  );
}
