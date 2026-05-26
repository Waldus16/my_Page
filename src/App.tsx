
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Galeria } from './pages/Galeria'; 
import { Home } from './pages/home'; 
import { Setup} from './pages/Setup';






function App() {
  return (
    <Router>
      {/* HEADER */}
      <header className='bg-[#1A1A2E] w-full flex sticky top-0 z-10'>
        <div className='w-[100%] flex items-center'> 
          <h1 className="text-3xl font-bold text-red-50 p-[10px]">TO</h1>
          <h3 className="text-xl font-bold text-red-50 p-[10px]">Tymoteusz Ogrodnik</h3>
          
          <Link to="/" className="text-xs font-bold text-red-50 p-[10px] ml-auto hover:bg-sky-700 m-[10px]">Główna</Link>
          <Link to="/setup" className="text-xs font-bold text-red-50 p-[10px] hover:bg-sky-700 m-[10px]"  style={{cursor: 'pointer'}}>Setup</Link>
          <Link to="/galeria" className="text-xs font-bold text-red-50 p-[10px] hover:bg-sky-700 m-[10px] ">Galeria</Link>
         
        </div>
      </header>

    {/* Ścieżki do  podstron */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Galeria />} />
         <Route path="/setup" element={<Setup />} />
      </Routes>

      {/* FOOTER*/}
      <footer className='bg-[#1A1A2E] w-full flex h-[30%] mt-[40px]'>
        <h1 className="text-white p-4 text-xs">© 2026 Tymoteusz Ogrodnik</h1>
      </footer>
    </Router>
  );
}

export default App;