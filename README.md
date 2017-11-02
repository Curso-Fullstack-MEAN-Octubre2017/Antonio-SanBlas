# MEAN-PetStore

Aplicacion Demo implementada como parte del curso Fullstack-Mean

Se trata de una aplicacion para gestionar las citas a una imaginaria clinica veterinaria.

Utilizaremos la pila MEAN para implementar la gestion de Clientes/Mascotas y dar de alta Citas en un Calendario.

# Instalación

```bash
git clone https://github.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas
cd Antonio-SanBlas
npm install
npm start

```


# Arquitectura Mean: Mongodb + ExpressJs + AngularJs + NodeJs

![Arquitectura Mean](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/master/public/images/diagramaMEAN.png)

![Arquitectura Mean](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/master/public/images/diagramaMEAN2.png)


## Modelo de datos

El principal objeto del modelo de negocio es:

- Cita, que teniendo una 
	-  fecha y hora de inicio y fin, estaria 
	-  relacionada con una sola mascota, que a su vez estaria 
		-  relacionada con un solo cliente.


![Modelo de Datos](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/master/public/images/modelo-datos.png)

## Diagrama Flujo Clientes-Mascotas

Diagrama de flujo que representa como se dan de alta Mascotas y Clientes en la aplicacion.

![Diagrama Flujo Clientes-Mascotas.png](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/master/public/images/Diagrama_Flujo_Clientes-Mascotas.png)

## Diagrama Flujo Calendario-Citas

Diagrama de flujo que representa como se dan de alta Citas en el calendario y horario de citas

![Diagrama Flujo Calendario-Citas.png](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/master/public/images/Diagrama_Flujo_Calendario-Citas.png)

## REST full Services API

Esta es una lista completa de los servicios web REST publicados con ExpressJs

| Metodo  |  URL  |  Body  |  Response |
|---|---|---|---|
|  GET  |  api/customers  |  << vacio >>  |  res.json([customers]) |
|  GET  |  api/customers/:id  |  << vacio >>  |  res.json(customer) |
|  GET  |  api/customers/:id/pets  |  << vacio >>  |  res.json(pets) |
|  POST  |  api/customers  |  {JSON}  |  res.json(createdCustomer) |
|  PUT  |  api/customers/:id  |  {JSON}  |  res.json(updatedCustomer) |
|  GET  |  api/pets/:id  |  << vacio >>  |  res.json(customerPets) |
|  POST  |  api/pets  |  {JSON}  |  res.json(createdPet) |
|  PUT  |  api/pets/:id  |  {JSON}  |  res.json(updatedPet) |
|  DELETE  |  api/pets/:id  |  {JSON}  |  res.sendStatus(200); //OK |
|  GET  |  api/appointments  |  << vacio >>  |  res.json([appointments]) |
|  GET  |  api/appointments/:id  |  << vacio >>  |  res.json(appointment) |
|  GET  |  api/appointments/:from/:to  |  << vacio >>  |  res.json(appointments) |
|  POST  |  api/appointments  |  {JSON}  |  res.json(createdAppointment) |
|  PUT  |  api/appointments/:id  |  {JSON}  |  res.json(updateAppointment) |


```bash
apiRoutes = require('./routes/api.js');
app.use('/api/',apiRoutes);
```

https://github.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/blob/master/app.js#L19

Fichero encargado de publicar estas 'routes':

https://github.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/tree/master/routes

### Gestion de mascotas y clientes

#### Lista Cliente
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/tree/master/public/app/customer-module
![customers_list](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/master/public/images/lista-clientes.PNG)

#### Detalle Cliente
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/tree/master/public/app/customer-detail-module
![customers_detail](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/master/public/images/detalle-cliente.PNG)

#### Lista Mascotas
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/tree/master/public/app/customer-module
![Pets_list](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/master/public/images/lista-mascotas.PNG)

#### Detalle Mascota
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/tree/master/public/app/customer-detail-module
![Pets_detail](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/master/public/images/edit-mascota.PNG)

### Gestion de mascotas

#### Calendario
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/tree/master/public/app/appointment-module
![Calendar](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/master/public/images/citas-calendario.PNG)

#### Lista de citas
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/tree/master/public/app/appointments-module/appointment-list-module
![Calendar](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/master/public/images/lista-citas.PNG)


## Implementación 

### Ejemplo del CRUD de Pets

1- Schema para MongoDB: 
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/blob/master/models/customers.js#L6

2- Servicios REST:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/blob/master/app.js#L45

a. Enlace a la linea donde esta la definición de la url REST
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/blob/master/routes/customer-managament.js#L5

3- Controlador Angular
a. Componente.js
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/blob/master/public/app/customer-module/customer-module.component.js

b. Componente.html
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/blob/master/public/app/customer-module/customer-module.html

c. Configuración del Módulo
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/blob/master/public/app/app.module.js

d. Ruta Angular
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/blob/master/public/app/app.config.js

e. Ficheros <script> incluidos en el index.html
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/blob/master/public/index.html#L28

### Servicios Angular con promesas
Ejemplo de servicio con customer:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/blob/master/public/app/services/customers-service.js

### Validaciones

https://github.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/blob/master/public/app/validation/validators.js

Validacion en clientes:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/blob/master/public/app/customer-new-module/customer-new-module.component.js#L19

### Resources
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/blob/master/public/app/services/pets-resources.js

Ejemplo en mascotas:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/blob/master/public/app/pet-new-module/pet-new-module.component.js#L9

### Eventos
emit:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/blob/master/public/app/customer-new-module/customer-new-module.component.js#L31

on:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/blob/master/public/app/customer-module/customer-module.component.js#L15

### Directivas 

https://github.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/blob/master/public/app/directivas/form-customer-directive.js





