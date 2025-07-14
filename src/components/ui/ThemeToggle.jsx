import React, { useState, useEffect } from 'react';

/* 
  ThemeToggle Component - Comentado para uso futuro
  
  Este componente permite alternar entre los temas 'Original' y 'Subasta Segura'.
  Actualmente está deshabilitado ya que el tema por defecto se estableció como 'Subasta Segura'.
  
  Para reactivar:
  1. Descomentar este componente
  2. Importar en el layout principal
  3. Agregar <ThemeToggle /> donde se desee mostrar
*/

export const ThemeToggle = () => {
  const [isSecureTheme, setIsSecureTheme] = useState(true);

  // Inicializar el tema basado en el controlador JS
  useEffect(() => {
    if (window.themeController) {
      const currentTheme = window.themeController.getCurrentTheme();
      setIsSecureTheme(currentTheme === 'subasta');
    }
  }, []);

  const handleToggle = () => {
    const newTheme = !isSecureTheme;
    setIsSecureTheme(newTheme);
    
    // Aplicar el tema usando el controlador JS
    if (window.themeController) {
      const themeName = newTheme ? 'subasta' : 'original';
      window.themeController.applyTheme(themeName);
    }
  };

  const getToggleStyle = () => {
    return {
      width: '60px',
      height: '30px',
      borderRadius: '15px',
      backgroundColor: isSecureTheme ? '#17A2B8' : '#4F5DEC',
      border: 'none',
      position: 'relative',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
    };
  };

  const getCircleStyle = () => {
    return {
      width: '26px',
      height: '26px',
      borderRadius: '50%',
      backgroundColor: 'white',
      position: 'absolute',
      top: '2px',
      left: isSecureTheme ? '32px' : '2px',
      transition: 'all 0.3s ease',
      boxShadow: '0 1px 3px rgba(0,0,0,0.3)'
    };
  };

  return (
    <div className="theme-toggle position-fixed" 
         style={{
           top: '20px',
           right: '20px',
           zIndex: 1050
         }}>
      <button 
        onClick={handleToggle}
        style={getToggleStyle()}
        title={isSecureTheme ? 'Tema: Subasta Segura' : 'Tema: Subasta Original'}
      >
        <div style={getCircleStyle()}></div>
      </button>
    </div>
  );
};

export default ThemeToggle;