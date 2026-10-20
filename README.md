# Maps Explorer 🗺️

Aplicación web desarrollada con Angular y Mapbox GL JS para explorar mapas interactivos, administrar marcadores y visualizar propiedades mediante mapas individuales.

## 🚀 Demo

🌐 **[Ver Maps Explorer en Netlify](https://map-explorer-web.netlify.app/#/fullscreen)**

## ✨ Funcionalidades

- **Mapa de pantalla completa:** navegación interactiva, control del nivel de zoom y visualización de coordenadas.
- **Marcadores:** visualización de marcadores en el mapa, navegación hacia su ubicación y eliminación mediante doble clic.
- **Propiedades:** tarjetas con información, descripciones, etiquetas y mapas individuales para cada propiedad.
- **Navegación entre páginas:** acceso a las distintas vistas desde una barra de navegación.
- **Interfaz responsiva:** diseño adaptable a diferentes tamaños de pantalla.

## 🛠️ Tecnologías

- Angular
- TypeScript
- Mapbox GL JS
- Tailwind CSS
- DaisyUI
- RxJS
- UUID
- dotenv para la configuración de variables de entorno

## 🚀 Instalación y ejecución

### Requisitos previos

- Node.js y npm compatibles con las versiones del proyecto.
- Una cuenta de [Mapbox](https://account.mapbox.com/) y un token de acceso público.

### 1. Clonar el repositorio

```bash
git clone https://github.com/AaronJasso12/maps-explorer-angular.git
cd maps-explorer-angular
```

### 2. Instalar las dependencias

```bash
npm install
```

### 3. Configurar las variables de entorno

Crea un archivo `.env` a partir de `.env.example`.

En Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Abre `.env` y configura tu token público de Mapbox:

```dotenv
MAPBOX_KEY=tu_token_publico_de_mapbox
```

### 4. Generar los archivos de configuración de Angular

```bash
npm run set-envs
```

Este comando ejecuta el script `scripts/set-envs.js`, que genera los archivos de configuración utilizados por Angular a partir de la variable `MAPBOX_KEY`.

### 5. Iniciar el servidor de desarrollo

```bash
npm start
```

Abre la dirección que indique la terminal, normalmente [http://localhost:4200](http://localhost:4200).

## 📦 Compilación para producción

Para generar la versión de producción:

```bash
npm run set-envs
npm run build
```

Los archivos compilados se generan dentro de `dist/`.

## 🔐 Seguridad

- El archivo `.env` y los archivos de configuración generados con el token no deben incluirse en Git.
- Los tokens públicos de Mapbox están diseñados para utilizarse en aplicaciones cliente. Configura las restricciones de URL y los permisos apropiados desde el panel de Mapbox.
- No utilices tokens secretos en el código del frontend.

## 📚 Propósito del proyecto

Proyecto de aprendizaje para practicar el desarrollo de aplicaciones con Angular, el uso de componentes reutilizables, la navegación entre páginas y la integración de mapas interactivos con Mapbox GL JS.
