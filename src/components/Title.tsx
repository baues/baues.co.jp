import React from 'react';

type Props = React.HTMLProps<HTMLHeadingElement> & {
  title: string;
}

const Title: React.VFC<Props> = ({ title, className, ...others }) => {
  return (
    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
      <h1 className={"h2 mb-4 " + className} {...others}>{title}</h1>
    </div>
  );
};

export default Title;
