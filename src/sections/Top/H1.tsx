interface Props {
  children: React.ReactNode;
}

const H1: React.VFC<Props> = ({ children }) => {
  return (
    <h1 className="text-5xl sm:text-8xl font-bold tracking-wider text-gray-100 max-w-2xl m-auto" data-aos="fade-zoom-in">
      {children}
    </h1>
  );
};

export default H1;
