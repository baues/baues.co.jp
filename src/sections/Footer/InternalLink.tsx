import Link from 'next/link';

interface Props {
  href: string | undefined;
  children: React.ReactNode;
}

const InternalLink: React.VFC<Props> = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">{children}</a>
    </Link>
  );
};

export default InternalLink;
