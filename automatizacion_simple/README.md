# Chatbot v1.0.0

## Descripción

Este proyecto consiste en un chatbot desarrollado en Python capaz de responder consultas relacionadas con:

* Precio de acciones de empresas.
* Temperatura o clima actual de ciudades alrededor del mundo.

El chatbot utiliza expresiones regulares para identificar la intención del usuario y delega la obtención de la información a funciones especializadas.

---

## Requisitos

Antes de ejecutar el proyecto es necesario contar con:

* Python 3.10 o superior.
* pip instalado.
* Conexión a internet.

---

## Instalación

### 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_REPOSITORIO>
```

### 2. Crear un entorno virtual

#### macOS / Linux

```bash
python3 -m venv .venv
source .venv/bin/activate
```

#### Windows

```bash
python -m venv .venv
.venv\Scripts\activate
```

### 3. Instalar dependencias

```bash
pip install -r requirements.txt
```

---

## Ejecución

Para iniciar el chatbot ejecutar:

```bash
python chatbot.py
```

Al iniciar aparecerá un mensaje de bienvenida y el sistema quedará esperando preguntas del usuario.

---

## Ejemplos de uso

### Consultar precio de una acción

```text
--> ¿Cuál es el precio de una acción de Microsoft?
```

### Consultar clima

```text
--> ¿Cuál es la temperatura actual en Ciudad de México?
```

### Salir del programa

```text
--> salir
```

o

```text
--> adiós
```

---

## Estructura del proyecto

```text
.
├── chatbot.py
├── requirements.txt
├── README.md
├── funciones_agente/
│   ├── obtener_precio_accion.py
│   └── obtener_clima.py
└── utils/
    └── sanitizar.py
```

---

## Dependencias

Todas las dependencias necesarias para ejecutar el proyecto se encuentran especificadas en el archivo:

```text
requirements.txt
```

La persona que evalúe el proyecto únicamente deberá crear un entorno virtual e instalar las dependencias mediante:

```bash
pip install -r requirements.txt
```

para poder ejecutar correctamente la aplicación.

---

## Autor

Proyecto desarrollado como parte de la práctica de construcción de un chatbot en Python.
