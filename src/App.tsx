import Header from './components/Header';
import Fibonacci from './components/Fibonacci';
import Footer from './components/Footer';

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
