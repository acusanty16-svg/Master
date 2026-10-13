# Segundo Trabajo — Ejercicios de JavaScript

Colección de ejercicios para practicar **JavaScript**, organizados en tres bloques progresivos: fundamentos del lenguaje, manipulación del **DOM** y características modernas de **ES6+** con asincronía.

---

## Bloques de ejercicios

### 1. Ejercicios básicos y avanzados de JavaScript

`Ejercicios basicos y avanzados de JavaScript/`

**42 ejercicios** (`.js`) que cubren los fundamentos del lenguaje:

- Variables, tipos de datos y operadores.
- Condicionales y bucles.
- Funciones, objetos y arrays.
- Cálculos y lógica de programación.

### 2. Ejercicios DOM

`Ejercicios DOM/`

**5 ejercicios** que trabajan la manipulación del DOM y los eventos. Cada ejercicio incluye su propio `index.html`:

| Ejercicio | Contenido |
|-----------|-----------|
| Ejercicio1 | Manipulación básica del DOM. |
| Ejercicio2 | DOM + estilos. |
| Ejercicio3 | DOM + interacción. |
| Ejercicio4 | DOM + estilos. |
| Ejercicio5 | Página creada íntegramente con JavaScript (cambio de tema *light/dark*). |

Cada carpeta contiene `index.html`, su hoja `style.css` (cuando procede) y el script principal (`main.js` / `exercise-3.js`).

### 3. Ejercicios ES6+ y asincronía

`Ejercicios ES6+ y asincronía/`

**9 ejercicios** sobre características modernas del lenguaje:

- Funciones flecha, plantillas de cadena y desestructuración.
- Promesas, `async/await` y `fetch`.
- Los ejercicios **8** y **9** son proyectos con **Vite** que consumen APIs externas (por ejemplo, una tarjeta de personaje y una aplicación de Pokémon con componentes).

---

## Estructura

```
Segundo-Trabajo-Master/
├── Ejercicios basicos y avanzados de JavaScript/
│   └── Ejercicio1.js ... Ejercicio42.js
├── Ejercicios DOM/
│   ├── Ejercicio1/  (index.html + main.js)
│   ├── Ejercicio2/
│   ├── Ejercicio3/
│   ├── Ejercicio4/
│   └── Ejercicio5/
└── Ejercicios ES6+ y asincronía/
    ├── Ejercicio1.js ... Ejercicio7.js
    ├── Ejercicio5/   (index.html)
    ├── Ejercicio8/   (proyecto Vite: src/, package.json)
    └── Ejercicio9/   (proyecto Vite: src/, dist/, package.json)
```

---

## Tecnologías

- **JavaScript (ES6+)** — promesas, `async/await`, módulos.
- **DOM API** — creación y manipulación de elementos y eventos.
- **Fetch API** — consumo de datos asíncronos.
- **Vite** (ejercicios 8 y 9).

---

## Cómo ejecutar

- **Ejercicios de fundamentos (`.js`)**: ejecútalos con Node (`node Ejercicio1.js`) o revisa la consola del navegador.
- **Ejercicios DOM**: abre el `index.html` de cada carpeta en el navegador.
- **Ejercicios con Vite (8 y 9)**: entra en la carpeta del ejercicio y ejecuta:

  ```bash
  npm install
  npm run dev
  ```

---

*Primer año del Máster en Desarrollo de Software — Trabajo de JavaScript*
