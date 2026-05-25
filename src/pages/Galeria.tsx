import { useState } from 'react';


const listaZdjec = [
  '/galeria1.jpg',
  '/galeria2.jpg',
  '/galeria3.jpg',
  '/galeria4.jpg',
  '/galeria5.jpg',
  '/galeria6.jpg',
  '/galeria7.jpg',
  '/galeria8.jpg',
  '/galeria9.jpg'
];

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