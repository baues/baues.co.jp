const date = new Date();

const Copyright: React.VFC = () => {
  return <div className="text-sm text-gray-600 mr-4">The content on this website is licensed under <a href='https://github.com/baues/baues.co.jp/blob/main/LICENSE' className='border-b-2 hover:border-black'>the 3-Clause BSD License</a>. Copyright &copy; {date.getFullYear()} BAUES Inc.</div>;
};

export default Copyright;
