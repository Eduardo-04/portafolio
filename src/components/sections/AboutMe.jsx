export const AboutMe = () => (
  <div className="font-sans space-y-6 text-gray-800">
    
    {/* Encabezado Profesional */}
    <div className="flex items-center gap-5 border-b-2 border-blue-200 pb-4">
      <div className="w-20 h-20 bg-white border border-gray-300 p-1 shadow-sm">
        <img 
          src="https://github.com/Eduardo-04.png" 
          alt="Perfil Eduardo" 
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-blue-900 leading-tight">Eduardo Magariño Sibaja</h2>
        <p className="text-sm font-medium text-gray-600">Estudiante de Ingeniería en Desarrollo de Software</p>
        <p className="text-xs text-blue-700 mt-1 uppercase tracking-wider">Tuxtla Gutiérrez, Chiapas</p>
      </div>
    </div>

    {/* Resumen Profesional */}
    <div className="space-y-4 text-[13.5px] leading-relaxed">
      <p>
        Soy estudiante del <strong>octavo semestre</strong> en la Universidad Autónoma de Chiapas (UNACH). 
        Mi formación académica se ha centrado en la creación de soluciones tecnológicas que resuelvan 
        problemas reales a través del desarrollo de software.
      </p>
      
      <p>
        Actualmente, me encuentro realizando mi servicio social en el <strong>Sistema Chiapaneco de Radio, Televisión y Cinematografía (SCHRTyC)</strong>, 
        donde participo en el redesarrollo y optimización de sus sistemas web. Mi objetivo a corto plazo es 
        integrarme a entornos profesionales donde pueda <strong>ganar experiencia</strong>, enfrentar retos técnicos de mayor escala y 
        contribuir al éxito de proyectos innovadores.
      </p>

      <div className="bg-blue-50 p-4 border-l-4 border-blue-600 italic">
        "Tengo una alta disposición para aprender nuevas tecnologías y metodologías de trabajo, 
        enfocándome siempre en la mejora continua y en la calidad del software que desarrollo."
      </div>
    </div>

    {/* Formación y Aptitudes */}
    <div className="grid grid-cols-2 gap-6 pt-2">
      <div>
        <h4 className="font-bold text-gray-700 border-b border-gray-300 mb-2 pb-1 text-sm uppercase">Tecnologías</h4>
        <ul className="list-none space-y-1 text-xs">
          <li>• React y desarrollo frontend moderno</li>
          <li>• JavaScript y lógica de programación</li>
          <li>• Maquetación con Tailwind CSS</li>
          <li>• Gestión de contenidos con WordPress</li>
          <li>• Python para automatización y backend</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-gray-700 border-b border-gray-300 mb-2 pb-1 text-sm uppercase">Intereses Profesionales</h4>
        <ul className="list-none space-y-1 text-xs">
          <li>• Arquitectura de Software</li>
          <li>• Visualización Geográfica de Datos</li>
          <li>• Optimización de Sistemas Web</li>
          <li>• Gestión de Bases de Datos</li>
        </ul>
      </div>
    </div>

    {/* Áreas de Interés Personal */}
    <div className="text-xs bg-gray-50 p-3 border border-gray-200">
      <p>
        <span className="font-bold text-gray-600">Intereses personales:</span> Me apasiona el aprendizaje 
        constante sobre nuevas tendencias tecnológicas, la producción musical, el cine de autor y el análisis de música contemporánea.
      </p>
    </div>

    {/* Pie de Página */}
    <div className="flex justify-between items-center text-[10px] text-gray-400 font-mono pt-2">
      <span>Actualizado: Abril 2026</span>
      <span>Estado: Disponible para residencias y proyectos</span>
    </div>
  </div>
);