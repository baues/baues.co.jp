import React from 'react';

type Props = React.HTMLProps<HTMLDetailsElement>;

const Section: React.VFC<Props> = ({ children, className, ...others }) => {
  return (
    <section className={"relative pt-16 pb-16 min-h-screen " + className} id="about" {...others}>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">{children}</div>
      </div>
    </section>
  );
};

export default Section;
