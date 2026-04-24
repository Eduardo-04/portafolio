import React, { useState } from 'react';

const Desktop = ({ onOpen }) => {
  const [selection, setSelection] = useState(null);

  const handleMouseDown = (e) => {
    if (e.target !== e.currentTarget) return;
    setSelection({ startX: e.clientX, startY: e.clientY, endX: e.clientX, endY: e.clientY });
  };

  const icons = [
    { 
      id: 'about', 
      label: 'Sobre Mí', 
      img: 'https://i.pinimg.com/originals/07/c6/81/07c681507e673bdf54c54c64bc89c1d6.gif' 
    },
    { 
      id: 'projects', 
      label: 'Proyectos', 
      // NUEVO GIF: Limpio y Cyber-Y2K
      img: 'https://i.pinimg.com/originals/10/c0/ab/10c0abe90fa36f45e02969cf483f95b5.gif' 
    },
    { 
      id: 'contact', 
      label: 'Contacto', 
      img: 'https://i.pinimg.com/originals/57/45/4a/57454a331a4ef4c21bad22f9f7a2a411.gif' 
    },
  ];

  return (
    <div 
      onMouseDown={handleMouseDown}
      onMouseMove={(e) => selection && setSelection(prev => ({ ...prev, endX: e.clientX, endY: e.clientY }))}
      onMouseUp={() => setSelection(null)}
      className="relative w-screen h-screen bg-[url('https://i.pinimg.com/1200x/80/e2/55/80e25548c12db7fe8389da7b8f77ae01.jpg')] bg-cover bg-center overflow-hidden"
    >
      {selection && (
        <div className="absolute border border-white/50 bg-blue-400/20 z-[999]"
          style={{
            left: Math.min(selection.startX, selection.endX),
            top: Math.min(selection.startY, selection.endY),
            width: Math.abs(selection.endX - selection.startX),
            height: Math.abs(selection.endY - selection.startY),
          }}
        />
      )}

      <div className="grid grid-flow-row auto-rows-max gap-8 p-6 w-fit h-full">
        {icons.map((icon) => (
          <div key={icon.id} onDoubleClick={() => onOpen(icon.id)} className="flex flex-col items-center justify-center w-24 p-2 cursor-pointer group relative z-10 select-none">
            
            {/* Contenedor del GIF */}
            <div className="w-16 h-16 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
              <img 
                src={icon.img} 
                className="max-w-full max-h-full object-contain filter contrast-125 brightness-110" 
                alt={icon.label} 
              />
            </div>

            {/* Texto de la leyenda */}
            <span className="text-white text-[11px] text-center mt-2 px-1 drop-shadow-[1px_2px_2px_rgba(0,0,0,1)] group-hover:bg-[#0b51c5] border border-transparent group-hover:border-dotted group-hover:border-white rounded-sm">
              {icon.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Desktop;