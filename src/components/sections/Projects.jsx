export const Projects = ({ onViewImage }) => {
  const projectList = [
    {
      id: "moku",
      title: "Moku",
      desc: "Plataforma móvil multiformato para el seguimiento de cine, libros, música y videojuegos. Identidad visual experimental enfocada en la curaduría personal.",
      tech: "React Native, Expo Go, Supabase",
      github: "https://github.com/Eduardo-04/lizard",
      images: Array.from({ length: 9 }, (_, i) => `/screenshots/moku${i + 1}.jpg`)
    },
    {
      id: "heatalert",
      title: "HeatAlert",
      desc: "Sistema de visualización geográfica de incidentes urbanos. Utiliza mapas de calor para el análisis de infraestructura en Tuxtla Gutiérrez, Chiapas.",
      tech: "React, Leaflet, Firebase",
      github: "https://github.com/Eduardo-04/HeatAlert",
      images: ["/screenshots/heatalert1.png", "/screenshots/heatalert2.png", "/screenshots/heatalert3.png"]
    },
    {
      id: "media",
      title: "MedIA-ECE",
      desc: "Gestión de expedientes clínicos electrónicos basada en la nube. Arquitectura segura diseñada para la optimización de flujos en redes médicas.",
      tech: "AWS, FastAPI, Tailwind CSS, Node.js, PostgreSQL (Todavia en desarrollo temprano)",
      github: null,
      // Actualizado: de media1.jpg a media5.jpg
      images: Array.from({ length: 5 }, (_, i) => `/screenshots/MedIA${i + 1}.png`)
    }
  ];

  return (
    <div className="font-sans space-y-6">
      <div className="bg-blue-900 text-white p-2 text-[10px] font-mono flex justify-between select-none">
        <span>C:\EDUARDO\PROYECTOS\LISTA.LOG</span>
        <span className="animate-pulse">CARGADO</span>
      </div>

      {projectList.map((p) => (
        <div key={p.id} className="border-2 border-gray-300 p-4 bg-gray-50 shadow-[2px_2px_0px_white] hover:bg-white transition-all">
          <div className="flex justify-between items-start">
            <h3 className="text-blue-800 font-bold text-lg underline decoration-dotted">{p.title}</h3>
            <span className="text-[9px] bg-blue-100 text-blue-800 px-2 py-0.5 border border-blue-300 font-bold uppercase tracking-widest">
              v1.0.4
            </span>
          </div>
          
          <p className="text-xs text-gray-600 mt-2 mb-4 leading-relaxed">{p.desc}</p>
          
          <div className="flex flex-wrap gap-2 mb-4 border-l-2 border-blue-200 pl-3">
            <span className="text-[10px] font-bold text-gray-400">STACK:</span>
            <span className="text-[10px] text-gray-500 font-mono italic">{p.tech}</span>
          </div>

          <div className="flex gap-2">
            <button 
              onClick={() => onViewImage(p.title, p.images)}
              className="bg-[#d4d0c8] border-2 border-white border-r-gray-600 border-b-gray-600 px-3 py-1 text-[11px] font-bold active:border-inset flex items-center gap-2 hover:bg-[#f5f5f5]"
            >
              <span>🖼️</span> Ver Galería ({p.images.length})
            </button>

            {p.github && (
              <button 
                onClick={() => window.open(p.github, '_blank')}
                className="bg-[#d4d0c8] border-2 border-white border-r-gray-600 border-b-gray-600 px-3 py-1 text-[11px] font-bold active:border-inset flex items-center gap-2 hover:bg-[#f5f5f5]"
              >
                <span>💻</span> Código
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};