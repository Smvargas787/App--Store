#App Store

##Installation

Install all Dependencies
```
npm install
```

Install command line tools
```
npm i mocha -g
```
##Start The Server

To run the server with default settings run
```
npm start
```
##Run Unit tests

To run the unit test
```
npm test
```

##Usage

If not included, you must create a ```dotenv``` file in your main project folder in order to run the server properly.
```
.env

Example:
NAME=crudnizer
DB_USER=bob
DB_PASS=
DB_HOST=127.1.2
DB_SCHEMA=mysql
DB_PORT=3833
```
To run database Server
```
mysql.server start

You must have at least one set of User & App Data in your database to get positive results for the 'Find All Gym Locations' test when unit testing.
```

##Unit Testing

To initiate the Unit Tests
```
mocha
```

To See All Errors and Debugs of the Unit Tests
```
DEBUG=true mocha
```


##Users Routes

| Route Hit | Response |
| --- | --- |
| POST /api/v1/users | ```Poke Pathway Activated: POST /users```


| Route Hit | Response |
| --- | --- |
| GET /api/v1/users | ```Poke Pathway Activated: GET /users```


| Route Hit | Response |
| --- | --- |
| GET /api/v1/users/:id | ```	Poke Pathway Activated: GET /users/:id```


| Route Hit | Response |
| --- | --- |
| POST /api/v1/users/:id  | ```	Poke Pathway Activated: POST /users/:id```

| Route Hit | Response |
| --- | --- |
| DELETE  /api/v1/users/:id| ```	Poke Pathway Activated: DELETE /users/:id```

##Apps Routes

| Route Hit | Response |
| --- | --- |
| POST /api/v1/apps/ | ```Gym Pathway Activated: POST /apps```


| Route Hit | Response |
| --- | --- |
| GET /api/v1/apps/:id | ```Gym Pathway Activated: GET /apps:id```


| Route Hit | Response |
| --- | --- |
| GET /api/v1/users/:id/apps | ```Gym Pathway Activated: GET /users/:id/apps```


| Route Hit | Response |
| --- | --- |
| GET /api/v1/apps | ```Gym Pathway Activated: GET /apps```

| Route Hit | Response |
| --- | --- |
| POST /api/v1/apps/:id| ```Gym Pathway Activated: GET /apps:id```


| Route Hit | Response |
| --- | --- |
| DELETE /api/v1/apps/:id | ```Gym Pathway Activated: DELETE /apps:id```
