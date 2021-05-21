import InternalLink from './InternalLink';

interface Props {
  href: string | undefined;
  children: React.ReactNode;
}

const InternalLinkItem: React.VFC<Props> = ({ children, href }) => {
  return (
    <li className="mb-2">
      <InternalLink href={href}>{children}</InternalLink>
    </li>
  );
};

export default InternalLinkItem;
