# Usa Node 22 como base
FROM node:22-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos
COPY . .

ARG REACT_APP_API_URL
ARG REACT_APP_PAYPAL_URL
ARG REACT_APP_API_PAYPAL

ENV REACT_APP_API_URL=$REACT_APP_API_URL
ENV REACT_APP_PAYPAL_URL=$REACT_APP_PAYPAL_URL
ENV REACT_APP_API_PAYPAL=$REACT_APP_API_PAYPAL

# Expone el puerto 3000 (ajústalo si es otro)
EXPOSE 3000

# Comando de arranque (ajústalo si usas otro)
CMD ["npm", "start"]