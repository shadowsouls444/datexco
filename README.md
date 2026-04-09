# Instrucciones para ejecutar el programa DAXTECO

## 1. Preparar la base de datos
1. Abre MySQL (puede ser MySQL Workbench o consola).
2. Crea la base de datos llamada `datexco`:
   CREATE DATABASE datexco;
3. Asegúrate de que el servidor de MySQL esté corriendo.

## 2. Configuración del Backend
1. Abre Visual Studio Code y carga la carpeta raíz `daxteco`.
2. Ve a la carpeta `Backend`.
3. Crea un archivo `.env` con estas variables:
   PORT=3000
   API_KEY_IA=VyUOg3ceoTo2wR0mXRNSwO8Jf4TmHrXI
4. Abre una terminal en la carpeta raíz `daxteco` y navega al backend:
   cd Backend
5. Instala las dependencias:
   npm install
6. Inicia el backend:
   npm start
   - Si todo está correcto, la base de datos `datexco` ya debe contener dos tablas: `Usuarios` y `Misiones`.

## 3. Configuración del Frontend
1. Abre otra terminal y navega al frontend:
   cd Frontend
2. Instala las dependencias:
   npm install
3. Inicia el servidor de Angular:
   ng serve
4. La consola mostrara un link local, normalmente http://localhost:4200/. Abrelo en tu navegador.

Ahora deberías tener el backend corriendo en el puerto 3000 y el frontend en 4200.
