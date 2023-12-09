'use client'
import About from "./_components/about/About";
import Footer from "./_components/footer/Footer";
import Hero from "./_components/hero/Hero";
import Join from "./_components/join/Join";

export function getInitialProps() {
  return {
    props: {}, // Optional props to pass to the page
  };
}

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Join/>
      <Footer/>
    </div>
  );
}
