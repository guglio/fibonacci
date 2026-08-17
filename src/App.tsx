import Fibonacci from './components/Fibonacci';

function App() {
  return (
    <div className='min-h-screen w-full'>
      <div className='w-[1024px] mx-auto flex flex-col'>
        <header className='text-4xl font-bold'>
          <h1>Fibonacci Calculator</h1>
        </header>
        <Fibonacci />
        <div className=''>
          <p>
            Created by{' '}
            <a
              href='https://guglielmo-turco.com'
              target='_blank'
              rel='noopener noreferrer'
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
