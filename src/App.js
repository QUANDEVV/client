import React from 'react';


import { Sidebar, Navbar, Search, Charity} from './components';

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        <h1 className='font-xl text-white' ></h1>
        <Search />
        <Charity />
    

       
      </div>
    </div>
  )
}

export default App