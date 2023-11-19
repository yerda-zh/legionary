'use client'
import { momentum } from "ldrs";

export default function Loading() {
  momentum.register();
  
  return (
    <div style={{width: '100%', height: '90dvh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <l-momentum size="47" speed="0.9" color="white"/>
    </div>
  );
}
