import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import Image from 'next/image';

interface Props {
  href: string;
  tabKey: number;
  tab: number;
  src: string;
  alt: string;
}

const Products: React.VFC<Props> = ({ href, tabKey, tab, src, alt }) => {
  const [hover, setHover] = useState(false);

  return (
    <Transition
      show={tab === tabKey}
      appear={true}
      className="w-full"
      enter="transition ease-in-out duration-700 transform order-first"
      enterFrom="opacity-0 translate-y-16"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in-out duration-300 transform absolute"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 -translate-y-16"
    >
      <a href={href} target="_blank" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
        <div className={`relative inline-flex bg-gray-900 p-4 rounded ${hover && 'opacity-50'}`}>
          <Image className="md:max-w-none mx-auto rounded" src={src} alt={alt} width="500" height="250" />
        </div>
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${hover ? 'opacity-100' : 'opacity-0'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </a>
    </Transition>
  );
};

export default Products;
