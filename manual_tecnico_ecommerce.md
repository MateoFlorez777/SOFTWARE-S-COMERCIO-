
# Manual Técnico – Sistema Ecommerce

## Índice
1. [Introducción General](#1-introducción-general)  
2. [Arquitectura del Sistema](#2-arquitectura-del-sistema)  
3. [Componentes del Sistema](#3-componentes-del-sistema)  
4. [Instalación y Despliegue](#4-instalación-y-despliegue)  
5. [Seguridad](#5-seguridad)  
6. [Pruebas](#6-pruebas)  
7. [Conclusión](#7-conclusión)  

---

## 1. Introducción General

### 🎯 Objetivo del Sistema
El objetivo del sistema es proveer una plataforma de comercio electrónico robusta, escalable y segura, permitiendo a usuarios comprar y vender productos, gestionar pedidos y administrar catálogos, con autenticación segura y experiencia de usuario moderna.

### 📄 Descripción General del Sistema
El sistema sigue una arquitectura **Cliente-Servidor**:

- **Frontend**: Aplicación React.js (Material UI) que consume servicios REST.
- **Backend**: API RESTful desarrollada en Java con Spring Boot.
- **Base de Datos**: MySQL para persistencia de datos.
- **Comunicación**: JSON sobre HTTP.
- **Autenticación**: JWT y verificación OTP por correo electrónico.

### 🔁 Flujos principales:
- Registro y autenticación de usuarios.
- Gestión de productos, pedidos y usuarios.
- Procesos de compra y venta.

---

## 2. Arquitectura del Sistema

### 🧩 Diagrama de Arquitectura General (formato texto)

```
+-------------------+      REST API      +-------------------+     JDBC     +-------------------+
|   Frontend        | <----------------> |    Backend        | <---------> |  Base de Datos    |
| (React.js + MUI)  | (JSON sobre HTTP)  | (Spring Boot MVC) |             |     (MySQL)       |
+-------------------+                   +-------------------+             +-------------------+
```

### 📐 Modelo MVC en el Sistema

- **Modelo**: Entidades Java (JPA) que representan datos y lógica de negocio.  
- **Vista**: Componentes React.js que muestran la información al usuario.  
- **Controlador**:  
  - Backend: Controladores Spring Boot que exponen endpoints REST.  
  - Frontend: Componentes que gestionan rutas y lógica de presentación.

### 🔄 Flujo Cliente-Servidor

1. El usuario interactúa con la interfaz React.
2. El frontend realiza peticiones HTTP (`fetch`/`axios`) a la API REST.
3. El backend procesa la petición (controlador → servicio → repositorio), accede a la BD y retorna una respuesta JSON.
4. El frontend procesa la respuesta y actualiza la UI.

---

## 3. Componentes del Sistema

### 🔧 Backend

- **Controladores**: Gestionan las rutas REST (`@RestController`).
```java
@RestController
@RequestMapping("/api/products")
public class ProductController {
    @GetMapping
    public List<Product> getAllProducts() { ... }
}
```

- **Servicios**: Lógica de negocio (`@Service`).  
- **Modelos**: Entidades JPA (`@Entity`).  
- **Repositorios**: Interfaces que extienden `JpaRepository`.

### 💻 Frontend

- **Componentes principales**:  
  - `App.tsx`, `Admin`, `Customer`, `Seller`, etc.

- **Rutas**: Definidas con React Router (`/login`, `/products`, `/admin`, ...).

- **Servicios API**:
```ts
// src/api/Product.ts
export const fetchProducts = () => axios.get('/api/products');
```

### 🗄️ Base de Datos

**Estructura de tablas (ejemplo):**

- `users (id, email, password, role, ...)`
- `products (id, name, price, stock, seller_id, ...)`
- `orders (id, user_id, total, status, ...)`
- `order_items (id, order_id, product_id, quantity, ...)`

**Relaciones clave:**

- Un usuario puede tener muchos pedidos.  
- Un pedido tiene muchos productos (relación N:M con tabla intermedia).

---

## 4. Instalación y Despliegue

### 🛠 Requisitos Previos

- Java 17+
- Node.js 18+
- MySQL 8+
- Maven 3.8+
- (Opcional) Docker

---

### ⚙️ Pasos para correr el Backend

1. Configura la base de datos en `src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ecommerce
spring.datasource.username=usuario
spring.datasource.password=contraseña
```

2. Instala dependencias y ejecuta:
```bash
./mvnw clean install
./mvnw spring-boot:run
```

---

### ⚙️ Pasos para correr el Frontend

1. Instala dependencias:
```bash
cd fontend-react
npm install
```

2. Ejecuta la app:
```bash
npm start
```

---

### 🔐 Configuración de variables de entorno

- **Backend**: Editar `application.properties` para DB, JWT, correo, etc.
- **Frontend**: Crear archivo `.env` en `fontend-react/`:
```env
REACT_APP_API_URL=http://localhost:8080/api
```

---

### 🧩 Inicialización de la Base de Datos

```sql
CREATE DATABASE ecommerce;
```

> Las tablas se generan automáticamente con JPA/Hibernate (gracias a `spring.jpa.hibernate.ddl-auto=update`).

---

## 5. Seguridad

### 🔒 Autenticación con JWT

- El backend genera un token JWT tras validar al usuario.
- El frontend lo guarda y lo envía en el header `Authorization`.

**Ejemplo backend:**
```java
@PostMapping("/login")
public ResponseEntity<?> login(@RequestBody LoginRequest req) {
    // ...validación...
    String jwt = jwtUtil.generateToken(user);
    return ResponseEntity.ok(new JwtResponse(jwt));
}
```

---

### 🔐 Flujo de verificación OTP

1. El backend envía un código OTP al correo del usuario (registro o recuperación).
2. El usuario ingresa el OTP para validar.
```java
String otp = otpService.generateOtp(email);
emailService.sendOtp(email, otp);
```

---

### ✅ Buenas prácticas implementadas

- Hash de contraseñas con BCrypt  
- Validación y sanitización de entradas  
- Uso recomendado de HTTPS  
- Tokens y OTPs con expiración  

---

## 6. Pruebas

### 🧪 Tipos de pruebas realizadas

- **Unitarias**: Servicios y clases utilitarias  
- **Integración**: Endpoints y flujo completo  
- **E2E (opcional)**: Cypress o Selenium

### 🧰 Herramientas utilizadas

- **Backend**: JUnit, Mockito, Spring Test  
- **Frontend**: Jest, React Testing Library

### ▶️ Cómo ejecutar las pruebas

- Backend:
```bash
./mvnw test
```

- Frontend:
```bash
npm test
```

---

## 7. Conclusión

### 🏁 Alcances del sistema

- Gestión completa de usuarios, productos, pedidos y pagos  
- Seguridad robusta con JWT y OTP  
- Arquitectura escalable y mantenible

---

### 🚀 Posibles mejoras futuras

- Integración con más pasarelas de pago  
- Arquitectura de microservicios  
- Mejoras en experiencia móvil  
- Monitorización/logging avanzado  
