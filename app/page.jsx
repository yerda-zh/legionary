'use client'
import About from "./_components/about/About";
import Footer from "./_components/footer/Footer";
import Hero from "./_components/hero/Hero";
import Join from "./_components/join/Join";

export async function getServerSideProps() {
  return {
    props: {}, // Optional props to pass to the page
  };
}

export default function Home({ props }) {
  return (
    <div>
      <Hero/>
      <About/>
      <Join/>
      <Footer/>
    </div>
  );
}
