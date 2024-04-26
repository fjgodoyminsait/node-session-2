# NODE2 - Expressjs I - Proyecto base

## TOC

- [NODE2 - Expressjs I - Proyecto base](#node2---expressjs-i---proyecto-base)
  - [TOC](#toc)
  - [Introducción a Express.js](#introducción-a-expressjs)
    - [¿Qué es Express.js?](#qué-es-expressjs)
    - [¿Por qué usar Express.js?](#por-qué-usar-expressjs)
    - [Instalación de Express.js](#instalación-de-expressjs)
    - [Crear una Aplicación Express](#crear-una-aplicación-express)
    - [Definir Rutas](#definir-rutas)
    - [Iniciar el Servidor](#iniciar-el-servidor)
    - [Conclusión](#conclusión)
  - [Configuración de un proyecto (usando 'express-generator')](#configuración-de-un-proyecto-usando-express-generator)
    - [Introducción](#introducción)
    - [¿Qué es el Generador de Express.js?](#qué-es-el-generador-de-expressjs)
    - [Instalación del Generador](#instalación-del-generador)
    - [Creación de un Nuevo Proyecto](#creación-de-un-nuevo-proyecto)
    - [Estructura del Proyecto](#estructura-del-proyecto)
    - [Configuración Básica](#configuración-básica)
    - [Ejecución de la Aplicación](#ejecución-de-la-aplicación)
    - [Conclusión](#conclusión-1)
  - [Creación de Rutas y Middlewares](#creación-de-rutas-y-middlewares)
    - [Introducción](#introducción-1)
    - [Creación de Rutas](#creación-de-rutas)
      - [Ejemplo de Ruta GET](#ejemplo-de-ruta-get)
      - [Ejemplo de Ruta POST](#ejemplo-de-ruta-post)
    - [Middlewares](#middlewares)
      - [Ejemplo de Middleware](#ejemplo-de-middleware)
    - [Uso de Middlewares en Rutas](#uso-de-middlewares-en-rutas)
      - [Ejemplo de Middleware en Ruta](#ejemplo-de-middleware-en-ruta)
    - [Middleware para Manejo de Errores](#middleware-para-manejo-de-errores)
      - [Ejemplo de Middleware de Error](#ejemplo-de-middleware-de-error)
    - [Conclusión](#conclusión-2)
  - [Configuración del CORS](#configuración-del-cors)
    - [Introducción](#introducción-2)
    - [¿Por qué es importante CORS?](#por-qué-es-importante-cors)
    - [Cómo configurar CORS en Express.js](#cómo-configurar-cors-en-expressjs)
      - [Instalación del paquete `cors`](#instalación-del-paquete-cors)
      - [Uso del middleware `cors`](#uso-del-middleware-cors)
    - [Configuración avanzada de CORS](#configuración-avanzada-de-cors)
      - [Ejemplo de configuración avanzada](#ejemplo-de-configuración-avanzada)
    - [Conclusión](#conclusión-3)
  - [Documentación de la API (OpenAPI, Swagger, TSOA)](#documentación-de-la-api-openapi-swagger-tsoa)
    - [Introducción](#introducción-3)
    - [OpenAPI y Swagger](#openapi-y-swagger)
      - [¿Cómo se utiliza Swagger en Express.js?](#cómo-se-utiliza-swagger-en-expressjs)
    - [TSOA](#tsoa)
      - [¿Cómo se utiliza TSOA en Express.js?](#cómo-se-utiliza-tsoa-en-expressjs)
    - [Conclusión](#conclusión-4)
  - [Diseño de una API RESTful](#diseño-de-una-api-restful)
    - [Introducción](#introducción-4)
    - [Principios Básicos de REST](#principios-básicos-de-rest)
    - [Diseño de Endpoints](#diseño-de-endpoints)
    - [Versionado de la API](#versionado-de-la-api)
    - [Seguridad y Autenticación](#seguridad-y-autenticación)
    - [Documentación](#documentación)
    - [Conclusión](#conclusión-5)

## Introducción a Express.js

### ¿Qué es Express.js?

Express.js es un framework para Node.js que proporciona un conjunto robusto de características para aplicaciones web y móviles. Es conocido por su simplicidad, flexibilidad y eficiencia, lo que lo convierte en una excelente opción para desarrolladores que buscan crear aplicaciones web y API de manera rápida y eficiente.

### ¿Por qué usar Express.js?

- **Fácil de usar:** Express.js simplifica el desarrollo de aplicaciones web y API, proporcionando una estructura clara y una amplia gama de funcionalidades.
- **Flexible:** Puedes usar solo los componentes que necesitas, lo que hace que tu aplicación sea ligera y eficiente.
- **Comunidad activa:** Tiene una gran comunidad de desarrolladores, lo que significa que siempre hay recursos disponibles para ayudarte.

### Instalación de Express.js

Para comenzar con Express.js, primero necesitas tener Node.js instalado en tu sistema. Luego, puedes instalar Express.js usando npm (Node Package Manager) con el siguiente comando:

```bash
npm install express
```

### Crear una Aplicación Express

Una vez instalado Express.js, puedes comenzar a crear tu aplicación. Aquí te muestro cómo hacerlo paso a paso:

1. **Crea un nuevo archivo JavaScript:** Por ejemplo, puedes crear un archivo llamado `app.js`.

2. **Importa Express y crea una nueva aplicación Express:**

```js
const express = require("express");
const app = express();
```

### Definir Rutas

Las rutas son fundamentales en Express.js. Permiten definir cómo la aplicación responderá a las solicitudes HTTP. Para definir una ruta, usamos el método `app.get()` para solicitudes GET, `app.post()` para POST, etc.

```js
app.get("/", (req, res) => {
  res.send("Hola Mundo!");
});
```

### Iniciar el Servidor

Finalmente, necesitamos iniciar el servidor para que nuestra aplicación esté disponible. Usamos el método `app.listen()` para iniciar el servidor en un puerto específico.

```js
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
```

### Conclusión

Ahora tienes una aplicación Express.js básica que responde a las solicitudes GET en la ruta raíz con "Hola Mundo!". Este es solo el comienzo. Express.js ofrece muchas más funcionalidades, como middleware, plantillas, y mucho más.

Para profundizar en el tema, te recomiendo revisar la [documentación oficial de Express.js](http://expressjs.com/es/). Allí encontrarás guías detalladas, ejemplos de código y una amplia gama de recursos que te ayudarán a aprovechar al máximo este marco de trabajo.

## Configuración de un proyecto (usando 'express-generator')

### Introducción

En esta sección exploraremos cómo utilizar el generador de Express.js para crear un nuevo proyecto. El generador es una herramienta poderosa que automatiza la configuración inicial de un proyecto Express.js, incluyendo la estructura de directorios, la instalación de dependencias y la configuración básica. Este proceso es esencial para comenzar rápidamente con un proyecto Express.js, permitiendo a los desarrolladores centrarse en la lógica de la aplicación en lugar de en la configuración inicial.

### ¿Qué es el Generador de Express.js?

El generador de Express.js es una herramienta de línea de comandos que te permite crear rápidamente una nueva aplicación Express.js con una estructura de directorios predefinida y algunas dependencias comunes instaladas. Esto incluye configuraciones para el desarrollo, pruebas y producción, así como la integración con herramientas como Babel y ESLint.

### Instalación del Generador

Para utilizar el generador de Express.js, primero necesitas instalarlo globalmente en tu sistema. Abre tu terminal y ejecuta el siguiente comando:

```bash
npm install -g express-generator
```

O usar npx:

```bash
npx express-generator
```

### Creación de un Nuevo Proyecto

Una vez instalado el generador, puedes crear un nuevo proyecto Express.js ejecutando el siguiente comando:

```bash
express mi-proyecto-express
```

Este comando creará un nuevo directorio llamado `mi-proyecto-express` con una estructura de directorios predefinida y las dependencias necesarias instaladas.

### Estructura del Proyecto

El generador crea una estructura de directorios que incluye:

- `bin/`: Para el script de inicio de la aplicación.
- `public/`: Para archivos estáticos como CSS, JavaScript del lado del cliente y imágenes.
- `routes/`: Para definir las rutas de tu aplicación.
- `views/`: Para las plantillas de vistas, si estás utilizando un motor de plantillas.

### Configuración Básica

El generador también configura automáticamente algunas cosas por ti, como:

- **Motor de plantillas:** Por defecto, Express.js utiliza el motor de plantillas Pug (anteriormente conocido como Jade). Puedes cambiar esto en el archivo `app.js`.
- **Middleware:** Se configura el middleware para servir archivos estáticos y para el manejo de errores.
- **Rutas:** Se crea un archivo de rutas básico en `routes/index.js`.

### Ejecución de la Aplicación

Para ejecutar tu aplicación, navega al directorio del proyecto y ejecuta el siguiente comando:

```bash
npm start
```

Esto iniciará tu servidor Express.js en el puerto 3000 (o el puerto que hayas configurado).

### Conclusión

El generador de Express.js es una herramienta invaluable para cualquier desarrollador que comience con Express.js. Automatiza la configuración inicial, permitiéndote centrarte en la lógica de tu aplicación. A medida que tu proyecto crece, puedes personalizar y expandir la estructura generada según las necesidades de tu proyecto.

Para obtener más información sobre el generador de Express.js y sus opciones de configuración, consulta la [documentación oficial](https://expressjs.com/en/starter/generator.html).

## Creación de Rutas y Middlewares

### Introducción

En esta sesión, exploraremos cómo crear rutas y middlewares en Express.js. Las rutas son fundamentales para definir cómo la aplicación responderá a las solicitudes HTTP, mientras que los middlewares permiten ejecutar código en el ciclo de solicitud/respuesta de la aplicación, como la autenticación, el registro de logs, o la manipulación de datos de la solicitud.

### Creación de Rutas

Las rutas en Express.js se definen utilizando métodos del objeto `app` que corresponden a los métodos HTTP, como `get`, `post`, `put`, `delete`, etc. Cada ruta puede tener uno o más manejadores de ruta, que son funciones que se ejecutan cuando se accede a la ruta.

#### Ejemplo de Ruta GET

```js
app.get("/", (req, res) => {
  res.send("Hola Mundo!");
});
```

#### Ejemplo de Ruta POST

```js
app.post("/usuarios", (req, res) => {
  // Aquí iría la lógica para crear un usuario
  res.send("Usuario creado");
});
```

### Middlewares

Los middlewares son funciones que tienen acceso a los objetos de solicitud (`req`), respuesta (`res`), y la siguiente función de middleware en el ciclo de solicitud/respuesta de la aplicación. Pueden ejecutar cualquier código, hacer cambios en los objetos de solicitud y respuesta, terminar el ciclo de solicitud/respuesta, o llamar a la siguiente función de middleware.

#### Ejemplo de Middleware

```js
const miMiddleware = (req, res, next) => {
  console.log("Este es un middleware");
  next(); // Llama a la siguiente función de middleware en la pila
};

app.use(miMiddleware);
```

### Uso de Middlewares en Rutas

Los middlewares también pueden ser específicos para ciertas rutas. Esto es útil para aplicar lógica solo a ciertas partes de la aplicación.

#### Ejemplo de Middleware en Ruta

```js
app.get("/usuarios", miMiddleware, (req, res) => {
  // Lógica para obtener usuarios
  res.send("Usuarios obtenidos");
});
```

### Middleware para Manejo de Errores

Express.js permite definir middlewares para manejar errores. Estos middlewares deben tener cuatro argumentos: `err`, `req`, `res`, y `next`.

#### Ejemplo de Middleware de Error

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Algo salió mal!");
});
```

### Conclusión

Las rutas y los middlewares son componentes fundamentales en Express.js que permiten definir la lógica de la aplicación y manejar el flujo de solicitudes y respuestas. La creación de rutas permite definir cómo la aplicación responderá a diferentes tipos de solicitudes HTTP, mientras que los middlewares ofrecen una forma flexible de ejecutar código en el ciclo de solicitud/respuesta, como la autenticación, el registro de logs, o la manipulación de datos de la solicitud.

Para profundizar en el tema, te recomiendo revisar la [documentación oficial de Express.js](http://expressjs.com/es/), donde encontrarás guías detalladas, ejemplos de código y una amplia gama de recursos que te ayudarán a aprovechar al máximo estas características de Express.js.

## Configuración del CORS

### Introducción

CORS (Cross-Origin Resource Sharing) es un mecanismo que permite a muchos recursos (por ejemplo, fuentes, JavaScript, etc.) en una página web ser solicitados desde otro dominio fuera del dominio del cual proviene la página web. En otras palabras, CORS es una forma de relajar la política de mismo origen (Same-Origin Policy) que es implementada por defecto en los navegadores web.

### ¿Por qué es importante CORS?

La política de mismo origen es una medida de seguridad importante que ayuda a prevenir que los scripts maliciosos en una página web accedan a datos sensibles en otra página web. Sin embargo, en el desarrollo de aplicaciones web modernas, especialmente en aplicaciones de una sola página (SPA) y en aplicaciones que consumen APIs de terceros, es común necesitar hacer solicitudes a recursos que se encuentran en diferentes dominios. Aquí es donde CORS entra en juego, permitiendo que estas solicitudes se realicen de manera segura.

### Cómo configurar CORS en Express.js

Para configurar CORS en una aplicación Express.js, puedes utilizar el paquete `cors`. Este paquete proporciona un middleware que puedes usar para habilitar CORS en tu aplicación.

#### Instalación del paquete `cors`

Primero, necesitas instalar el paquete `cors` usando npm:

```bash
npm install cors
```

#### Uso del middleware `cors`

Después de instalar el paquete, puedes importarlo en tu aplicación Express y usarlo como middleware. Aquí te muestro cómo hacerlo:

```js
const express = require("express");
const cors = require("cors");

const app = express();

// Habilitar CORS para todas las rutas
app.use(cors());

// Ahora puedes definir tus rutas aquí

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
```

### Configuración avanzada de CORS

El middleware `cors` también permite configuraciones más avanzadas, como especificar qué dominios pueden acceder a tu aplicación, qué métodos HTTP están permitidos, y qué cabeceras pueden ser enviadas en las solicitudes.

#### Ejemplo de configuración avanzada

```js
const corsOptions = {
  origin: "http://mi-dominio.com", // Permitir solo este dominio
  methods: ["GET", "POST"], // Permitir solo estos métodos
  allowedHeaders: ["Content-Type", "Authorization"], // Permitir solo estas cabeceras
};

app.use(cors(corsOptions));
```

### Conclusión

CORS es un mecanismo crucial para el desarrollo de aplicaciones web modernas que necesitan interactuar con recursos en diferentes dominios. Configurar CORS en tu aplicación Express.js es un paso importante para asegurar que tu aplicación pueda comunicarse de manera segura con otros dominios.

Recuerda que, aunque CORS es una herramienta poderosa, también es importante utilizarla de manera responsable para no exponer tu aplicación a riesgos innecesarios. Siempre es recomendable limitar los dominios que pueden acceder a tu aplicación y restringir los métodos HTTP y las cabeceras permitidas según las necesidades de tu aplicación.

Para obtener más información sobre CORS y cómo configurarlo en Express.js, te recomiendo revisar la [documentación oficial de Express.js](http://expressjs.com/es/) y la [documentación del paquete `cors`](https://www.npmjs.com/package/cors).

## Documentación de la API (OpenAPI, Swagger, TSOA)

### Introducción

La documentación de la API es un aspecto crucial en el desarrollo de aplicaciones web y servicios API. Proporciona una descripción clara y detallada de cómo interactuar con la API, incluyendo los endpoints disponibles, los métodos HTTP que se pueden usar, los parámetros que se pueden enviar, y los formatos de respuesta esperados. Una buena documentación de la API facilita el desarrollo, la integración y el mantenimiento de aplicaciones que consumen la API.

### OpenAPI y Swagger

OpenAPI es un estándar para la documentación de APIs que proporciona una forma estandarizada de describir APIs RESTful. Swagger es una herramienta que implementa este estándar, permitiendo a los desarrolladores diseñar, construir, documentar y consumir servicios web RESTful. Swagger UI es una herramienta que genera una interfaz de usuario interactiva para visualizar y probar la API basada en la documentación de OpenAPI.

#### ¿Cómo se utiliza Swagger en Express.js?

Para utilizar Swagger en una aplicación Express.js, puedes usar el paquete `swagger-ui-express` y `swagger-jsdoc`. Aquí te muestro cómo hacerlo paso a paso:

1. **Instalación de paquetes**

Primero, necesitas instalar los paquetes necesarios:

```bash
npm install swagger-ui-express swagger-jsdoc
```

2. **Configuración de Swagger**

Después, puedes configurar Swagger en tu aplicación Express.js. Aquí te muestro un ejemplo básico:

```js
const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de ejemplo",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.js"], // Rutas donde se encuentran las definiciones de la API
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Ahora puedes definir tus rutas aquí

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
```

3. **Documentación de las rutas**

Para documentar tus rutas, puedes usar comentarios en tus archivos de rutas que sigan la sintaxis de Swagger. Aquí te muestro un ejemplo:

```js
/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Obtiene una lista de usuarios
 *     responses:
 *       200:
 *         description: Una lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 */
```

### TSOA

TSOA es una herramienta que genera documentación de OpenAPI a partir de tu código fuente de TypeScript. Esto significa que puedes escribir tu API en TypeScript y TSOA se encargará de generar la documentación y los clientes para ti.

#### ¿Cómo se utiliza TSOA en Express.js?

Para utilizar TSOA en una aplicación Express.js, primero necesitas instalar TSOA y sus dependencias:

```bash
npm install tsoa express-async-errors
```

Luego, puedes configurar TSOA en tu aplicación Express.js. Aquí te muestro un ejemplo básico:

```js
const express = require("express");
const { RegisterRoutes } = require("tsoa");

const app = express();

// Configuración de TSOA
const tsoaOptions = {
  routePrefix: "/api",
  controllers: ["./controllers/*.ts"], // Rutas donde se encuentran los controladores
};

RegisterRoutes(app, tsoaOptions);

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
```

### Conclusión

La documentación de la API es esencial para el desarrollo y mantenimiento de aplicaciones que consumen APIs. OpenAPI y Swagger proporcionan una forma estandarizada y flexible de documentar APIs RESTful, mientras que TSOA ofrece una solución integrada para generar documentación y clientes a partir de código TypeScript.

Estas herramientas no solo facilitan la interacción con la API, sino que también ayudan a mantener la consistencia y la calidad del código a lo largo del tiempo. Para obtener más información sobre estas herramientas y cómo utilizarlas en tus proyectos, te recomiendo revisar la [documentación oficial de Swagger](https://swagger.io/docs/), la [documentación oficial de TSOA](https://tsoa-community.github.io/docs/), y la [documentación oficial de OpenAPI](https://www.openapis.org/).

## Diseño de una API RESTful

### Introducción

Una API RESTful (Representational State Transfer) es un estilo de arquitectura de software que define un conjunto de restricciones para crear servicios web. El diseño de una API RESTful es crucial para asegurar que la API sea fácil de usar, escalable y mantenible.

### Principios Básicos de REST

1. **Cliente-Servidor:** Separa la interfaz de usuario de la lógica de negocio, permitiendo que ambos evolucionen de manera independiente.
2. **Stateless:** Cada solicitud del cliente a la API debe contener toda la información necesaria para comprender y procesar la solicitud. El servidor no debe almacenar el estado del cliente entre solicitudes.
3. **Cacheable:** Las respuestas del servidor pueden ser almacenadas en caché por el cliente. Esto mejora la eficiencia y la escalabilidad de la API.
4. **Uniform Interface:** Define una interfaz uniforme para simplificar y estandarizar la forma en que los clientes interactúan con la API.

### Diseño de Endpoints

Los endpoints de una API RESTful deben seguir convenciones claras y consistentes. Aquí hay algunas pautas para diseñar endpoints:

- **Utiliza HTTP Methods:** Usa los métodos HTTP apropiados para cada operación. Por ejemplo, GET para recuperar datos, POST para crear nuevos recursos, PUT para actualizar recursos existentes, y DELETE para eliminar recursos.
- **Usa URIs descriptivas:** Las URIs deben ser descriptivas y reflejar los recursos que se están accediendo o manipulando. Por ejemplo, `/users` para acceder a la lista de usuarios, y `/users/{id}` para acceder a un usuario específico.
- **Evita el uso de parámetros en la URL:** Los parámetros de consulta deben usarse para filtrar o paginar resultados, pero no para identificar recursos.

### Versionado de la API

El versionado es crucial para asegurar que los cambios en la API no rompan las aplicaciones existentes que la consumen. Aquí hay dos enfoques comunes para el versionado:

- **Versionado en la URL:** Incluir el número de versión en la URL, por ejemplo, `/v1/users`.
- **Versionado en el Encabezado:** Usar un encabezado HTTP personalizado para especificar la versión de la API.

### Seguridad y Autenticación

La seguridad es un aspecto fundamental en el diseño de una API. Aquí hay algunas prácticas recomendadas:

- **Autenticación:** Utiliza tokens de acceso (como JWT) para autenticar a los usuarios.
- **Autorización:** Implementa un sistema de roles y permisos para controlar el acceso a los recursos de la API.
- **HTTPS:** Asegura todas las comunicaciones entre el cliente y el servidor utilizando HTTPS.

### Documentación

Una buena documentación es esencial para que los desarrolladores puedan entender y utilizar la API de manera efectiva. La documentación debe incluir:

- **Descripción general de la API:** Explica el propósito y las características de la API.
- **Endpoints:** Describe cada endpoint, incluyendo el método HTTP, la URI, los parámetros, y los códigos de respuesta.
- **Ejemplos de uso:** Proporciona ejemplos de cómo utilizar la API.
- **Códigos de error:** Define los códigos de error y sus significados.

### Conclusión

El diseño de una API RESTful bien pensada y bien implementada es fundamental para el éxito de cualquier proyecto de desarrollo de software. Al seguir los principios de REST, utilizar convenciones claras para los endpoints, implementar versionado, asegurar la API, y proporcionar una documentación completa, puedes crear una API que sea fácil de usar, escalable, y mantenible.

Para profundizar en el tema, te recomiendo revisar la [guía de estilo de Google para APIs](https://cloud.google.com/apis/design) y la [guía de estilo de Microsoft para APIs RESTful](https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design). Estas guías ofrecen consejos prácticos y ejemplos que pueden ayudarte a diseñar APIs efectivas.
