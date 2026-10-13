# 04 — Proyecto SQL

Ejercicios de **consultas SQL** resueltos sobre una base de datos de ejemplo de reservas de vuelos (`demo`). El trabajo incluye tanto el volcado de la base de datos como un archivo con las consultas resueltas y comentadas.

---

## Descripción

El objetivo del proyecto es practicar la consulta de datos relacionales: filtrado de filas, ordenación, agregación, agrupación y uniones (`JOIN`) entre tablas. La base de datos modela el dominio de una aerolínea (vuelos, rutas, aviones, reservas, billetes y aeropuertos).

---

## Estructura

```
04-Proyecto-SQL/
├── database/
│   └── demo-20250901-3m.sql    # Volcado de la base de datos (versión reducida "3M")
├── ejercicios/
│   └── IntroBBDD.sql           # Consultas resueltas y comentadas
└── README.md
```

---

## Contenido de los ejercicios

El archivo `ejercicios/IntroBBDD.sql` incluye las siguientes consultas:

| Nº | Ejercicio | Conceptos |
|:--:|-----------|-----------|
| 1 | Vuelos con estado *On Time* | `SELECT`, `WHERE` |
| 2 | Reservas con importe superior a 1.000.000 | `WHERE`, comparadores |
| 3 | Datos de los modelos de avión | `SELECT`, tabla `airplanes_data` |
| 4 | Vuelos operados con un Boeing 737 | `WHERE`, `ORDER BY`, `LIMIT` |
| 5 | Billetes de pasajeros llamados *Irina* | `LIKE` |
| 6 | Ciudades con más de un aeropuerto | `GROUP BY`, `HAVING`, `COUNT` |
| 7 | Número de vuelos por modelo de avión | `JOIN`, `GROUP BY` |
| 8 | Reservas con más de un billete | `JOIN`, `GROUP BY`, `HAVING` |
| 9 | Vuelos con retraso de salida superior a una hora | Operaciones con `INTERVAL` |
| Extra | Vuelo y su ruta para localizar un avión concreto | `JOIN` entre `flights` y `routes` |

---

## Tablas utilizadas

`flights`, `bookings`, `airplanes_data`, `tickets`, `airports_data` y `routes`.

---

## Tecnologías

- **PostgreSQL**
- **SQL** (consultas, agregación y uniones)

---

## Cómo ejecutar

1. Crea la base de datos e importa el volcado:

   ```bash
   createdb demo
   psql -d demo -f database/demo-20250901-3m.sql
   ```

2. Ejecuta las consultas del archivo de ejercicios:

   ```bash
   psql -d demo -f ejercicios/IntroBBDD.sql
   ```

> Las consultas están pensadas para PostgreSQL (por ejemplo, el uso de `INTERVAL` en el ejercicio 9).

> **Nota:** el volcado `database/demo-20250901-3m.sql` (~476 MB) **no se incluye en el repositorio** por superar el límite de tamaño de archivo de GitHub. Debe obtenerse o generarse por separado antes de importarlo.

---

*Primer año del Máster en Desarrollo de Software — Proyecto 04*
