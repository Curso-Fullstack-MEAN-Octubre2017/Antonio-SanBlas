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

## RESTfull Services API

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
![customers_detail](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/master/public/imagesdetalle-cliente.PNG)

#### Lista Mascotas
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/tree/master/public/app/customer-module
![Pets_list](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/master/public/images/lista-mascotas.PNG)

#### Detalle Mascota
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/tree/master/public/app/customer-detail-module
![Pets_detail](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/Antonio-SanBlas/master/public/images/edit-mascota.PNG)

