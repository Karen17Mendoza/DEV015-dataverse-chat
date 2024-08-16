# 🌸 KDRAMA CHAT 

## Índice

- [1. Resumen del proyecto](#1-resumen-del-proyecto)
- [2. Definición de producto](#2-definición-de-producto)
- [3. Historias de Usuario](#3-historias-de-usuario)
- [4. Diseño de Interfaz y Prototipos](#5-diseño-de-interfaz-y-prototipos)
- [5. Lenguajes y Herramientas Utilizadas](#6-lenguajes-y-herramientas-utilizadas)
- [6. Responsividad](#7-responsividad)
- [7. Testeos de usabilidad](#7-responsividad)
- [8. Trabajo Colaborativo](#8-trabajo-colaborativo)


---

## 1. Resumen del proyecto

**KDRAMA CHAT** es una aplicación web interactiva creada para fans de los Kdramas que itegra una experiencia de chat interactiva. Los usuarios pueden filtrar Kdramas por género, año de lanzamiento y número de episodios, además de visualizar estadísticas clave. La aplicación permite interactuar con los Kdramas mediante chats personalizados, tanto a nivel individual como grupal, gracias a la integración de la API de OpenAI que mejora la interacción, proporcionando respuestas inteligentes y contextualizadas para cada Kdrama. La interacción se gestiona de manera segura a través de una API Key, garantizando una experiencia fluida y adaptada a cada usuario.

## 2. Definición de producto

La aplicación está diseñada especialmente para los fanáticos de los Kdramas, ofreciendo una forma única de conectarse con sus series favoritas. Su objetivo es proporcionar una experiencia envolvente que permita a los usuarios descubrir nuevas recomendaciones, explorar a fondo cada Korama y disfrutar de un chat interactivo que enriquece la experiencia con detalles exclusivos sobre personajes y tramas.

### Necesidades:

**Interacción Personalizada:** 
Ofrece una experiencia de chat interactivo donde los usuarios pueden comunicarse directamente con los Kdramas, obteniendo respuestas personalizadas y sumergiéndose en la trama y los personajes.

**Experiencia de Usuario Enriquecida**
Incorpora la API de OpenAI para mejorar la interacción y personalización del chat, garantizando respuestas relevantes y adaptadas a las consultas de los usuarios.

## 3. Historias de Usuario

### Historia de Usuario 1: 

  **Definición de Terminado (DoD):** 

  - **Quién:** Como usuario.
  - **Qué:** Quiero poder navegar a diferentes vistas dentro de una sola página sin que se recargue el navegador.
  - **Para:** Facilitar una experiencia de usuario fluida y rápida.

  **Criterios de Aceptación (AC):**

  - **AC1:** Al hacer clic en un boton o tarjeta, la vista correspondiente se carga dinámicamente sin recargar toda la página. 
  - **AC2:** La URL se actualiza de acuerdo a la vista cargada, reflejando la sección actual en la que se encuentra el usuario.
  - **AC3:** El historial de navegación del navegador se actualiza correctamente, permitiendo al usuario utilizar los botones de retroceso y avance para moverse entre las vistas visitadas.

### Historia de Usuario 2: 

**Definición de Terminado (DoD):**

- **Quién:** Como usuario.
- **Qué:**  Quiero configurar mi API Key para interactuar con la API de OpenAI.
- **Para:** Poder habilitar la funcionalidad de chat interactivo con los doramas, asegurando que las solicitudes a la API se manejen correctamente.

**Criterios de Aceptación (AC):**

  - **AC1:** Debe haber una vista o sección donde el usuario pueda ingresar su API Key de forma segura.
  - **AC2:** Al guardar la API Key, esta se almacena de forma persistente en el navegador (por ejemplo, en Local Storage).
  - **AC3:** El sistema debe validar que la API Key ingresada es válida antes de permitir su uso en la aplicación.
  - **AC4:** Después de guardar la API Key, la interfaz debe mostrar un mensaje de confirmación indicando que la configuración ha sido exitosa.
  
### Historia de Usuario 3: 

**Definición de Terminado (DoD):**

- **Quién:** Como usuario 
- **Qué:** Quiero interactuar con cada Kdrama en un chat individual.
- **Para:** Obtener respuestas personalizadas y aprender más sobre el Kdrama específico que me interesa.

**Criterios de Aceptación (AC):**
- **AC1:** Debe existir una vista de chat individual para cada Kdrama, accesible desde la lista o tarjetas de doramas.
- **AC2:** Al ingresar al chat individual, el usuario debe poder enviar mensajes y recibir respuestas relacionadas exclusivamente con el Kdrama seleccionado.
- **AC3:** Las respuestas en el chat deben ser generadas utilizando la API de OpenAI, proporcionando información contextual y relevante sobre el Kdrama.
- **AC4:** La interfaz del chat debe mostrar de manera clara el nombre y la imagen del Kdrama con el que se está interactuando.

### Historia de Usuario 4: 

**Definición de Terminado (DoD):**

- **Quién:**Como usuario.
- **Qué:** Quiero interactuar en un chat grupal con todos los Kdramas.
- **Para:** Enviar mensajes a todos los kdramas simultáneamente y recibir respuestas diferenciadas de cada uno.

**Criterios de Aceptación (AC):**
- **AC1:** Debe haber una vista de chat grupal accesible desde la interfaz principal, donde se puedan ver todos los Kdramas en una lista o columna.
- **AC2:** Al enviar un mensaje en el chat grupal, este debe ser transmitido a todos los Kdramas, y cada kdrama debe responder de manera individual dentro del mismo chat.
- **AC3:** Las respuestas deben ser generadas utilizando la API de OpenAI, y deben ser relevantes para cada Kdrama en particular, asegurando una interacción rica y variada.
- **AC4:** La interfaz debe permitir identificar fácilmente de qué Kdrama proviene cada respuesta, usando nombres y posiblemente imágenes.

### Resolución de Necesidades del Usuario:


## 4. Diseño de Interfaz y Prototipos

La interfaz de **KDRAMA CHAT** está diseñada para ofrecer ...

Las vistas principales incluyen:
- **Vista Home:** Lista de Kdramas con opciones de filtrado y ordenación.
- **Chat Individual:** Vista detallada de un Kdrama con interacción de chat.
- **Chat Grupal:** Interfaz para enviar mensajes a todos los Kdramas y ver respuestas en tiempo real.

### Prototipos de Alta Fidelidad:

El prototipo de alta fidelidad de **KDRAMA CHAT** es una versión ...


## 5. Lenguajes y Herramientas Utilizadas

En el desarrollo de nuestro proyecto, hemos utilizado un lenguaje de programación y herramientas para garantizar su funcionalidad y diseño. A continuación, detallamos el principal lenguaje y herramientas que forman parte de nuestro proyecto:

### Herramientas de Programación

- **HTML Semántico:** Utilizado para estructurar y marcar nuestra página web de manera clara y accesible, definiendo la disposición y los elementos visuales de forma adecuada.

- **CSS Responsive:** Utilizado para diseñar y presentar la interfaz de manera que mejora la experiencia del usuario. Se han aplicado estilos, colores y diseños mediante media queries, flexbox y grid para asegurar una visualización óptima en diversos dispositivos y tamaños de pantalla.

### Lenguaje de Programación

- **JavaScript (JS):** Esencial para la interactividad y la funcionalidad dinámica de nuestra aplicación web. Empleado para la creación dinámica de elementos HTML, manipulación del DOM con event listeners, y funciones que permiten acciones y comportamientos en tiempo real.

### Herramientas Adicionales

- **Control de Versiones (Git):** Esencial para el seguimiento eficiente de cambios en el código, facilitando la colaboración entre desarrolladores en nuestro proyecto de Kdramas.
- **Pruebas Unitarias(Jest):** Utilizado para asegurar la calidad y robustez del código JavaScript mediante pruebas exhaustivas, garantizando su funcionamiento y rendimiento en el contexto de nuestra aplicación de Kdramas.
- **Prototipado y Diseño de Interfaz (Figma):** Utilizado para el prototipado y diseño de la interfaz, permitiendo la creación de maquetas visuales y la planificación de la experiencia de usuario. [Prototipo-figma](https://www.figma.com/design/FTDSJu9RwT1XYvCmNSnuVO/KDRAMA-DATABASE?node-id=0-1&t=rOTVIOuAeiHudXf6-1)
- **Historias de Usuario:** Utilizadas para definir claramente los requisitos y expectativas de los usuarios finales en nuestro proyecto de Kdramas. Aseguran que el desarrollo esté alineado con las necesidades y deseos de los usuarios. -**Visual Studio Code:** Se ha utilizado Visual Studio Code como entorno de desarrollo para la implementación del diseño y la gestión del código. -**Colorimetria:** Utilizado para la paleta de colores de la página web. [Colores](https://webgradients.com/)

Este lenguaje y herramientas nos han permitido desarrollar una aplicación web completa y funcional para Kdramas, con un diseño atractivo y una experiencia de usuario optimizada. La combinación de HTML semántico, CSS responsive, JavaScript y herramientas como Git, Jest y Figma ha sido crucial para lograr un producto robusto, interactivo y de alta calidad.

## 6. Responsividad

La web es completamente responsiva, adaptándose a diferentes resoluciones, desde pantallas grandes hasta dispositivos móviles.

Utilizamos Media Queries en CSS para aplicar estilos personalizados según el tamaño de la pantalla, optimizando así la presentación de la información y la navegación en distintos dispositivos.

## Instrucciones de Uso

1. Clona el repositorio.
2. Abre el archivo `index.html` en tu navegador para explorar la Galería de Arte Practicum y conocer las historias de cada ciudad.
3. Disfruta de la experiencia inmersiva y aprende más sobre tus colegas en línea.

## 8. Testeos de usabilidad

## 8. Trabajo Colaborativo

Este proyecto fue creado y desarrollado en colaboración por dos personas, quienes contribuyeron con su conocimiento y experiencia para alcanzar un resultado exitoso.

### Equipo de Diseño y Desarrollo

Este proyecto fue desarrollado por:

- [Franchesca Fatima Zelaya](https://github.com/FranchescaF)
- [Karen Melanie Mendoza](https://github.com/Karen17Mendoza)

Como parte de un proyecto práctico como estudiantes de desarrollo web de Laboratoria. Si tienes preguntas o comentarios, no dudes en ponerte en contacto al correo electrónico: fatimapolgar2001@gmail.com y melanie171095@gmail.com

## Visita la web:

