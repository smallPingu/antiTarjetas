# antiTarjetas
## En un hotel...
Nos encontramos en un hotel local humilde en un pueblo de Suiza. Hay un total de 500 habitaciones con 2 o 3 personas por cada habitación.
Han estado utilizando durante bastante tiempo llaves individuales para permitir a sus clientes acceder a sus respectivas habitaciones. 
Un día, un individuo con traje y corbata les propuso mejorar su mecanismo de entrada, cambiando las cerraduras tradicionales por cerraduras electrónicas.
A los dueños les pareció bien, pero una vez fueron instaladas, se vieron ante el problema de las tarjetas electrónicas. No conocían a nadie que pudiera producir en masivo las tarjetas, tras la instalación de las cerraduras no sabían si les daba el dinero para producir todas esas tarjetas y no sabían otra forma de acceder que no fuese cada tarjeta abre su respectiva puerta, como han estado haciendo con las llaves...

## La idea principal 
Crear una aplicación que pueda abrir una puerta tras llamar a un **teléfono** o al usar una **página web**.
La puerta en cuestión puede ser para _un apartamento, un parking, una tienda, un **hotel**, un punto de entrega_, etc.
![image](https://github.com/smallPingu/antiTarjetas/assets/134606360/462a1a73-7f12-45ce-8843-13b7edfffe86)
![image](https://github.com/smallPingu/antiTarjetas/assets/134606360/8319e091-5cdb-4a90-9421-acaaf031313a)
(La idea es que esta solución a este problema luego pueda ser usado por otros individuos, gracias a su filosofía de código libre)

## Validación 
Para validar la autenticidad del usuario que pide abrir la puerta, debe haberse registrado algún dato personal suyo por el _propietario_ de la puerta.
Cuando se envíe la solicitud para abrir la puerta, sea por teléfono o por una página web, se comprobará la ubicación del usuario. Para la página web, se pedirá la ubicación. Si es el número de teléfono, se comprueba el prefijo. Si es cercana a la puerta (página web pide más cercanía que el número de teléfono), se permite comprobar los siguientes datos.
Si se va a utilizar el método del número de teléfono, debe haberse registrado con _anterioridad_ el **número de teléfono** en la base de datos. Si no, no hace falta.
