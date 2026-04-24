export const Projects = () => {
  const projectList = [
    {
      id: "01",
      title: "GeoAlert (Visualización Geográfica)",
      desc: "Aplicación web para el reporte ciudadano de incidentes urbanos en Tuxtla Gutiérrez. Implementa visualización de datos mediante mapas de calor para identificar zonas críticas de infraestructura y seguridad.",
      tech: "React, Leaflet, Firebase, PostgreSQL",
      status: "En desarrollo"
    },
    {
      id: "02",
      title: "MedIA-ECE (Expediente Clínico)",
      desc: "Sistema integral basado en la nube para la gestión de expedientes clínicos electrónicos. Diseñado para optimizar el flujo de información en redes de clínicas médicas.",
      tech: "React, Node.js, AWS, PostgreSQL",
      status: "Prototipo"
    },
    {
      id: "03",
      title: "Gincode Web & SEO",
      desc: "Desarrollo de sitios corporativos y landing pages optimizadas. Enfoque en rendimiento, posicionamiento en buscadores (SEO) y diseño adaptable.",
      tech: "WordPress, Elementor, JavaScript",
      status: "Completado"
    }
  ];

  return (
    <div className="font-sans space-y-4">
      {/* Encabezado estilo Explorador */}
      <div className="flex items-center gap-2 bg-[#f1f1f1] p-2 border border-gray-300 shadow-sm mb-4">
        <span className="text-xl">📁</span>
        <span className="text-xs font-bold text-gray-700 uppercase tracking-tight">C:\Usuarios\Eduardo\Mis_Proyectos</span>
      </div>

      <div className="space-y-4">
        {projectList.map((project) => (
          <div 
            key={project.id} 
            className="group p-4 bg-white border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all relative overflow-hidden"
          >
            {/* Indicador de estado */}
            <div className="absolute top-0 right-0 px-2 py-1 bg-blue-100 text-[9px] font-bold text-blue-700 uppercase border-l border-b border-blue-200">
              {project.status}
            </div>

            <div className="flex items-start gap-3">
              <div className="text-2xl mt-1 group-hover:scale-110 transition-transform">
                {project.id === "03" ? "🌐" : "⚙️"}
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm text-blue-800 group-hover:underline">
                  {project.title}
                </h3>
                <p className="text-[12px] text-gray-600 leading-snug">
                  {project.desc}
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Tecnologías:</span>
                  <span className="text-[11px] text-gray-500 italic">{project.tech}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer informativo */}
      <div className="mt-6 p-3 border-t border-dashed border-gray-300 flex justify-between items-center text-[10px] text-gray-500 italic">
        <p>* Proyectos desarrollados bajo estándares de calidad y mejora continua.</p>
        <p>Total: 3 Objeto(s)</p>
      </div>
    </div>
  );
};