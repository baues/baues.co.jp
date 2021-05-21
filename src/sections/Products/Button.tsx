import Icon from 'src/components/Icon';

interface Props {
  title: string;
  description: string;
  icon: React.ReactNode;
  tabKey: number;
  tab: number;
  setTab: (tab: number) => void;
}

const Button: React.VFC<Props> = ({ title, description, icon, tabKey, tab, setTab }) => {
  return (
    <button
      className={`text-left w-full flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
        tab !== tabKey ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'
      }`}
      onClick={(e) => {
        e.preventDefault();
        setTab(tabKey);
      }}
    >
      <Icon>{icon}</Icon>
      <div>
        <div className="font-bold leading-snug tracking-tight mb-1">{title}</div>
        <div className="text-gray-600">{description}</div>
      </div>
    </button>
  );
};

export default Button;
