### MODELS

src  folder
Lo que va a produccion
- test (los test mas similares al comportamiento de un usuario) cucumber / cypres

    mooc
    |--- task folder
    |     |--- application
    |     |--- domain
    |     |--- infrastructura
    |
    |--- shared (elemento de dominio compartido, ex. task id)


#### TASK
id: (number) Unique indentifier for the task record
name: (string) Name of the task
description: (string) Desscription of the task
date: (string) The date of task creation

OUTSIDE IN

test de aceptación con cucumber (black box)
Desde un punto de vista externo, de coomportamient visible, dede quien utilizará la api (cliente), este cliente va a hacer peticiones hhtp, pero podría ser el caso de que fuera otro servicio quien hace uso...


application (integration test)
validar un side effect
cuando un metodo retorna void, tiene un side Effect
para testear esto, necesitatos testear como dos entidades se comunican entre ellas

infrastructure test repository ()
para poder testear que la funcion de save nos funciona, ahora de momento podemos implementar un repositorio en memoria.

Al hacer el save, necsitamos comprovar si efectivamente hemos guardado la task, para ello podemos hacer una implementacion en este reepossitorio, para hcaer loss test, teniendo en cuenta que en un futuro seguramente necesitaremos un find de la task.

creamos un mock para repeosoitory para no sujetar el test dee task creator a la implementación del repository