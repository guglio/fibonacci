import Fibonacci from './components/Fibonacci';

function App() {
  return (
    <div className='min-h-screen w-full'>
      <div className='w-5xl mx-auto flex flex-col min-h-screen'>
        <header className='pt-4'>
          <h1 className='text-3xl font-bold uppercase'>Fibonacci Calculator</h1>
        </header>
        <div className='flex-1'>
          <Fibonacci />
        </div>
      </div>
    </div>
  );
}

export default App;
