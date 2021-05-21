import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import LogoImage from 'src/components/LogoImage';
import LocaleSwitcher from './LocaleSwitcher';

const Header: React.VFC = () => {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header className={`fixed w-full z-30 bg-gray-50 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-transparent shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0 flex items-center mr-4">
            <Link href="/" aria-label="BAUES">
              <a className="block">
                <LogoImage />
              </a>
            </Link>
          </div>
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <LocaleSwitcher />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
