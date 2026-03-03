<div align="left">
# 📚 Organizador y Planificador de Materias ESPOL

Aplicación web creada para organizar y planificar materias de la **Escuela Superior Politécnica del Litoral (ESPOL)**.

Este proyecto fue desarrollado **desde el inicio hasta el final con Inteligencia Artificial**:

- 🧠 Concepto y estructuración creados con **Gemini**.
- 💻 Código desarrollado completamente en **Google AI Studio (Builder)**.
- 🚀 Versión utilizada: **Gemini 3.1 Preview** (última versión disponible al momento del lanzamiento).

La aplicación contiene, en su mayoría, las facultades, carreras y materias dictaminadas para los programas de grado de ESPOL.  
Todos los datos fueron obtenidos de: https://www.espol.edu.ec

---

# 📊 RESUMEN Y ORGANIZACIÓN

El sistema cuenta con un **Dashboard principal** donde se visualizan 3 tarjetas resumen:

- 📈 Avance de carrera
- 🎓 Créditos acumulados
- ✅ Materias aprobadas

> ⚠️ Nota:  
> Los créditos mostrados normalmente serán menores a los que aparecen en el académico de MiESPOL, ya que este sistema no toma en cuenta horas de servicio requeridas ni proyectos de tesis.

## 🧩 Malla Académica

La sección más importante del sistema es la **malla**, donde las materias están clasificadas por niveles o "líneas":

- 100-I  
- 100-II  
- 200-I  
- 200-II  
- 300-I  
- 300-II  
- 400-I  
- 400-II  

Al iniciar la app, solo estarán disponibles las materias de la primera línea (salvo excepciones).

Cada materia se presenta en formato de tarjeta con:

- Código de materia
- Nombre de la materia
- Horas totales semanales
- Horas detalladas (teóricas / prácticas / autónomas)
- Créditos otorgados

A un costado del título de cada nivel se muestran:

- Materias seleccionadas
- Cantidad total de créditos tomados

### 🔓 Sistema de desbloqueo

A medida que se marcan materias como aprobadas, se desbloquean automáticamente las siguientes necesarias según la carrera.

Toda la información está basada en datos obtenidos desde espol.edu.ec.  
Si encuentras algún error en datos de cátedras, puedes reportarlo a:

📩 jaypala@espol.edu.ec

---

# 🗓️ PLANIFICACIÓN

La sección de planificación cuenta con **dos accesos**:

1. ⚡ Modo "Express" (botón flotante en el dashboard, esquina inferior derecha)
2. 📂 Sección completa de planificación

Ambas contienen las mismas funcionalidades.

## 📆 Períodos Personalizados

Se pueden agregar tantos períodos como se necesiten, por ejemplo:

- PAO I 2026  
- PAO II 2026  
- PAE 2027  
- PAO I 2027  
- PAO II 2027  

## 📘 Selección de materias

Al elegir una materia, el sistema muestra:

- Créditos que otorga
- Si es complementaria o de itinerario, se habilita un desplegable adicional para escoger la materia específica que llenará ese espacio en la malla.

## 🎯 Control de Créditos

Mientras se agregan materias:

- Se suman automáticamente los créditos
- Se indica si el estudiante cumple con los créditos mínimos para ser estudiante regular
- Se muestran los créditos disponibles restantes

(Aunque honestamente, dudo que alguien quiera tomar más de 3 materias por mero gusto )

## 👨‍🏫 Profesor (opcional)

Existe la opción de agregar el profesor con el que se tomará la materia.

Este dato es opcional, pero muchos estudiantes lo usan como referencia para saber si un profesor es:

- AP (Aprobado)
- RP (Reprobado)
- O simplemente para tomar mejores decisiones al momento de matricularse

## 🔄 Gestión Flexible

Las materias planificadas pueden:

- Agregarse
- Modificarse
- Eliminarse

Lo mismo aplica para los períodos.

---

# ⚙️ CONFIGURACIONES

Por ahora incluye:

- 🌐 Cambio de idioma (Español / Inglés)
- 📌 Visualización de versión del sistema
- 🏫 Universidad base del proyecto

## 🔁 Reset total

Existe un botón para:

- Borrar todo el progreso marcado
- Eliminar todos los planes creados
- Restaurar el sistema como recién instalado

Ideal si necesitas empezar desde cero o si ya estás visual-mentalmente saturado 

---

# 💬 Feedback

Si tienes sugerencias o encuentras algún error, puedes escribir a:

📩 jaypala@espol.edu.ec

Tu feedback sería de gran ayuda para mejorar el proyecto.

---

# ❤️ Gracias

Espero que este proyecto les sea útil y les facilite la organización académica.

¡Gracias por usarlo! 🚀

</div>
<!--<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />-->


<!--# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/f9a12261-3ec2-4750-a045-fe6eccbf0116

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
-->
