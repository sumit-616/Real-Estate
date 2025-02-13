import React from 'react'
import Header from './components/Header';
import About from './components/About';

export const App = () => {
  return (
    <div className='w-full overflow-hidden'>
        <Header />
        <About />
    </div>
  )
}

export default App;