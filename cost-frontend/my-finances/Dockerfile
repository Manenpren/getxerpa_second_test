# Etapa de construcción
FROM node:16 AS angular-build

# Establece el directorio de trabajo en la carpeta de la aplicación Angular
WORKDIR /my-finances

# Copia los archivos de configuración (package.json) al directorio de trabajo
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Instala Angular CLI globalmente en el contenedor
RUN npm install -g @angular/cli

# Copia el resto del proyecto
COPY . .

# Ejecuta el comando ng build dentro del directorio del proyecto Angular
RUN ng build


# Etapa de producción
FROM nginx:alpine

COPY --from=angular-build /my-finances/dist/my-finances /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
