# NOTE: My repo modification is in repo DOCKER PYTHON(django), JAVASCRIPT(Angular)

# Getxerpa use_case test

El proyecto desarrolla un ejercicio de un requerimiento real de un sistema de monitoreo de finanzas personales

## Tech requirements
El ejercicio se desarrollara en los siguientes lenguajes.
- Python + django
- Javascript + Angular
- Se propuso dockerizar en dos imagenes una de python y otra de javascript

## Deadline
Para este ejercicio se dio 48 horas como máximo

# Project Name: Python Clean Architecture Microservices Templates

### Construction backend 🛠️
* **Language:** Python 3
* **Framework:** django

### Construction frontend 🛠️
* **Language:** Javascript
* **Framework:** Angular

## Requirements
- Docker installed

## Installation and execution

- Clone or Fork the project.
- Copy **.env.example** to **.env**. It will be used as environment variables source.
- Inside Docker/app folders of ecommerce-service and delivery-services:
* Copy **.env.example** to **.env**. It will be used as environment variables source.

Run ```docker-compose``` command inside **docker-python** folder.

* Building the containers: ```docker-compose build```

* Starting the services: ```docker-compose up -d```

* Stoping the services: ```docker-compose stop```

El proyecto tiene dos contenedores, uno de frotend y otro de backend con los siguientes puertos
- costs-frontend: 80
- costs-backend: 8000

Check the **.env.example** file to change these or any other params.

### Testing ⚙️


To run manual tests, the `req.http` file is included with requests to localhost. Install `REST Client` for Visual Studio Code or` RESTer HTTP Client` for Sublime Text to be able to perform file requests from the same text editor.

To run the tests:

- Have the services running using `docker-compose up`.
- In another console, run `docker exec ecommerce-service python -m pytest -rP`.

The `-rP` flag is optional, and is used to display in the console the `print()` done during the tests, otherwise `pytest` will hide them, only showing them in case the test has failed.

Repository tests write data to container databases, but write them to temporary tables or collections with the suffix "\ _test" that are deleted once they are finished, so as not to carry the actual data. Bear in mind that in the case of Firestore there is no data persistence yet; if the service is lowered and raised again, the previous data is lost.

### How i use ⚙️

To test the endpoint, i include a postman colection with the details in /postman_collection/Enviame test.postman_collection.json file, feel fre to use.

### Autor ✒️

* **Autor:** Manuel Servin A., msarreygue@gmail.com
