import Main from './components/Main';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <Main />
        <About />
        <Work />
        <Contact />
      </div>
    </>
  );
}
