# Registro de cambios

Todos los cambios relevantes del repositorio se documentan en este archivo.

## [2026-10-13] Reorganización de los proyectos del 1er año

### Añadido

- `README.md` de índice en `1er-Año/03-Proyectos/`.
- Un `README.md` descriptivo en cada proyecto:
  - `03-Katas-Python`
  - `04-Proyecto-SQL`
  - `05-Proyecto-NoSQL-API`
  - `05-Proyecto-NoSQL-Web`
  - `Primer-Trabajo-Master`
  - `Segundo-Trabajo-Master`
- Comentarios explicativos en español en el código de la aplicación web
  (`05-Proyecto-NoSQL-Web`: `main.js`, `services/api.js`, `services/router.js`
  y los componentes `Header`, `Footer`, `GenreCard`, `ArtistCard` y `SongCard`).
- Comentarios de sección en el HTML del portafolio (`Primer-Trabajo-Master`).

### Cambiado

- **Reubicación de proyectos:** los proyectos `Proyecto-3`, `Proyecto-4`,
  `Proyecto-5` y `Proyecto-5-Website` se movieron desde la raíz del repositorio
  a `1er-Año/03-Proyectos/` con nombres más claros:
  | Antes | Ahora |
  |-------|-------|
  | `Proyecto-3-Katas-Python-...` | `03-Katas-Python` |
  | `Proyecto-4--SQL-...` | `04-Proyecto-SQL` |
  | `Proyecto-5--NoSQL-...` | `05-Proyecto-NoSQL-API` |
  | `Proyecto-5--NoSQL-...-Website` | `05-Proyecto-NoSQL-Web` |
- **Repositorios anidados:** se eliminaron las carpetas `.git` internas de los
  cuatro proyectos para integrarlos en el monorepo `Master`.
- **`Master/README.md`:** reescrito como resumen general del repositorio.
- **Portafolio (`Primer-Trabajo-Master/index.html`):** idioma fijado a `es`,
  corregida la etiqueta `og:image`, unificadas las rutas de imágenes relativas
  y eliminada la referencia a un `script.js` inexistente.

### Notas

- El volcado de base de datos `04-Proyecto-SQL/database/demo-20250901-3m.sql`
  (~476 MB) se excluye del control de versiones mediante `.gitignore` por
  superar el límite de tamaño de archivo de GitHub.
