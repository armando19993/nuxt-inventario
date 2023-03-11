export default [
    {
      "name": "Menu",
      "isTitle": true
    },
    {
      "name": "Inicio",
      "url": "/",
      "icon": "grid-fill"
    },
    {
      "name": "Catalogos",
      "key": "layout",
      "icon": "stack",
      "submenu": [
        {
          "name": "Clientes",
          "url": "/catalogos/clientes/index"
        },
        {
          "name": "Proveedores",
          "url": "/proveedores"
        },
        {
          "name": "Productos",
          "url": "/producto"
        },
      ]
    },
    {
      "name": "Configuraciones",
      "key": "layout",
      "icon": "gears",
      "submenu": [
        {
          "name": "Tipos de Documentos",
          "url": "/config/typesDocuments/index"
        },
      ]
    },
];
