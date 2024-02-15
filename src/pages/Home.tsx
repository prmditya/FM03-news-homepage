import {
  Navbar,
  Hero,
  NewList,
  Featured,
  Footer,
} from "../components/components";

function Home() {
  return (
    <main>
      <Navbar />
      <article>
        <Hero />
        <NewList />
      </article>
      <Featured />
      <Footer />
    </main>
  );
}

export default Home;
