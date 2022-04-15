### TODO-LIST API 📝

La funcionalidad de esta api es crear tareas y motrar un listado de las tareas creadas.

#### How to install 🛠

> git clone git@github.com:AraManjon/todo-list-api.git

> cd api

> npm i

#### How to use 💼

To up server from the terminal

> npm run dev

> Visti localhost:5000 or use some interface to star use endpoints as a Postman

Other scripts: 

To run test unit and acceptance

> npm run test

#### Aims 🏁

- Practice builds an application with typescript, Node and mongo, applying concepts of DDD Architecture.

- Use diferents libraries that helps to build an application applying conceepts of clean code.


#### Project distribution 🗃

src folder -> production project

test folder -> test ( not in production )

backend folder -> the external layer ( more near of client )

shared folder -> content likely to be shared by other domains

tasks folder -> domain folder

#### Aproach project solution OUTSIDE IN 🚦

Following a TDD Outside In aproach, the fisrt step of project was:

1.- Create acceptance test:

- library used -> cucumber

- The test should be created with a similar use that has the client with the application.

- The language used in this test should to consider the client language and proposits when use the application.

2.- Integration and unit test

- In TDD outside in flow, this test could be in red while we implement internal logic. Once the llogic is implemented, this test should be pass to green.

- library used -> jest

#### Other considerations 🔍

**SIDE EFFECT**

When we have a method that return void, it are telling us that this method trigger an effect in other application point.

We need to consider and validatee this behaviour, may be we need to test the comunication beetween two entities. (integration test)

**TEST REPOSITORY**

When we have a method save, we need to validate that the item that we want to save is now in the db. To validate this, we have two options, validate only the call to save, and the response of this call is that we wait, by the otheer hand,other option can be implement another method, as find, to validate that this item now is in db, if this method we should need in the application, we can consider this option.

**MOCK TEST REPOSITORY**

We create a mock for repeosoitory to not subject the test of services to the repository implementation.

**VALIDATE REQUEST PARAMS**

Validation of the request parameters, to make sure that it is called with the parameters that we expect. Validate before reaching domain and that responsibility does not have the domain.

Ex: If we use the api to create a task and we don't send a mandatory param body, we need to validate this in controller. 

- library used -> express-validator

**VALUE OBJECTS**

To make the modeling richer

**OBJECT MOTHER**

In test, to generate the values needed in test randomly.

Remove noise from tests.

Remove fragility from our tests.

- library used -> faker

#### CI 🚨

The project is builded with CI with github workflows.

###### // TO-DO

- Eliminar tareas
- Editar tareas

