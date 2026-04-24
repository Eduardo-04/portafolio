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
  });

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
          <Projects />
        </Window>
      )}

      {windows.contact.open && !windows.contact.minimized && (
        <Window id="contact" title="Contacto" onClose={closeWindow} onMinimize={toggleMinimize}>
          <Contact />
        </Window>
      )}

      <Taskbar windows={windows} onToggleMinimize={toggleMinimize} onOpen={openWindow} />
    </div>
  );
}