import React, { useState, useEffect, useCallback, useRef } from 'react';

const Window = ({ title, children, onClose, onMinimize, id }) => {
  const [pos, setPos] = useState({ x: 120 + Math.random() * 50, y: 60 + Math.random() * 50 });
  const [isDragging, setIsDragging] = useState(false);
  const rel = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    const boundingBox = e.currentTarget.parentElement.getBoundingClientRect();
    rel.current = { x: e.clientX - boundingBox.left, y: e.clientY - boundingBox.top };
    e.stopPropagation();
  };

  const onMouseMove = useCallback((e) => {
    if (!isDragging) return;
    
    let newX = e.clientX - rel.current.x;
    let newY = e.clientY - rel.current.y;

    // LIMITAR: Evita que la barra de título salga por arriba
    if (newY < 0) newY = 0;
    // Evita que se pierda por los lados
    if (newX < -400) newX = -400;
    if (newX > window.innerWidth - 100) newX = window.innerWidth - 100;

    setPos({ x: newX, y: newY });
  }, [isDragging]);

  useEffect(() => {
    if (isDragging) {
      const handleMouseUp = () => setIsDragging(false);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, onMouseMove]);

  return (
    <div 
      className="fixed bg-[#ece9d8] border-[3px] border-[#0058e6] rounded-t-[10px] shadow-2xl flex flex-col active:z-50"
      style={{ left: pos.x, top: pos.y, width: '520px', zIndex: isDragging ? 100 : 10, maxHeight: '85vh' }}
    >
      {/* Barra de Título */}
      <div onMouseDown={handleMouseDown} className="h-[30px] flex-shrink-0 bg-gradient-to-r from-[#0038cb] via-[#248df2] to-[#0038cb] flex justify-between items-center px-2 cursor-grab shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] select-none">
        <span className="text-white font-bold text-[13px] drop-shadow-[1px_1px_1px_rgba(0,0,0,0.8)] truncate pr-8">{title}</span>
        <div className="flex gap-[2px] flex-shrink-0">
          <button onClick={() => onMinimize(id)} className="w-[21px] h-[21px] bg-[#248df2] border border-white rounded shadow-inner text-white font-bold text-xs flex items-center justify-center hover:brightness-110">_</button>
          <button onClick={() => onClose(id)} className="w-[21px] h-[21px] bg-[#e04343] border border-white rounded shadow-inner text-white font-bold text-xs flex items-center justify-center hover:bg-red-600">✕</button>
        </div>
      </div>

      {/* Contenido Elástico */}
      <div className="p-[2px] bg-[#ece9d8] flex flex-col overflow-hidden">
        <div 
          className="bg-white border border-gray-500 p-5 overflow-y-auto text-black window-content custom-scrollbar"
          style={{ height: 'auto', maxHeight: '550px' }}
        >
          {children}
        </div>
      </div>

      {/* Barra de Estado inferior */}
      <div className="h-5 bg-[#ece9d8] border-t border-gray-400 px-2 flex items-center justify-between text-[10px] text-gray-600">
        <div className="flex items-center gap-2">
          <span>Listo</span>
        </div>
        <div className="font-bold">Eduardo Magariño OS</div>
      </div>
    </div>
  );
};

export default Window;