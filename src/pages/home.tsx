
import { useState, useEffect } from 'react';


export function Home() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const koniec = new Date("2026-09-15").getTime();

    const interval = setInterval(() => {
      const teraz = new Date().getTime();
      const czas = koniec - teraz;

      if (czas < 0) {
        setTimeLeft("Wszystkiego najlepszego!");
        clearInterval(interval);
        return;
      }

      const s = Math.floor(czas / 1000) % 60;
      const m = Math.floor(czas / 1000 / 60) % 60;
      const h = Math.floor(czas / 1000 / 60 / 60) % 24;
      const d = Math.floor(czas / 1000 / 60 / 60 / 24);

      setTimeLeft(`${d}d ${h}h ${m}m ${s}s`);
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <>
  

      <aside className='float-right w-[20%] h-auto ml-[30px] mt-[20px] mr-[200px] ring-2 ring-blue-500'>
        <img src="/ja.jpeg" alt="Ja" className='h-[350px] w-full ' />
        <h6 className='text-[5px]'>PS. Nie mam lepszego zdjęcia </h6>
      </aside>
      
      <main className='w-[60%] h-auto'>
        <section className='m-[10px]'>
          <h3 className='font-bold text-blue-600'>Cześć!</h3>
          <h1 className='text-2xl font-bold'>Jestem Tymoteusz Ogrodnik</h1>
          <h5>Programista ◦ Pasjonat rolnictwa ◦ Fan dobrych gier</h5>

          <h5 className='m-[20px] text-wrap text-xs'> 
            Na co dzień interesuję się programowaniem i lubię rozwijać się w
            kierunku nowych technologii. <br/>Poza tym interesuję się rolnictwem i chętnie spędzam czas na świeżym powietrzu. <br/>
            W wolnych chwilach lubię także jeździć na ryby i odpoczywać nad wodą.
          </h5>
        </section>

        {/* linki */}
        <div className="flex items-center gap-4 pl-[20px]">
          <a href="https://github.com/Waldus16" target="_blank" rel="noreferrer"> 
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" className="w-[30px] rounded-full" />
          </a>

          <a href="https://www.tiktok.com/@waldemarowy" target="_blank" rel="noreferrer">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/016/716/450/small_2x/tiktok-icon-free-png.png" alt="Tiktok" className="w-[30px] rounded-full" />
          </a>

           <a href="https://steamcommunity.com/profiles/76561198264878591/" target="_blank" rel="noreferrer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLSsCYElq2w0XNaIBH3zNg5W4zlrnBTx4DNQ&s" alt="Tiktok" className="w-[30px] rounded-full" />
          </a>
        </div>

        {/* o mnie */}
        <section className='m-[30px] '>
          <h1 className='text-xl font-bold text-blue-500 p-[10px]'>O mnie!</h1>
          <ul className='list-disc pl-[20px]'>
            <li>Moje urodziny: 15-09-2009 <br />Do następnych zostało: <span className="font-bold text-red-500">{timeLeft}</span></li>
            <li>Interesuję się fotografią </li>
            <li>Moje kategorie prawa jazdy: T, AM</li>
          </ul>
        </section>
      </main>
    </>
  );
}