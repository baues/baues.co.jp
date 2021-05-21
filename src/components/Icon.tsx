interface Props {
  children: React.ReactNode;
}

const Icon: React.VFC<Props> = ({ children }) => {
  return <div className="flex justify-center items-center w-10 h-10 bg-white rounded-full shadow flex-shrink-0 mr-3">{children}</div>;
};

export default Icon;
