# MANUAL DE USUARIO: Software-S E-commerce

---

![Logo Software-S](./fontend-react/Assets/01-logo.png)

## Descripción

Este software de comercio electrónico está diseñado para la venta de **productos tecnológicos** como computadoras, componentes, accesorios y periféricos. Ofrece una experiencia de compra **rápida y segura** para los clientes, mientras que los vendedores pueden gestionar su catálogo de productos, el stock en tiempo real y las órdenes de compra de manera eficiente.

Además, el administrador tiene la capacidad de crear cupones de descuento y gestionar el estado de los vendedores. El sistema integra un **inventario inteligente** que actualiza las existencias automáticamente, genera alertas por bajo stock y permite realizar análisis de ventas para una toma de decisiones más eficiente.

---

## ¿Para quién es este software?

Este software es ideal para:

* **Estudiantes y universitarios:** Que buscan laptops, periféricos y accesorios.
* **Profesionales:** Como diseñadores, desarrolladores, etc., que requieren tecnología específica.
* **Gamers:** Interesados en equipos de alto rendimiento y accesorios especializados.
* **Emprendedores y freelancers:** Que necesitan tecnología para configurar su oficina en casa.
* **Tecnófilos y *early adopters*:** Apasionados por la última innovación tecnológica.

---

## 1. Requisitos del Usuario Final

Para garantizar el correcto funcionamiento del software, asegúrate de cumplir con los siguientes requisitos:

### Navegador Web Compatible

Utiliza una de las siguientes versiones o superiores para una experiencia óptima:

* **Google Chrome:** Versión 100+
* **Mozilla Firefox:** Versión 100+
* **Microsoft Edge:** Versión 100+
* **Safari:** Versión 13+

> **Nota:** El uso de navegadores antiguos podría causar problemas de visualización o funcionalidad.

### Conexión a Internet

* **Velocidad mínima:** 5 Mbps (se recomienda 10 Mbps para una mejor experiencia).
* **Conexión estable:** Evita redes intermitentes para prevenir interrupciones.

### Dispositivo Compatible

* **PC o portátil:** Con Windows 10 o superior, macOS 10.14 o superior, o Linux.
* **Tablet o smartphone:** Con Android 9+ o iOS 13+.
* **Resolución de pantalla mínima:** `1366x768 px`.

### Otros Requisitos

* **Cookies** habilitadas.
* **JavaScript** activado.
* Soporte para **HTML5 y CSS3**.

---

## 2. Acceso y Registro de Cliente

Aquí te explicamos cómo crear una cuenta de cliente y acceder a la plataforma:

### 2.1. Crear una Cuenta de Cliente

1.  En la **página de inicio**, haz clic en **INICIAR SESIÓN**.
    ![Página de Inicio](./fontend-react/Assets/02-cliente-pagina-inicio.png)

2.  Serás dirigido a la página de inicio de sesión. Haz clic en **CREAR CUENTA**.
    ![Formulario de Inicio de Sesión](./fontend-react/Assets/03-cliente-inicio-sesion.png)

3.  En la página de registro, ingresa tu **correo electrónico** y haz clic en **ENVIAR OTP**.
    ![Página de Registro](./fontend-react/Assets/04-cliente-registro.png)
    ![Enviar OTP](./fontend-react/Assets/05-cliente-enviar-otp.png)

4.  Recibirás una notificación confirmando que el OTP (One-Time Password) fue enviado. Revisa tu **correo electrónico** para obtener el código.
    ![Confirmación de envío de OTP](./fontend-react/Assets/06-cliente-confirmacion-otp.png)
    ![Correo con OTP](./fontend-react/Assets/07-cliente-correo-otp.png)

5.  Ingresa el **OTP recibido** y tu **nombre** en el formulario. Haz clic en **SIGNUP** para finalizar el registro.
    ![Formulario de registro completo](./fontend-react/Assets/08-cliente-formulario-registro-completo.png)

6.  Una vez registrado, tu **nombre de usuario** aparecerá en la esquina superior derecha de la pantalla, indicando que has iniciado sesión.
    ![Usuario con sesión iniciada](./fontend-react/Assets/09-cliente-sesion-iniciada.png)

---

## 3. Acceso como Vendedor

Sigue estos pasos para iniciar sesión como vendedor:

1.  En la página principal, busca la sección "Vende tus productos en línea" y haz clic en **INICIA COMO VENDEDOR**.
    ![Sección para iniciar como vendedor](./fontend-react/Assets/10-vendedor-seccion-inicio.png)

2.  Serás dirigido a la página de inicio de sesión para vendedores. Ingresa tu **correo electrónico de vendedor** y haz clic en **ENVIAR OTP**.
    ![Inicio de sesión de vendedor](./fontend-react/Assets/11-vendedor-inicio-sesion.png)

3.  Recibirás una confirmación del envío del OTP. Revisa tu **correo electrónico** para obtener el código.
    ![Confirmación de envío de OTP para vendedor](./fontend-react/Assets/12-vendedor-confirmacion-otp.png)
    ![Correo con OTP para vendedor](./fontend-react/Assets/13-vendedor-correo-otp.png)

4.  Ingresa el **código OTP** y haz clic en **INICIAR SESIÓN**.
    ![Formulario de inicio de sesión de vendedor completo](./fontend-react/Assets/14-vendedor-formulario-inicio-sesion-completo.png)

5.  Al iniciar sesión, serás redirigido al **panel de control del vendedor**, donde podrás gestionar tus productos y ventas.
    ![Panel de control del vendedor](./fontend-react/Assets/15-vendedor-panel-de-control.png)

---

## 4. Funciones de Cliente

Descubre cómo navegar, buscar productos y realizar compras en la plataforma:

### 4.1. Navegación

La **barra superior** de la página contiene un menú desplegable, un buscador, opciones de inicio de sesión, tu lista de deseos y el carrito de compras.
![Barra de navegación principal](./fontend-react/Assets/16-navegacion-principal.png)

El **menú desplegable** te permite acceder rápidamente a categorías de productos específicas.
![Menú desplegable de categorías](./fontend-react/Assets/17-menu-desplegable.png)

### 4.2. Búsqueda de Productos

1.  Haz clic en el **ícono de la lupa** en la barra superior para iniciar una búsqueda.
    ![Icono de búsqueda](./fontend-react/Assets/18-cliente-acciones-busqueda.png)
2.  En la nueva pestaña de búsqueda, ingresa el **nombre del producto** que deseas encontrar.
    ![Página de búsqueda de productos](./fontend-react/Assets/19-cliente-pagina-busqueda.png)
3.  Los **resultados de tu búsqueda** aparecerán en pantalla.
    ![Ejemplo de búsqueda de producto](./fontend-react/Assets/20-cliente-ejemplo-busqueda.png)

### 4.3. Lista de Deseos y Carrito de Compras

* **Lista de Deseos:** Haz clic en el **ícono del corazón** para ver los productos que has guardado para más tarde.
    ![Lista de deseos vacía](./fontend-react/Assets/21-cliente-lista-deseos-vacia.png)
* **Carrito de Compra:** Haz clic en el **ícono del carrito** para ver los productos que tienes listos para comprar.
    ![Carrito de compras vacío](./fontend-react/Assets/22-cliente-carrito-compras-vacio.png)

### 4.4. Proceso de Compra

1.  Haz clic en un producto para ver sus **detalles**, como precio y calificación.
    ![Vista detallada de un producto](./fontend-react/Assets/23-cliente-vista-producto.png)

2.  Ajusta la **cantidad** y agrega el producto a tu carrito haciendo clic en **ADD TO BAG**, o a tu lista de deseos seleccionando **WHISHLIST**.
    ![Acciones de compra de un producto](./fontend-react/Assets/24-cliente-acciones-compra.png)

3.  Así se ve un producto añadido a la **lista de deseos**.
    ![Producto en la lista de deseos](./fontend-react/Assets/25-cliente-producto-en-lista-deseos.png)

4.  En el **carrito de compra**, puedes aplicar cupones de descuento y proceder al pago haciendo clic en **COMPRAR AHORA**.
    ![Producto en el carrito de compra](./fontend-react/Assets/26-cliente-producto-en-carrito.png)

5.  Completa los **datos de pago**. Primero, haz clic en **Iniciar sesión** (si se te solicita) y luego en **Continuar y revisar pedido**.
    ![Formulario de inicio de sesión de pago](./fontend-react/Assets/27-proceso-pago-inicio-sesion.png)
    ![Selección de método de pago](./fontend-react/Assets/28-proceso-pago-metodo.png)

6.  Si el pago es exitoso, verás una **confirmación**. Haz clic en **Ver mis pedidos** para revisar los detalles de tu compra.
    ![Confirmación de pago exitoso](./fontend-react/Assets/29-proceso-pago-exitoso.png)
    ![Detalles del pedido](./fontend-react/Assets/30-cliente-mis-pedidos.png)

---

## 5. Módulo Vendedor

Al acceder al módulo vendedor, se desplegarán varios submódulos en la barra lateral para gestionar tu negocio:
![Submódulos del vendedor](./fontend-react/Assets/31-vendedor-sidebar-menu.png)

* **Panel de control:** Muestra tus ganancias y ventas totales, entre otras estadísticas importantes.
    ![Panel de control del vendedor con estadísticas](./fontend-react/Assets/32-vendedor-panel-control-estadisticas.png)
* **Ventas:** Visualiza el historial completo de tus ventas con detalles de cada transacción.
    ![Historial de ventas del vendedor](./fontend-react/Assets/33-vendedor-historial-ventas.png)
* **Productos:** Administra tus productos existentes. Puedes **actualizar el stock con un clic** o **editar la información** de cualquier producto.
    ![Lista de productos del vendedor](./fontend-react/Assets/34-vendedor-lista-productos.png)
    ![Actualización del estado del stock](./fontend-react/Assets/35-vendedor-actualizar-stock.png)
    ![Icono para actualizar producto](./fontend-react/Assets/36-vendedor-icono-actualizar-producto.png)
    ![Formulario para actualizar producto](./fontend-react/Assets/37-vendedor-formulario-actualizar-producto.png)
* **Agregar Producto:** Rellena el formulario con los datos del nuevo producto, sube una imagen y haz clic en "Agregar producto" para guardarlo en tu catálogo.
    ![Icono para agregar imagen](./fontend-react/Assets/38-vendedor-agregar-imagen-icono.png)
    ![Explorador de archivos](./fontend-react/Assets/39-vendedor-explorador-archivos.png)
    ![Formulario para agregar un nuevo producto](./fontend-react/Assets/40-vendedor-formulario-agregar-producto.png)
* **Pago:** Revisa los pagos recibidos por las compras de los clientes. Usa los **botones de paginación** para navegar por los registros de pagos.
    ![Lista de pagos recibidos - Página 1](./fontend-react/Assets/41-vendedor-pagos-recibidos-p1.png)
    ![Botón de paginación Siguiente](./fontend-react/Assets/42-vendedor-paginacion-siguiente-btn.png)
    ![Lista de pagos recibidos - Página 2](./fontend-react/Assets/43-vendedor-pagos-recibidos-p2.png)
    ![Regreso a Página 1 con botón Anterior activo](./fontend-react/Assets/44-vendedor-pagos-recibidos-p1-anterior.png)
* **Cuenta y Cerrar Sesión:** En la sección `Cuenta` puedes visualizar y actualizar tus datos personales y de vendedor. El botón `Cerrar sesión` en la misma barra lateral te regresará a la página de inicio de la tienda.
    ![Sección de cuenta del vendedor con opción para cerrar sesión](./fontend-react/Assets/45-vendedor-cuenta-detalles.png)

---

## 6. Módulo Administrador

El módulo de administrador te permite tener un control total sobre el funcionamiento de la plataforma:

### 6.1. Gestión de Vendedores

En el **Panel de control**, el administrador puede gestionar el estado de las cuentas de los vendedores. Al hacer clic en **CHANGE STATUS**, puedes cambiar el estado de "Pendiente de Verificación" a "Activa", por ejemplo.
![Panel de control del administrador para gestionar vendedores](./fontend-react/Assets/46-admin-panel-control-vendedores.png)
![Cambio de estado de un vendedor](./fontend-react/Assets/47-admin-cambiar-estado-vendedor.png)


### 6.2. Gestión de Cupones

* **Agregar nuevo cupón:** Rellena el formulario con los detalles del cupón y haz clic en **CREAR CUPÓN**.
 ![Alerta de cupón creado](./fontend-react/Assets/50-admin-alerta-cupon-creado.png)
 ![Estado del vendedor cambiado](./fontend-react/Assets/48-admin-estado-vendedor-cambiado.png) 
 * Una alerta confirmará la creación exitosa.
    ![Formulario para agregar un nuevo cupón](./fontend-react/Assets/49-admin-agregar-cupon.png)
   
* **Cupones:** En esta sección, puedes visualizar todos los cupones existentes, filtrarlos por estado y eliminarlos según sea necesario.
    ![Botón de la sección Cupones](./fontend-react/Assets/51-admin-seccion-cupones-btn.png)
    ![Tabla de cupones existentes](./fontend-react/Assets/52-admin-lista-cupones.png)
    ![Filtrar cupones por estado](./fontend-react/Assets/53-admin-filtrar-cupones.png)
    ![Botón para eliminar cupón](./fontend-react/Assets/54-admin-eliminar-cupon-btn.png)

### 6.3. Gestión de la Página de Inicio

En la página de inicio, el administrador puede controlar qué imágenes se muestran en la pantalla principal de la tienda.
![Gestión de imágenes de la página de inicio](./fontend-react/Assets/55-admin-pagina-inicio-imagenes.png)

### 6.4. Actualizar Categoría/Imagen de la Página de Inicio

Para actualizar una imagen de categoría, haz clic en el **ícono de lápiz**. Se desplegará un formulario donde podrás introducir la **URL de la nueva imagen**, y las **tres categorías** asociadas a ella.
![Formulario para actualizar una categoría/imagen](./fontend-react/Assets/56-admin-formulario-actualizar-categoria.png)