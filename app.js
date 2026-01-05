const { useState, useEffect } = React;
const { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Code, 
  Database, 
  BarChart3, 
  Server, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Languages, 
  ChevronDown 
} = lucide;

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

  return React.createElement('div', {
    className: "absolute w-1 h-1 bg-blue-400 rounded-full transition-opacity duration-1000",
    style: {
      left: `${position.x}%`,
      top: `${position.y}%`,
      opacity: opacity,
      boxShadow: '0 0 4px rgba(59, 130, 246, 0.8)'
    }
  });
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

  const robots = Array.from({ length: 30 }, (_, i) => 
    React.createElement(NanoRobot, { key: i, delay: i * 100, startY: -10 + (scrollY / 20) })
  );

  return React.createElement('div', {
    className: "min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden"
  }, [
    ...robots,
    
    // Hero Section
    React.createElement('section', {
      id: 'hero',
      className: 'min-h-screen flex items-center justify-center relative px-4',
      key: 'hero'
    }, 
      React.createElement('div', {
        className: `text-center z-10 transition-all duration-1000 ${visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`
      }, [
        React.createElement('div', { className: 'mb-6 relative inline-block', key: 'avatar' }, [
          React.createElement('div', {
            className: 'w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-6xl font-bold border-4 border-blue-400 shadow-2xl',
            key: 'avatar-circle'
          }, 'LA'),
          React.createElement('div', {
            className: 'absolute inset-0 rounded-full bg-blue-400 opacity-20 animate-ping',
            key: 'avatar-ping'
          })
        ]),
        React.createElement('h1', {
          className: 'text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500',
          key: 'name'
        }, 'Leandro Arista Orbe'),
        React.createElement('h2', {
          className: 'text-3xl text-blue-300 mb-6',
          key: 'title'
        }, 'Analista de Sistemas e Información'),
        React.createElement('p', {
          className: 'text-xl text-gray-300 max-w-2xl mx-auto mb-8',
          key: 'description'
        }, 'Profesional con experiencia en administración de ERP, desarrollo web y análisis de datos. Especializado en optimización de procesos y soluciones tecnológicas innovadoras.'),
        React.createElement('div', {
          className: 'flex gap-4 justify-center flex-wrap',
          key: 'social-links'
        }, [
          React.createElement('a', {
            href: 'https://github.com/larista2409/larista2409',
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105',
            key: 'github'
          }, [
            React.createElement(Github, { size: 20, key: 'icon' }),
            ' GitHub'
          ]),
          React.createElement('a', {
            href: 'https://www.linkedin.com/in/leandro-arista-orbe-69a23b1a8/',
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105',
            key: 'linkedin'
          }, [
            React.createElement(Linkedin, { size: 20, key: 'icon' }),
            ' LinkedIn'
          ]),
          React.createElement('a', {
            href: 'mailto:larista2409@gmail.com',
            className: 'flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105',
            key: 'email'
          }, [
            React.createElement(Mail, { size: 20, key: 'icon' }),
            ' Email'
          ])
        ]),
        React.createElement('div', {
          className: 'mt-12 animate-bounce',
          key: 'scroll-indicator'
        }, React.createElement(ChevronDown, { size: 32, className: 'mx-auto text-blue-400' }))
      ])
    ),

    // Contact Info Bar
    React.createElement('div', {
      className: 'bg-blue-900/30 backdrop-blur-sm py-4 px-4 border-y border-blue-700',
      key: 'contact-bar'
    },
      React.createElement('div', {
        className: 'container mx-auto flex flex-wrap justify-center gap-6 text-sm'
      }, [
        React.createElement('div', {
          className: 'flex items-center gap-2',
          key: 'email'
        }, [
          React.createElement(Mail, { size: 16, className: 'text-blue-400', key: 'icon' }),
          React.createElement('span', { key: 'text' }, 'larista2409@gmail.com')
        ]),
        React.createElement('div', {
          className: 'flex items-center gap-2',
          key: 'phone'
        }, [
          React.createElement(Phone, { size: 16, className: 'text-blue-400', key: 'icon' }),
          React.createElement('span', { key: 'text' }, '+51 906 723 506')
        ]),
        React.createElement('div', {
          className: 'flex items-center gap-2',
          key: 'location'
        }, [
          React.createElement(MapPin, { size: 16, className: 'text-blue-400', key: 'icon' }),
          React.createElement('span', { key: 'text' }, 'Lima, Perú')
        ])
      ])
    ),

    // Experience Section
    React.createElement('section', {
      id: 'experience',
      className: 'py-20 px-4 relative',
      key: 'experience'
    },
      React.createElement('div', {
        className: `container mx-auto max-w-6xl transition-all duration-1000 ${visibleSections.has('experience') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`
      }, [
        React.createElement('h2', {
          className: 'text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3',
          key: 'title'
        }, [
          React.createElement(Briefcase, { className: 'text-blue-400', key: 'icon' }),
          'Experiencia Profesional'
        ]),
        React.createElement('div', {
          className: 'space-y-8',
          key: 'jobs'
        }, [
          React.createElement('div', {
            className: 'bg-blue-900/20 backdrop-blur-sm border border-blue-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 transform hover:scale-105',
            key: 'job1'
          }, [
            React.createElement('div', {
              className: 'flex justify-between items-start mb-3 flex-wrap gap-2',
              key: 'header'
            }, [
              React.createElement('h3', {
                className: 'text-2xl font-bold text-blue-300',
                key: 'position'
              }, 'Analista de Información'),
              React.createElement('span', {
                className: 'text-blue-400',
                key: 'date'
              }, 'Agosto 2023 - Presente')
            ]),
            React.createElement('h4', {
              className: 'text-xl text-gray-300 mb-4',
              key: 'company'
            }, 'Corrales & Cia SAC'),
            React.createElement('ul', {
              className: 'space-y-2 text-gray-300',
              key: 'responsibilities'
            }, [
              React.createElement('li', { key: '1' }, '• Desarrollo e implementación de sistema web de Help Desk, reduciendo 50% el tiempo de respuesta'),
              React.createElement('li', { key: '2' }, '• Administración integral del ERP OSIS: usuarios, incidencias y coordinación con proveedores'),
              React.createElement('li', { key: '3' }, '• Liderazgo en implementación de Pagos Masivos, mejorando 60% el tiempo de procesamiento'),
              React.createElement('li', { key: '4' }, '• Creación de dashboards y KPIs en Power BI para análisis comercial de ventas'),
              React.createElement('li', { key: '5' }, '• Desarrollo de ETLs en SQL Server para automatización de procesos críticos'),
              React.createElement('li', { key: '6' }, '• Administración de servidores NAS, backups y seguridad de información')
            ])
          ]),
          React.createElement('div', {
            className: 'bg-blue-900/20 backdrop-blur-sm border border-blue-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 transform hover:scale-105',
            key: 'job2'
          }, [
            React.createElement('div', {
              className: 'flex justify-between items-start mb-3 flex-wrap gap-2',
              key: 'header'
            }, [
              React.createElement('h3', {
                className: 'text-2xl font-bold text-blue-300',
                key: 'position'
              }, 'Auxiliar de Sistemas'),
              React.createElement('span', {
                className: 'text-blue-400',
                key: 'date'
              }, 'Mayo 2022 - Junio 2023')
            ]),
            React.createElement('h4', {
              className: 'text-xl text-gray-300 mb-4',
              key: 'company'
            }, 'Productos Artisan SAC (Dimax Corp SAC)'),
            React.createElement('ul', {
              className: 'space-y-2 text-gray-300',
              key: 'responsibilities'
            }, [
              React.createElement('li', { key: '1' }, '• Administración del ERP personalizado BsSoft con soporte técnico integral'),
              React.createElement('li', { key: '2' }, '• Capacitación al personal en uso correcto del ERP'),
              React.createElement('li', { key: '3' }, '• Configuración de reglas de bonificación y descuentos'),
              React.createElement('li', { key: '4' }, '• Segmentación de cartera de clientes mediante MapInfo'),
              React.createElement('li', { key: '5' }, '• Gestión de inventarios de equipos de cómputo y celulares')
            ])
          ])
        ])
      ])
    ),

    // Skills Section
    React.createElement('section', {
      id: 'skills',
      className: 'py-20 px-4 bg-blue-950/30 relative',
      key: 'skills'
    },
      React.createElement('div', {
        className: `container mx-auto max-w-6xl transition-all duration-1000 ${visibleSections.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`
      }, [
        React.createElement('h2', {
          className: 'text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3',
          key: 'title'
        }, [
          React.createElement(Award, { className: 'text-blue-400', key: 'icon' }),
          'Competencias Técnicas'
        ]),
        React.createElement('div', {
          className: 'grid md:grid-cols-2 lg:grid-cols-3 gap-6',
          key: 'skills-grid'
        }, [
          React.createElement('div', {
            className: 'bg-blue-900/20 backdrop-blur-sm border border-blue-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 transform hover:scale-105',
            key: 'skill1'
          }, [
            React.createElement(Code, { className: 'text-blue-400 mb-3', size: 32, key: 'icon' }),
            React.createElement('h3', { className: 'text-xl font-bold mb-3 text-blue-300', key: 'title' }, 'Desarrollo Web'),
            React.createElement('p', { className: 'text-gray-300', key: 'desc' }, 'PHP, JavaScript, HTML (nivel básico-intermedio)')
          ]),
          React.createElement('div', {
            className: 'bg-blue-900/20 backdrop-blur-sm border border-blue-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 transform hover:scale-105',
            key: 'skill2'
          }, [
            React.createElement(Database, { className: 'text-blue-400 mb-3', size: 32, key: 'icon' }),
            React.createElement('h3', { className: 'text-xl font-bold mb-3 text-blue-300', key: 'title' }, 'Bases de Datos'),
            React.createElement('p', { className: 'text-gray-300', key: 'desc' }, 'SQL Server, ETL, Gestión de datos')
          ]),
          React.createElement('div', {
            className: 'bg-blue-900/20 backdrop-blur-sm border border-blue-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 transform hover:scale-105',
            key: 'skill3'
          }, [
            React.createElement(BarChart3, { className: 'text-blue-400 mb-3', size: 32, key: 'icon' }),
            React.createElement('h3', { className: 'text-xl font-bold mb-3 text-blue-300', key: 'title' }, 'Visualización'),
            React.createElement('p', { className: 'text-gray-300', key: 'desc' }, 'Power BI (Certificación avanzada)')
          ]),
          React.createElement('div', {
            className: 'bg-blue-900/20 backdrop-blur-sm border border-blue-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 transform hover:scale-105',
            key: 'skill4'
          }, [
            React.createElement(Server, { className: 'text-blue-400 mb-3', size: 32, key: 'icon' }),
            React.createElement('h3', { className: 'text-xl font-bold mb-3 text-blue-300', key: 'title' }, 'Sistemas ERP'),
            React.createElement('p', { className: 'text-gray-300', key: 'desc' }, 'OSIS, BsSoft - Administración y soporte')
          ]),
          React.createElement('div', {
            className: 'bg-blue-900/20 backdrop-blur-sm border border-blue-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 transform hover:scale-105',
            key: 'skill5'
          }, [
            React.createElement(Award, { className: 'text-blue-400 mb-3', size: 32, key: 'icon' }),
            React.createElement('h3', { className: 'text-xl font-bold mb-3 text-blue-300', key: 'title' }, 'Software Especializado'),
            React.createElement('p', { className: 'text-gray-300', key: 'desc' }, 'MapInfo, IVMS, Servidores NAS')
          ]),
          React.createElement('div', {
            className: 'bg-blue-900/20 backdrop-blur-sm border border-blue-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 transform hover:scale-105',
            key: 'skill6'
          }, [
            React.createElement(Code, { className: 'text-blue-400 mb-3', size: 32, key: 'icon' }),
            React.createElement('h3', { className: 'text-xl font-bold mb-3 text-blue-300', key: 'title' }, 'Ofimática'),
            React.createElement('p', { className: 'text-gray-300', key: 'desc' }, 'Excel avanzado, Word, PowerPoint')
          ])
        ]),
        React.createElement('div', {
          className: 'mt-12 grid md:grid-cols-2 gap-6',
          key: 'additional'
        }, [
          React.createElement('div', {
            className: 'bg-blue-900/20 backdrop-blur-sm border border-blue-700 rounded-lg p-6',
            key: 'strengths'
          }, [
            React.createElement('h3', {
              className: 'text-2xl font-bold mb-4 text-blue-300 flex items-center gap-2',
              key: 'title'
            }, [
              React.createElement(Award, { size: 24, key: 'icon' }),
              ' Fortalezas'
            ]),
            React.createElement('div', {
              className: 'flex flex-wrap gap-3',
              key: 'list'
            }, ['Puntual', 'Responsable', 'Perseverancia', 'Liderazgo', 'Trabajo en equipo'].map(strength =>
              React.createElement('span', {
                key: strength,
                className: 'bg-blue-700/50 px-4 py-2 rounded-full text-sm'
              }, strength)
            ))
          ]),
          React.createElement('div', {
            className: 'bg-blue-900/20 backdrop-blur-sm border border-blue-700 rounded-lg p-6',
            key: 'languages'
          }, [
            React.createElement('h3', {
              className: 'text-2xl font-bold mb-4 text-blue-300 flex items-center gap-2',
              key: 'title'
            }, [
              React.createElement(Languages, { size: 24, key: 'icon' }),
              ' Idiomas'
            ]),
            React.createElement('div', {
              className: 'space-y-2',
              key: 'list'
            }, [
              React.createElement('div', {
                className: 'flex justify-between',
                key: 'spanish'
              }, [
                React.createElement('span', { key: 'lang' }, 'Español'),
                React.createElement('span', { className: 'text-blue-400', key: 'level' }, 'Nativo')
              ]),
              React.createElement('div', {
                className: 'flex justify-between',
                key: 'english'
              }, [
                React.createElement('span', { key: 'lang' }, 'Inglés'),
                React.createElement('span', { className: 'text-blue-400', key: 'level' }, 'Básico II')
              ])
            ])
          ])
        ])
      ])
    ),

    // Education Section
    React.createElement('section', {
      id: 'education',
      className: 'py-20 px-4 relative',
      key: 'education'
    },
      React.createElement('div', {
        className: `container mx-auto max-w-6xl transition-all duration-1000 ${visibleSections.has('education') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`
      }, [
        React.createElement('h2', {
          className: 'text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3',
          key: 'title'
        }, [
          React.createElement(GraduationCap, { className: 'text-blue-400', key: 'icon' }),
          'Educación'
        ]),
        React.createElement('div', {
          className: 'space-y-6',
          key: 'education-list'
        }, [
          React.createElement('div', {
            className: 'bg-blue-900/20 backdrop-blur-sm border border-blue-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300',
            key: 'edu1'
          }, [
            React.createElement('h3', { className: 'text-2xl font-bold text-blue-300 mb-2', key: 'degree' }, 'Certificado de Especialización'),
            React.createElement('h4', { className: 'text-xl text-gray-300 mb-2', key: 'institution' }, 'Instituto de Investigación y Desarrollo de Administración y Tecnología'),
            React.createElement('p', { className: 'text-blue-400', key: 'year' }, 'Graduado - 2024')
          ]),
          React.createElement('div', {
            className: 'bg-blue-900/20 backdrop-blur-sm border border-blue-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300',
            key: 'edu2'
          }, [
            React.createElement('h3', { className: 'text-2xl font-bold text-blue-300 mb-2', key: 'degree' }, 'Instituto Superior Técnico'),
            React.createElement('h4', { className: 'text-xl text-gray-300 mb-2', key: 'institution' }, 'Instituto de Educación Superior Tecnológico Privado Peruano de Sistemas'),
            React.createElement('p', { className: 'text-blue-400', key: 'year' }, 'Egresado - 2019 - 2022')
          ]),
          React.createElement('div', {
            className: 'bg-blue-900/20 backdrop-blur-sm border border-blue-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300',
            key: 'edu3'
          }, [
            React.createElement('h3', { className: 'text-2xl font-bold text-blue-300 mb-2', key: 'degree' }, 'Secundaria Completa'),
            React.createElement('h4', { className: 'text-xl text-gray-300 mb-2', key: 'institution' }, 'I.E Heroes del Alto Cenepa 8181'),
            React.createElement('p', { className: 'text-blue-400', key: 'year' }, 'Egresado - 2011 - 2016')
          ])
        ])
      ])
    ),

    // Contact Section
    React.createElement('section', {
      id: 'contact',
      className: 'py-20 px-4 bg-blue-950/30 relative',
      key: 'contact'
    },
      React.createElement('div', {
        className: `container mx-auto max-w-4xl text-center transition-all duration-1000 ${visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`
      }, [
        React.createElement('h2', { className: 'text-4xl font-bold mb-8', key: 'title' }, '¿Hablamos?'),
        React.createElement('p', { className: 'text-xl text-gray-300 mb-8', key: 'desc' }, 'Estoy disponible para nuevos proyectos y oportunidades profesionales'),
        React.createElement('div', {
          className: 'flex gap-6 justify-center flex-wrap',
          key: 'buttons'
        }, [
          React.createElement('a', {
            href: 'mailto:larista2409@gmail.com',
            className: 'flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-110',
            key: 'email'
          }, [
            React.createElement(Mail, { size: 24, key: 'icon' }),
            ' Enviar Email'
          ]),
          React.createElement('a', {
            href: 'https://www.linkedin.com/in/leandro-arista-orbe-69a23b1a8/',
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-110',
            key: 'linkedin'
          }, [
            React.createElement(Linkedin, { size: 24, key: 'icon' }),
            ' Conectar'
          ])
        ])
      ])
    ),

    // Footer
    React.createElement('footer', {
      className: 'bg-slate-950 py-8 text-center border-t border-blue-800',
      key: 'footer'
    }, [
      React.createElement('p', { className: 'text-gray-400', key: 'copyright' }, '© 2025 Leandro Arista Orbe. Todos los derechos reservados.'),
      React.createElement('p', { className: 'text-gray-500 mt-2', key: 'tech' }, 'Desarrollado con React y Tailwind CSS')
    ])
  ]);
};

// Renderizar la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(CVWebsite));
