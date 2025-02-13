# Nombre de la Aplicación:
CodeGlossary

# Objetivo General:
Nuestro objetivo es proporcionar una herramienta accesible para estudiantes y profesionales de la programación, con el fin de ofrecer un diccionario intersactivo que facilite la comprensión y el aprendizaje de los conceptos fundamentales de la programación orientada a objetos.

# Descripción General:
Esta aplicación actuará como un diccionario digital diseñado para aquellos que están aprendiendo o trabajando con programación orientada a objetos (POO), a través de un catálogo de términos y definiciones, los usuarios podran acceder a explicaciones claras y con ejemplos de los principales conceptos de POO, como "clases", "objetos", "herencia", "polimorfismo", entre otros más.
La app permitirá una búsqueda rápida por término, tendra una interfaz amigable y de fácil navegación, ideal para principiantes y programadores con experiencia que necesiten una referencia rápida, y de esta forma también los usuarios podrán consolidar sus conocimientos sobre POO y aplicar de manera más efeciva los principios funcdamentales en sus proyectos de desarrollo de software.

# Tipo de Arquitectura y su Justificación 
Arquitectura en Capas (también conocida como arquitectura de n-capas), ya que permite una organización clara y facilita el mantenimiento y la escalabilidad.

Justificación:
Capa de Presentación (IU): Esta capa se encarga de la interacción con el usuario, en este caso sería la interfaz gráfica o interfaz de usuario donde se pueden visualizar los terminos de POO, sus definiciones y ejemplos, eso permitirá modificar o actualizar sin afectar la gestion de los datos.
Capa de Negocio (Lógica de la aplicación): Aquí se encuentra toda la lógica relacionada con la gestión de los conceptos de POO, como agregar, modificar o eliminar definiciones. También puede incluir la validación de datos y la lógica de búsqueda dentro del diccionario.
Capa de acceso a datos (Modelo o base de datos): Esta capa es responsable de almacenar y recuperar los datos, es decir, las definiciones de los términos de POO. Podría ser una base de datos simple (SQL o NoSQL), o incluso un archivo local que almacene la información.

Arquitectura en capas: Modelo, Vista, controlador (MVC)
Modelo: Maneja los datos de los conceptos de programación.
Vista: Representa la interfaz de usuario.
Controlador: Gestiona la comunicación entre el modelo y la vista.

# Framework seleccionado para desarrollo:
Expo Dev y React-Native ya que es para desarrollar apps móviles multiplataforma que permite una iteración en el desarrollo.

# Estrategia de Versionamiento:
Se utiliza Git para el control de versiones con la siguiente estrategia:
  - # El Main:
  -  es la version que estará estable para la app
  - # Las ramas de desarrollo:
  - Aqui cada una va a trabajar en diferentes funciones antes de juntarlas con el main.

# Wireframes/Mockups de la app:
Pantalla principal (Home): 
  - Título de la app:CodeGlossary
  - Botón de empezar: para ver los conceptos
Pantalla de conceptos:
  - Encabezado: Nombre del concepto
  - Descripción: Explicacion detallada sobre el concepto
Pantalla de Examen:
  - Quiz sobre los conceptos vistos previamente

# Diagrama de Flujo de la aplicación:

# Ramas para cada integrante del equipo:
Se cuenta con las siguientes ramas:
 - main: Rama principal
 - Rama de Liliana
 - Rama de Yamilet
 - Rama de Ana_Belen


