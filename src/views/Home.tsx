import Header from 'src/sections/Header';
import Top from 'src/sections/Top';
import Products from 'src/sections/Products';
import Footer from 'src/sections/Footer';

const Home: React.VFC = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        <Top />
        <Products />
      </main>
      <Footer />
    </div>
  );
}

export default Home;