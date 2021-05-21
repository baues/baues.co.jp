import Icon from 'src/components/Icon';

interface Props {
  href: string | undefined;
  ariaLabel: string | undefined;
  children: React.ReactNode;
}

const InternalLinkItem: React.VFC<Props> = ({ children, href, ariaLabel }) => {
  return (
    <li className="ml-4">
      <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-gray-600" aria-label={ariaLabel}>
        <Icon>
          {children}
        </Icon>
      </a>
    </li>
  );
};

export default InternalLinkItem;
