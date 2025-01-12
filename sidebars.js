// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // sidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  sidebar: [
    'index',
    {
      type: 'category',
      collapsible: false,
      collapsed: true,
      label: '📚 Información General',
      items: [
        'Normas',
        {
          type: 'category',
          label: '⁉️ Tutoriales',
          items: ['Tutoriales/Cómo-entrar-al-servidor', 'Tutoriales/Cómo-instalar-OptiFine', 'Tutoriales/Preguntas-frecuentes', 'Tutoriales/Comandos-Principales']
        }
      ],
    },
    {
      type: 'category',
      collapsed: true,
      collapsible: false,
      label: '🎮 Jugabilidad',
      items: [
        {
          type: 'category',
          label: '🔮 Magia',
          collapsible: true,
          items: ['Magia/Varita-mágicas', 'Magia/Hechizos', 'Magia/Escobas-voladoras', 'Magia/Resto-de-equipamiento-mágico'],
        },
        {
          type: 'category',
          label: '🏦 Economía',
          collapsible: true,
          items: ['Economía/Dinero-Golderones', 'Economía/Puntos-de-experiencia', 'Economía/Créditos-Mágicos', 'Economía/Créditos-de-Examen'],
        },
        {
          type: 'category',
          label: '🤹 Actividades',
          collapsible: true,
          items: ['Actividades/Educación-Mágica', 'Actividades/Misiones', 'Actividades/Acertijos', 'Actividades/Cofres-secretos', 'Actividades/Minijuegos', 'Actividades/Lucha-con-mobs']
        },
        {
          type: 'category',
          label: '🗺️ Movilidad',
          collapsible: true,
          items: ['Movilidad/Red-Fum-de-chimeneas', 'Movilidad/Trasladores', 'Movilidad/Tren-Expreso', 'Movilidad/Bus-Sonámbulo', 'Movilidad/Metro'],
        },
        {
          type: 'category',
          label: '🃏 Otros',
          collapsible: true,
          items: ['Otros/Rangos'] 
        },
      ]
    },
    {
      type: 'category',
      collapsed: true,
      collapsible: false,
      label: '💲 Tienda del Servidor',
      items: ['Tienda/Re-Selección', 'Tienda/Apodo', 'Tienda/Lealtades', 'Tienda/Varitas', 'Tienda/Sombreros', 'Tienda/Mascotas'],
    }
  ],

};

export default sidebars;
