import { useState } from 'react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const active = 1; // Example active state for highlighting (can be adjusted)

  const scrollTo = (selector: string, id: number) => {
    // Your scroll function here (can scroll to different sections)
    console.log('Scrolling to:', selector);
  };

  return (
    <nav className='fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-black text-white z-10'>
      <h1 className='text-xl cursor-pointer' onClick={() => scrollTo('#home', 1)}>
        Lucid Studio
      </h1>

      {/* Hamburger Icon */}
      <div className='block sm:hidden cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className={`w-6 h-0.5 bg-white transition-all duration-300 transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <div className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
        <div className={`w-6 h-0.5 bg-white transition-all duration-300 transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </div>

      {/* Mobile Menu (Hidden by default) */}
      <ul
        className={`sm:flex sm:items-center sm:space-x-6 absolute sm:static bg-black w-full sm:w-auto top-16 left-0 transform ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } transition-transform duration-300`}
      >
        {[
          { label: 'home', selector: '#home', id: 1 },
          { label: 'about', selector: '#about', id: 2 },
          { label: 'work', selector: '#work', id: 3 },
          { label: 'contact', selector: '#contact', id: 4 },
        ].map((item) => (
          <li
            key={item.id}
            className={`hover:text-purple-400 cursor-pointer ${active === item.id ? 'text-purple-400' : 'text-off-white'}`}
            onClick={() => scrollTo(item.selector, item.id)}
          >
            <button className='uppercase'>{item.label}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
