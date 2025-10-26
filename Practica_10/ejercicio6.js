/*
Crea una IIFE que inicialice una configuración de una aplicación con valores por defecto (tema, idioma, notificaciones). La IIFE debe verificar si ya existe una configuración guardada y solo inicializarla si no existe.
*/

(function() {
    const defaultConfig = {
        tema: 'claro',
        idioma: 'es',
        notificaciones: {
            email: true,
            push: true,
            sonido: true
        }
    };

    if (!localStorage.getItem('appConfig')) {
        localStorage.setItem('appConfig', JSON.stringify(defaultConfig));
        console.log('Configuración inicializada con valores por defecto:', defaultConfig);
    } else {
        console.log('Configuración existente:', JSON.parse(localStorage.getItem('appConfig')));
    }

    window.getConfig = function() {
        return JSON.parse(localStorage.getItem('appConfig'));
    };

    window.updateConfig = function(newConfig) {
        const currentConfig = JSON.parse(localStorage.getItem('appConfig'));
        const updatedConfig = { ...currentConfig, ...newConfig };
        localStorage.setItem('appConfig', JSON.stringify(updatedConfig));
        return updatedConfig;
    };
})();


console.log(getConfig());
updateConfig({ tema: 'oscuro' });