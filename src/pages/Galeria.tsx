import { useState } from 'react';


import zdj1 from '../assets/galeria(1).jpg';
import zdj2 from '../assets/galeria(2).jpg';
import zdj3 from '../assets/galeria(3).jpg';
import zdj4 from '../assets/galeria(4).jpg';
import zdj5 from '../assets/galeria(5).jpg';
import zdj6 from '../assets/galeria(6).jpg';
import zdj7 from '../assets/galeria(7).jpg';
import zdj8 from '../assets/galeria(8).jpg';
import zdj9 from '../assets/galeria(9).jpg';


const listaZdjec = [zdj1, zdj2, zdj3, zdj4, zdj5, zdj6, zdj7, zdj8, zdj9];

export function Galeria() {

  const [index, setIndex] = useState<number>(0);

 
  function next() {
    if (index >= listaZdjec.length - 1) {
      setIndex(0); 
    } else {
      setIndex(index + 1);
    }
  }


  function wczes() {
    if (index <= 0) {
      setIndex(listaZdjec.length - 1); 
    } else {
      setIndex(index - 1);
    }
  }


  return (


    <main className='text-center w-full min-h-[500px] flex flex-col items-center justify-center gap-4 py-10 zoom-50'>
      <h1 className="text-2xl font-bold">Moja Galeria</h1>
      <h1 className="text-xs ">(jeżeli zdjęcia wydają się mało wyraźne lub urwane warto otworzyć je w innej karcie)</h1>
      
      <div className="flex items-center gap-6">
    
        <button 
          onClick={wczes} 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          🡠 Poprzednie
        </button>

      
        <div className="w-[800px] h-[800px] flex items-center justify-center border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg bg-gray-100">
          <img 
            src={listaZdjec[index]} 
            alt={`Zdjęcie ${index + 1}`} 
            className="w-full h-full object-cover"
          />
        </div>

    
        <button 
          onClick={next} 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Następne 🡢
        </button>
      </div>

  
      <p className="text-gray-600 text-sm">Zdjęcie {index + 1} z {listaZdjec.length}</p>
    </main>
    
  );
}