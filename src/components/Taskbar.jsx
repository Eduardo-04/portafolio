import React, { useState } from 'react';

const Taskbar = ({ windows, onToggleMinimize }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isRestarting, setIsRestarting] = useState(false);
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const handleRestart = () => {
    setIsRestarting(true);
    setMenuOpen(false);
    setTimeout(() => window.location.reload(), 3000);
  };

  const techLogos = [
    { name: "Vite", url: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" },
    { name: "React", url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Tailwind", url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" }
  ];

  // Filtramos ventanas abiertas para mostrarlas en la barra
  const openWindows = Object.entries(windows).filter(([_, state]) => state.open);

  return (
    <>
      {isRestarting && (
        <div className="fixed inset-0 bg-[#0030ad] z-[9999] flex flex-col items-center justify-center text-white font-sans">
          <div className="flex items-center gap-4 mb-4">
            <img src="https://i.pinimg.com/736x/be/ff/5d/beff5d88c5ac2b7ff902891c506be276.jpg" className="w-20 h-20 rounded-full border-2 border-white shadow-lg" alt="Restart Logo" />
            <h1 className="text-3xl italic font-light tracking-tight">Ed <span className="font-bold">OS</span></h1>
          </div>
          <div className="w-64 h-2 bg-gray-600 rounded-full relative overflow-hidden border border-white/20">
             <div className="absolute h-full bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 w-12 animate-[move_2s_linear_infinite]" />
          </div>
          <p className="mt-4 text-xl tracking-wide">Reiniciando sistema...</p>
          <style>{`@keyframes move { 0% { left: -50px; } 100% { left: 260px; } }`}</style>
        </div>
      )}

      <div className="fixed bottom-0 w-full h-[32px] bg-gradient-to-b from-[#245edb] via-[#3f8cf3] to-[#245edb] border-t border-[#1a46b2] flex justify-between items-center z-[1000] shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] font-sans">
        
        {menuOpen && (
          <div className="absolute bottom-8 left-0 w-[280px] bg-[#d4d0c8] border-2 border-[#245edb] shadow-2xl rounded-tr-lg overflow-hidden flex">
            <div className="w-8 bg-gradient-to-b from-[#1855d1] to-[#3f8cf3] flex items-end justify-center pb-4">
               <span className="text-white/50 font-bold -rotate-90 whitespace-nowrap text-lg tracking-tighter select-none">Ed OS</span>
            </div>
            <div className="flex-1 bg-white">
              <div className="bg-gradient-to-r from-[#1855d1] to-[#3f8cf3] p-2 flex items-center gap-3 border-b border-white">
                <img src="https://github.com/Eduardo-04.png" className="w-10 h-10 rounded border-2 border-white shadow-sm" />
                <span className="text-white font-bold text-sm drop-shadow-md">Eduardo Magariño</span>
              </div>
              <div className="p-1">
                <div onClick={() => window.open('https://github.com/Eduardo-04')} className="p-2 text-xs font-bold uppercase tracking-tight text-blue-800 hover:bg-[#316ac5] hover:text-white cursor-pointer">Mis Repositorios</div>
                <div onClick={() => window.open('https://www.linkedin.com/in/eduardo-magariño-594690379')} className="p-2 text-xs font-bold uppercase tracking-tight text-blue-800 hover:bg-[#316ac5] hover:text-white cursor-pointer">LinkedIn</div>
                <div className="h-[1px] bg-gray-200 my-1 mx-2" />
                <div onClick={handleRestart} className="p-2 text-xs font-bold uppercase text-red-600 hover:bg-red-600 hover:text-white cursor-pointer mt-2 bg-gray-50 border-t border-gray-300">Cerrar Sesión</div>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center h-full">
          <button onClick={() => setMenuOpen(!menuOpen)} className="h-full bg-gradient-to-b from-[#388e3c] to-[#1b5e20] hover:from-[#43a047] px-3 rounded-tr-[15px] shadow-[inset_-2px_0_5px_rgba(255,255,255,0.2),2px_0_5px_rgba(0,0,0,0.5)] flex items-center gap-2 border-r border-green-950 active:brightness-90 transition-all">
            <img src="https://i.pinimg.com/736x/be/ff/5d/beff5d88c5ac2b7ff902891c506be276.jpg" className="w-7 h-7 rounded-full border border-white/50 object-cover shadow-sm" />
            <span className="text-white font-bold italic text-sm drop-shadow-md">Inicio</span>
          </button>
          
          {/* Legend + App Tabs */}
          <div className="flex ml-4 items-center gap-2 h-full">
            <div className="flex items-center bg-[#1c55c7] border border-blue-950 rounded-sm px-3 h-[24px] text-white text-[11px] shadow-inner mr-2">
               <div className="flex gap-2 border-r border-white/20 pr-2 mr-1">
                  {techLogos.map((tech, i) => <img key={i} src={tech.url} className="w-3 h-3" />)}
               </div>
               <span className="font-bold tracking-tight">Vite + React + Tailwind</span>
            </div>

            {/* Ventanas abiertas al lado de la leyenda */}
            {openWindows.map(([id, state]) => (
              <div 
                key={id}
                onClick={() => onToggleMinimize(id)}
                className={`flex items-center gap-2 px-3 h-[24px] rounded-sm text-white text-[11px] border border-blue-900 cursor-pointer select-none transition-all
                  ${state.minimized ? 'bg-[#1c55c7] brightness-75 shadow-none' : 'bg-[#3c81f3] shadow-inner shadow-black/30'}`}
              >
                <span className="capitalize font-medium">{id === 'about' ? 'Sobre Mí' : id}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0b96e3] h-full px-5 flex items-center text-white text-[11px] border-l border-[#0a77b3] shadow-[inset_3px_0_6px_rgba(0,0,0,0.2)] font-bold">
          {time}
        </div>
      </div>
    </>
  );
};

export default Taskbar;