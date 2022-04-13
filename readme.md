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

