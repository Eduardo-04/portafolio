export const Contact = () => {
  return (
    <div className="flex flex-col gap-5 font-sans text-gray-800">
      
      {/* Encabezado con Estilo de Identidad */}
      <div className="flex items-center gap-4 p-4 bg-[#f1f1f1] border-2 border-white shadow-[inset_-2px_-2px_1px_rgba(0,0,0,0.2)]">
        <div className="bg-white p-1 border border-gray-400 shadow-sm">
          <img 
            src="https://i.pinimg.com/originals/57/45/4a/57454a331a4ef4c21bad22f9f7a2a411.gif" 
            className="w-16 h-16 object-contain" 
            alt="Contacto GIF"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#0038cb] leading-tight">Canales de Enlace</h2>
          <p className="text-xs text-gray-500 mt-1 uppercase tracking-tighter font-semibold">Kevin Eduardo Magariño Sibaja</p>
        </div>
      </div>

      <p className="text-[11px] px-1 text-gray-600">
        Selecciona una de las siguientes opciones para establecer comunicación o revisar mi trayectoria profesional:
      </p>

      {/* Tarjetas de Contacto */}
      <div className="flex flex-col gap-2">
        
        {/* LINKEDIN */}
        <a 
          href="https://www.linkedin.com/in/eduardo-magariño-594690379" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-between p-3 bg-white border border-gray-300 hover:border-[#0058e6] hover:bg-[#eaf2ff] group transition-all"
        >
          <div className="flex items-center gap-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" className="w-6 h-6 object-contain" alt="LinkedIn" />
            <div>
              <span className="block font-bold text-xs text-gray-700">LinkedIn</span>
              <span className="text-[10px] text-gray-400 group-hover:text-blue-600">Eduardo Magariño</span>
            </div>
          </div>
          <span className="text-blue-500 text-xs font-bold opacity-0 group-hover:opacity-100 mr-2">➜</span>
        </a>

        {/* GITHUB */}
        <a 
          href="https://github.com/Eduardo-04" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-between p-3 bg-white border border-gray-300 hover:border-black hover:bg-gray-50 group transition-all"
        >
          <div className="flex items-center gap-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" className="w-6 h-6 object-contain" alt="GitHub" />
            <div>
              <span className="block font-bold text-xs text-gray-700">GitHub</span>
              <span className="text-[10px] text-gray-400 group-hover:text-black">Eduardo-04</span>
            </div>
          </div>
          <span className="text-gray-400 text-xs font-bold opacity-0 group-hover:opacity-100 mr-2">➜</span>
        </a>

        {/* EMAIL */}
        <a 
          href="mailto:ed.magarino@gmail.com"
          className="flex items-center justify-between p-3 bg-white border border-gray-300 hover:border-[#ff9900] hover:bg-[#fff9f0] group transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center bg-[#0058e6] rounded-sm shadow-inner">
               <span className="text-white font-bold text-[10px]">@</span>
            </div>
            <div>
              <span className="block font-bold text-xs text-gray-700">Correo Electrónico</span>
              <span className="text-[10px] text-gray-400 group-hover:text-[#ff9900]">ed.magarino@gmail.com</span>
            </div>
          </div>
          <span className="text-orange-400 text-xs font-bold opacity-0 group-hover:opacity-100 mr-2">➜</span>
        </a>

      </div>

      {/* Nota al pie estilo sistema */}
      <div className="mt-2 p-3 bg-[#ffffcc] border border-[#e6e600] rounded-sm flex gap-3 items-center">
        <span className="text-xl">💡</span>
        <p className="text-[10px] text-gray-700 leading-tight">
          <strong>Nota:</strong> Mi tiempo de respuesta suele ser breve. Estoy abierto a propuestas de proyectos, 
          colaboraciones o consultas técnicas relacionadas con el desarrollo de software.
        </p>
      </div>

    </div>
  );
};