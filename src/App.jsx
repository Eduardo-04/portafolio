import { useState } from 'react';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';
import Window from './components/Window';
import { AboutMe } from './components/sections/AboutMe';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';

export default function App() {
  const [windows, setWindows] = useState({
    about: { open: false, minimized: false },
    projects: { open: false, minimized: false },
    contact: { open: false, minimized: false },
    viewer: { open: false, minimized: false },
  });

  // Estados para la galería
  const [gallery, setGallery] = useState({ title: '', images: [] });
  const [currentIndex, setCurrentIndex] = useState(0);

  const openWindow = (name) => setWindows(prev => ({
    ...prev,
    [name]: { open: true, minimized: false }
  }));

  const closeWindow = (name) => setWindows(prev => ({
    ...prev,
    [name]: { open: false, minimized: false }
  }));

  const toggleMinimize = (name) => setWindows(prev => ({
    ...prev,
    [name]: { ...prev[name], minimized: !prev[name].minimized }
  }));

  // Función para abrir galería (recibe array de imágenes)
  const handleViewImage = (title, images) => {
    setGallery({ title, images });
    setCurrentIndex(0);
    openWindow('viewer');
  };

  const nextImg = () => setCurrentIndex(prev => (prev + 1) % gallery.images.length);
  const prevImg = () => setCurrentIndex(prev => (prev - 1 + gallery.images.length) % gallery.images.length);

  return (
    <div className="relative min-h-screen overflow-hidden font-sans select-none bg-black">
      <Desktop onOpen={openWindow} />

      {windows.about.open && !windows.about.minimized && (
        <Window id="about" title="Sobre Mí" onClose={closeWindow} onMinimize={toggleMinimize}>
          <AboutMe />
        </Window>
      )}

      {windows.projects.open && !windows.projects.minimized && (
        <Window id="projects" title="Proyectos" onClose={closeWindow} onMinimize={toggleMinimize}>
          <Projects onViewImage={handleViewImage} />
        </Window>
      )}

      {windows.contact.open && !windows.contact.minimized && (
        <Window id="contact" title="Contacto" onClose={closeWindow} onMinimize={toggleMinimize}>
          <Contact />
        </Window>
      )}

      {/* VISUALIZADOR DE GALERÍA */}
      {windows.viewer.open && !windows.viewer.minimized && (
        <Window id="viewer" title={`Visualizador - ${gallery.title}`} onClose={closeWindow} onMinimize={toggleMinimize}>
          <div className="flex flex-col items-center gap-4 bg-[#ece9d8] p-2">
            
            {/* Contenedor de Imagen con Flechas */}
            <div className="relative bg-black border-2 border-gray-800 shadow-inner flex justify-center items-center overflow-hidden w-full h-[450px]">
              <img 
                src={gallery.images[currentIndex]} 
                alt={`${gallery.title} ${currentIndex + 1}`}
                className="max-w-full max-h-full object-contain"
                key={currentIndex} // Para forzar re-render de animación si la hay
              />

              {gallery.images.length > 1 && (
                <>
                  <button onClick={prevImg} className="absolute left-2 bg-[#ece9d8] border-2 border-white border-r-gray-600 border-b-gray-600 px-2 py-4 font-bold shadow-md hover:bg-white active:border-inset">{"<"}</button>
                  <button onClick={nextImg} className="absolute right-2 bg-[#ece9d8] border-2 border-white border-r-gray-600 border-b-gray-600 px-2 py-4 font-bold shadow-md hover:bg-white active:border-inset">{">"}</button>
                </>
              )}
            </div>

            {/* Barra de info inferior */}
            <div className="w-full bg-[#f1f1f1] border border-gray-400 p-2 flex justify-between items-center text-[10px] font-bold text-gray-700">
              <div className="flex gap-4">
                <span>IMAGEN {currentIndex + 1} DE {gallery.images.length}</span>
                <span className="text-blue-700">{gallery.title.toUpperCase()}_{currentIndex + 1}.JPG</span>
              </div>
              <span className="hidden md:inline italic text-gray-400 tracking-tighter">GINCODE_VIEWER_PRO.EXE</span>
            </div>
          </div>
        </Window>
      )}

      <Taskbar windows={windows} onToggleMinimize={toggleMinimize} onOpen={openWindow} />
    </div>
  );
}