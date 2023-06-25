# Wordle Game

## React, Typescript, Tailwind CSS

[**Ver Demo**](https://wordle-ea.netlify.app/)

- [x] Deberá detectar que es la primera vez que entra y deberá mostrar las instrucciones
del juego
- [x] Al iniciar, la aplicación deberá seleccionar automáticamente una palabra de 5 letras
del catálogo de palabras
- [x] Al teclear o al dar click en una letra del teclado virtual, la letra se mostrará en la
primera caja que se encuentre vacía y así sucesivamente
- [x] Al completar una fila de 5 letras, la aplicación compará cada letra de palabra
formada con la palabra seleccionada en el punto 3 y se aplicará la siguiente lógica:
a. Si la letra ingresada está en el mismo lugar, la caja se pintara de verde
b. Si la letra ingresada está en la palabra pero no en el mismo lugar, la caja se
pintará de amarillo
c. Si la letra ingresada no se encuentra en la palabra, la caja se mostrar de
color gris

- [x] Si coincide la palabra ingresada con la seleccionada, mostrará el modal de
estadísticas y sumará un punto al contador de victorias y al contador de partidas
- [x] Si el usuario llena las 5 filas sin lograr que coincida la palabra, mostrará el modal de
estadísticas y sumará un punto al contador de partidas. Además, mostrará la palabra
que fue seleccionada
- [x] Cada 5 minutos la aplicación seleccionará otra palabra y limpiará el tablero, esta
palabra no debe repetirse
- [x] La aplicación mostrará el modal de instrucciones al dar click en el icono de info

- [x] La aplicación mostrará el modal de estadísticas al dar click en el icono de estadisticas
- La aplicación se mostrará en “modo oscuro” al activar el toggle*
- La aplicación se mostrará en “modo claro” al desactivar el toggle*