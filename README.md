# baresLovers
## Complementos en el proyecto Angular añadidos hasta la fecha 25/08/2023
**Bootstrap (Añadido)**
**PWA (Pendiente)**
**Cordova (Pendiente)**

## Funcionalidades en el proyecto Angular añadidos hasta la fecha 25/08/2023
**Conexion con el API mediante el uso de Service MongodbAPIService**
**Interface Root2 para el uso del servicio**

### Primero, recordar inicializar el servidor por parte del API
**Dentro de la carpeta del API**
`npm start`

### Segundo, se inicializa el servidor de prueba de angular
**Dentro de la carpea del proyecto Angular**
`ng serve -o`

### Por defecto, al incializar cualquier servicio, se usa el puerto 3000, de manera que el primer servicio que se inicie tendra el puerto 3000. Autom. se cambia de puerto al momento de incializar otro servicio

## Notas (Estructura)
Debido a la presencia de muchos componentes, y para no causar confusion en saber cual es el rol de cada uno, se explica como es la estructura e interaccion de cada uno en el proyecto
<img src="https://github.com/DavidAlex99/baresLovers/blob/main/baresLovers/src/assets/Estructura.drawio.png?raw=true" alt="Estructura de componentes"/>
Tambien, este proyecto Angular se cpnecta de manera directa a una API desarrollada en Node (Expresss)

## Actualizacion
Para que el desarrollo del proyecto esta organizada de manera que se haga uso de dos LP distintos, se realizo otra estructura con el uso de los siguientes repositorios:
### Angular (Front-end: TypeScript-javascripy)
https://github.com/DavidAlex99/BarLoversAngular.git
### Ruby (Back-end)
https://github.com/DavidAlex99/BarLoversAdminAPI.git