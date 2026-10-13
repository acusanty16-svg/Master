# Proyectos — 1er Año del Máster

Índice de los **proyectos prácticos** desarrollados durante el primer año del Máster en Desarrollo de Software. Todo el contenido de esta carpeta forma parte del repositorio principal **Master** y se encuentra organizado por número de proyecto.

---

## Índice de proyectos

| Nº | Proyecto | Descripción | Tecnologías |
|:--:|----------|-------------|-------------|
| 03 | [03-Katas-Python](./03-Katas-Python) | Colección de katas de programación resueltas en Python. | Python · Jupyter |
| 04 | [04-Proyecto-SQL](./04-Proyecto-SQL) | Ejercicios de consultas SQL sobre una base de datos de reservas y vuelos. | PostgreSQL · SQL |
| 05 | [05-Proyecto-NoSQL-API](./05-Proyecto-NoSQL-API) | API REST de música (géneros, artistas y canciones) con MongoDB. | Node.js · Express · MongoDB |
| 05 | [05-Proyecto-NoSQL-Web](./05-Proyecto-NoSQL-Web) | Aplicación web que consume la API NoSQL anterior. | JavaScript · Vite |
| — | [Primer-Trabajo-Master](./Primer-Trabajo-Master) | Trabajo de maquetación: portafolio web personal. | HTML5 · CSS3 |
| — | [Segundo-Trabajo-Master](./Segundo-Trabajo-Master) | Colección de ejercicios de JavaScript (básicos, DOM y ES6+). | JavaScript |

---

## Estructura

```
03-Proyectos/
├── 03-Katas-Python/          # 40 katas de Python en notebooks
├── 04-Proyecto-SQL/          # Ejercicios y volcado de base de datos SQL
├── 05-Proyecto-NoSQL-API/    # Backend: API REST (Express + MongoDB)
├── 05-Proyecto-NoSQL-Web/    # Frontend: aplicación web (Vite)
├── Primer-Trabajo-Master/    # Portafolio HTML/CSS
├── Segundo-Trabajo-Master/   # Ejercicios de JavaScript
└── README.md
```

---

## Notas generales

- Cada proyecto contiene su propio `README.md` con instrucciones detalladas de instalación y ejecución.
- Los proyectos **05-Proyecto-NoSQL-API** y **05-Proyecto-NoSQL-Web** funcionan de forma conjunta: primero se levanta la API (puerto `8080`) y después la web.
- Las dependencias (`node_modules`) no se versionan; se instalan con `npm install` en cada proyecto.

---

*Primer año del Máster en Desarrollo de Software — Curso 2025/2026*
