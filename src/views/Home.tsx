import Header from 'src/sections/Header';
import Top from 'src/sections/Top';
import Products from 'src/sections/Products';
import Company from 'src/sections/Company';
import Team from 'src/sections/Team';
import Footer from 'src/sections/Footer';

const Home: React.VFC = () => {
  return (
    <>
      <Header />
      <Top />
      <Products />
      <Company />
      <Team />
      <Footer />
    </>
  );
};

export default Home;
