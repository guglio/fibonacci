import Header from './components/header/Header';
import Fibonacci from './components/fibonacci/Fibonacci';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='min-h-screen w-full'>
      <div className='w-[1024px] mx-auto'>
        <Header />
        <Fibonacci />
        <Footer />
      </div>
    </div>
  );
}

export default App;
