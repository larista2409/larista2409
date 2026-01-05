import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code, Database, BarChart3, Server, Award, Briefcase, GraduationCap, Languages, ChevronDown } from 'lucide-react';

const NanoRobot = ({ delay, startY }) => {
  const [position, setPosition] = useState({ x: Math.random() * 100, y: startY });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(1);
      const interval = setInterval(() => {
        setPosition(prev => ({
          x: prev.x + (Math.random() - 0.5) * 2,
          y: prev.y + 0.5
        }));
      }, 50);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className="absolute w-1 h-1 bg-blue-400 rounded-full transition-opacity duration-1000"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        opacity: opacity,
        boxShadow: '0 0 4px rgba(59, 130, 246, 0.8)'
      }}
    />
  );
};

const CVWebsite = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['hero', 'experience', 'skills', 'education', 'contact'];
      const newVisible = new Set(visibleSections);
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.8) {
            newVisible.add(section);
          }
        }
      });
      
      setVisibleSections(newVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleSections]);

  const robots = Array.from({ length: 30 }, (_, i) => (
    <NanoRobot key={i} delay={i * 100} startY={-10 + (scrollY / 20)} />
  ));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {robots}
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative px-4">
        <div className={`text-center z-10 transition-all duration-1000 ${visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6 relative inline-block">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-6xl font-bold border-4 border-blue-400 shadow-2xl">
              LA
            </div>
            <div className="absolute inset-0 rounded-full bg-blue-400 opacity-20 animate-ping"></div>
          </div>
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500">
            Leandro Arista Orbe
          </h1>
          <h2 className="text-3xl text-blue-300 mb-6">Analista de Sistemas e Información</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Profesional con experiencia en administración de ERP, desarrollo web y análisis de datos. 
            Especializado en optimización de procesos y soluciones tecnológicas innovadoras.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://github.com/larista2409/larista2409" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              <Github size={20} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/leandro-arista-orbe-69a23b1a8/" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="mailto:larista2409@gmail.com"
               className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              <Mail size={20} /> Email
            </a>
          </div>
          <div className="mt-12 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-blue-400" />
          </div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <div className="bg-blue-900/30 backdrop-blur-sm py-4 px-4 border-y border-blue-700">
        <div className="container mx-auto flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-blue-400" />
            <span>larista2409@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-blue-400" />
            <span>+51 906 723 506</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-blue-400" />
            <span>Lima, Perú</span>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 relative">
        <div className={`container mx-auto max-w-6xl transition-all duration-1000 ${visibleSections.has('experience') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Briefcase className="text-blue-400" />
            Experiencia Profesional
          </h2>
          
          <div className="space-y-8">
            <div className="bg-blue-900/20 backdrop-blur-sm border border-blue-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
              <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                <h3 className="text-2xl font-bold text-blue-300">Analista de Información</h3>
                <span className="text-blue-400">Agosto 2023 - Presente</span>
              </div>
              <h4 className="text-xl text-gray-300 mb-4">Corrales & Cia SAC</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Desarrollo e implementación de sistema web de Help Desk, reduciendo 50% el tiempo de respuesta</li>
                <li>• Administración integral del ERP OSIS: usuarios, incidencias y coordinación con proveedores</li>
                <li>• Liderazgo en implementación de Pagos Masivos, mejorando 60% el tiempo de procesamiento</li>
                <li>• Creación de dashboards y KPIs en Power BI para análisis comercial de ventas</li>
                <li>• Desarrollo de ETLs en SQL Server para automatización de procesos críticos</li>
                <li>• Administración de servidores NAS, backups y seguridad de información</li>
              </ul>
            </div>

            <div className="bg-blue-900/20 backdrop-blur-sm border border-blue-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
              <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                <h3 className="text-2xl font-bold text-blue-300">Auxiliar de Sistemas</h3>
                <span className="text-blue-400">Mayo 2022 - Junio 2023</span>
              </div>
              <h4 className="text-xl text-gray-300 mb-4">Productos Artisan SAC (Dimax Corp SAC)</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Administración del ERP personalizado BsSoft con soporte técnico integral</li>
                <li>• Capacitación al personal en uso correcto del ERP</li>
                <li>• Configuración de reglas de bonificación y descuentos</li>
                <li>• Segmentación de cartera de clientes mediante MapInfo</li>
                <li>• Gestión de inventarios de equipos de cómputo y celulares</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-blue-950/30 relative">
        <div className={`container mx-auto max-w-6xl transition-all duration-1000 ${visibleSections.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Award className="text-blue-400" />
            Competencias Técnicas
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-900/20 backdrop-blur-sm border border-blue-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
              <Code className="text-blue-400 mb-3" size={32} />
              <h3 className="text-xl font-bold mb-3 text-blue-300">Desarrollo Web</h3>
              <p className="text-gray-300">PHP, JavaScript, HTML (nivel básico-intermedio)</p>
            </div>

            <div className="bg-blue-900/20 backdrop-blur-sm border border-blue-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
              <Database className="text-blue-400 mb-3" size={32} />
              <h3 className="text-xl font-bold mb-3 text-blue-300">Bases de Datos</h3>
              <p className="text-gray-300">SQL Server, ETL, Gestión de datos</p>
            </div>

            <div className="bg-blue-900/20 backdrop-blur-sm border border-blue-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
              <BarChart3 className="text-blue-400 mb-3" size={32} />
              <h3 className="text-xl font-bold mb-3 text-blue-300">Visualización</h3>
              <p className="text-gray-300">Power BI (Certificación avanzada)</p>
            </div>

            <div className="bg-blue-900/20 backdrop-blur-sm border border-blue-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
              <Server className="text-blue-400 mb-3" size={32} />
              <h3 className="text-xl font-bold mb-3 text-blue-300">Sistemas ERP</h3>
              <p className="text-gray-300">OSIS, BsSoft - Administración y soporte</p>
            </div>

            <div className="bg-blue-900/20 backdrop-blur-sm border border-blue-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
              <Award className="text-blue-400 mb-3" size={32} />
              <h3 className="text-xl font-bold mb-3 text-blue-300">Software Especializado</h3>
              <p className="text-gray-300">MapInfo, IVMS, Servidores NAS</p>
            </div>

            <div className="bg-blue-900/20 backdrop-blur-sm border border-blue-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
              <Code className="text-blue-400 mb-3" size={32} />
              <h3 className="text-xl font-bold mb-3 text-blue-300">Ofimática</h3>
              <p className="text-gray-300">Excel avanzado, Word, PowerPoint</p>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-blue-900/20 backdrop-blur-sm border border-blue-700 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-blue-300 flex items-center gap-2">
                <Award size={24} /> Fortalezas
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Puntual', 'Responsable', 'Perseverancia', 'Liderazgo', 'Trabajo en equipo'].map(strength => (
                  <span key={strength} className="bg-blue-700/50 px-4 py-2 rounded-full text-sm">
                    {strength}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-blue-900/20 backdrop-blur-sm border border-blue-700 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-blue-300 flex items-center gap-2">
                <Languages size={24} /> Idiomas
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Español</span>
                  <span className="text-blue-400">Nativo</span>
                </div>
                <div className="flex justify-between">
                  <span>Inglés</span>
                  <span className="text-blue-400">Básico II</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 relative">
        <div className={`container mx-auto max-w-6xl transition-all duration-1000 ${visibleSections.has('education') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <GraduationCap className="text-blue-400" />
            Educación
          </h2>
          
          <div className="space-y-6">
            <div className="bg-blue-900/20 backdrop-blur-sm border border-blue-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-300 mb-2">Certificado de Especialización</h3>
              <h4 className="text-xl text-gray-300 mb-2">Instituto de Investigación y Desarrollo de Administración y Tecnología</h4>
              <p className="text-blue-400">Graduado - 2024</p>
            </div>

            <div className="bg-blue-900/20 backdrop-blur-sm border border-blue-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-300 mb-2">Instituto Superior Técnico</h3>
              <h4 className="text-xl text-gray-300 mb-2">Instituto de Educación Superior Tecnológico Privado Peruano de Sistemas</h4>
              <p className="text-blue-400">Egresado - 2019 - 2022</p>
            </div>

            <div className="bg-blue-900/20 backdrop-blur-sm border border-blue-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-300 mb-2">Secundaria Completa</h3>
              <h4 className="text-xl text-gray-300 mb-2">I.E Heroes del Alto Cenepa 8181</h4>
              <p className="text-blue-400">Egresado - 2011 - 2016</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-blue-950/30 relative">
        <div className={`container mx-auto max-w-4xl text-center transition-all duration-1000 ${visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-8">¿Hablamos?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Estoy disponible para nuevos proyectos y oportunidades profesionales
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a href="mailto:larista2409@gmail.com"
               className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-110">
              <Mail size={24} /> Enviar Email
            </a>
            <a href="https://www.linkedin.com/in/leandro-arista-orbe-69a23b1a8/" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-110">
              <Linkedin size={24} /> Conectar
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 text-center border-t border-blue-800">
        <p className="text-gray-400">© 2025 Leandro Arista Orbe. Todos los derechos reservados.</p>
        <p className="text-gray-500 mt-2">Desarrollado con React y Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default CVWebsite;
