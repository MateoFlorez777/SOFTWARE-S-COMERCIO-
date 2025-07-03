# S FrontEnd - Software S

Este es el frontend de la aplicación de ecommerce, desarrollado con **React**, **TypeScript**, **Redux Toolkit**, **MUI**, **Tailwind CSS**, **Formik/Yup** y más.

---

## 🚀 Tecnologías usadas

- React + TypeScript
- Redux Toolkit
- Tailwind CSS
- MUI (Material UI)
- Axios
- React Router DOM

---

## ⚙️ Configuración e instalación

### 📋 Prerrequisitos

- Node.js
- npm o yarn

### 📥 Clonar el repositorio

```bash
git clone https://github.com/MateoFlorez777/FRONT-SOFTWARES.git
cd fontend-react
```

### 📦 Instalar dependencias

```bash
npm install
```

### ▶️ Ejecutar el frontend


```bash
npm start
```


### 🔗 Url - Front Vercel

https://softwares-gamma.vercel.app/


---


# S Backend - Software S

Este es el backend del sistema de ecommerce desarrollado con **Spring Boot**, **Spring Security**, **JWT**, **Java Mail Sender**, **PayPal SDK** y **MySQL**.

---

## 🚀 Tecnologías usadas

- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA
- JWT
- Java Mail Sender
- MySQL
- PayPal Java SDK
- Maven

---

## ⚙️ Configuración e instalación

### 📋 Prerrequisitos

- Java 21
- Maven
- MySQL
- IntelliJ IDEA (opcional)

### 📥 Clonar el repositorio

```bash
https://github.com/MateoFlorez777/Back-softwares
cd ecommerce-app/backend
```

### 🛠️ Crear la base de datos

```bash
CREATE DATABASE (nombre de la base de datos);
```


### 📝 Configurar el archivo application.properties

```bash
# MySQL
spring.datasource.url=jdbc:mysql://localhost:3306/ecommerce_db
spring.datasource.username=root
spring.datasource.password=TU_PASSWORD

# JPA
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true


# Java Mail Sender
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=tu-correo@gmail.com
spring.mail.password=tu-clave-app
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true

# PayPal
paypal.client.id=TU_CLIENT_ID
paypal.client.secret=TU_CLIENT_SECRET
paypal.mode=sandbox
```

### ▶️ Ejecutar el backend

```bash
mvn spring-boot:run
```

### 🔗 Url Back - Railway

https://perfect-passion-production.up.railway.app/

---

### 🔗 Url Back - Railway + Swagger

https://perfect-passion-production.up.railway.app/swagger-ui/index.html

---

### 🔗 Url Repositorio + Docker + Deploy

https://github.com/MateoFlorez777/Back-softwares

https://github.com/MateoFlorez777/FRONT-SOFTWARES

---

### Docker imagenes

#### Backend
https://hub.docker.com/repository/docker/santiagoinf/backend-s/general

---

#### Frontend
https://hub.docker.com/repository/docker/santiagoinf/frontend-s/general

---


### 🧑‍💻 Integrantes:

- Juan Mateo Rodríguez Flórez ☕
- Santiago Infante Guzmán ⚛️
- Andrés Felipe Culma Maceto ⚛️
- Yesid Eduardo Muñoz Medina ⚛️
