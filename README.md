# Getxerpa use_case test

El proyecto desarrolla un ejercicio de un requerimiento real de un sistema de monitoreo de finanzas personales

## Tech requirements
El ejercicio se desarrollara en los siguientes lenguajes.
- Python + django
- Javascript + Angular
- Se propuso dockerizar en dos imagenes una de python y otra de javascript

# Project Name: Herramienta de analisis de gastos

### Construction backend 🛠️
* **Language:** Python 3
* **Framework:** django

### Construction frontend 🛠️
* **Language:** Javascript
* **Framework:** Angular

## Requirements
- Docker installed

## Installation and execution

- Clona el proyecto

Corre ```docker-compose``` los comandos dentro de la carpeta **getxerpa_second_test** 

* Crear los contenedores: ```docker-compose build```

* Inicia los servicios: ```docker-compose up -d```

* Para detener los servicios: ```docker-compose stop```

El proyecto tiene dos contenedores, uno de frotend y otro de backend con los siguientes puertos
- costs-frontend: 8080
- costs-backend: 8000

### How i use ⚙️

Una vez iniciado los contenedores se tienen dos rutas principales
- http://localhost:8000/ **Pagina principal de servicios de backend** 
- http://localhost:8080/ **Pagina principal de servicios de frontend** 

La documentacion de la api se efectuo de manera automatica con Django REST framework, el cual puedes consultar en esta direccion http://localhost:8000/.

Tambien se generaron rutas desde el backend para modificar la base de datos con los cruds basicos y estan en las siguientes rutas:

 - http://localhost:8000/categories/
 - http://localhost:8000/transactions/

La pagina principal de los serviicios de frontend tiene el listado de categorias desde ahi pulsando en cada categoria podemos ver el detalle de la misma, ademas se pueden agregr y eliminar categorias desde el front, aunque no se pedia en el ejercicio deje una barra de navegacion muy sencilla para probar las funcionalidades.

Me disculpo por el css la realidad es que no me esmere en diseño si no que funcionara lo que se pedia en el enunciado!.

### Autor ✒️

* **Autor:** Manuel Servin A., msarreygue@gmail.com
