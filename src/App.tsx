import Fibonacci from './components/Fibonacci';

function App() {
  return (
    <div className='min-h-screen w-full'>
      <div className='w-[1024px] mx-auto flex flex-col min-h-screen'>
        <header className='text-4xl font-bold'>
          <h1>Fibonacci Calculator</h1>
        </header>
        <div className='flex-1'>
          <Fibonacci />
        </div>
        <div className='mt-auto'>
          <p>
            Created by{' '}
            <a
              href='https://guglielmo-turco.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-black underline-none uppercase'
            >
              Guglielmo Turco
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
