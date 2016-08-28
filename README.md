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

If not included, you must create a ```dotenv``` file in your main project folder in order to run the server properly.
```
.env

Example:
DB_NAME=crudnizer
DB_USER=bob
DB_PASS=
DB_HOST=127.1.2
DB_SCHEMA=mysql
DB_PORT=3833
```

To run database Server
```
mysql.server start

You must have at least one set of User & App Data in your database to get positive results for the 'Find All Gym Locations" test when unit testing.
```
##Run Unit tests

To run the unit test
```
npm test
```

##Users Crud Routes

| Route Hit | Response |
| --- | --- |
| POST /api/v1/users | ```" {  "name": "Eminem","age": 42,"hobby": "Rapping"}```


| Route Hit | Response |
| --- | --- |
| GET /api/v1/users | ```[{"id": 5,"name": "RicanChica","age": 21,"hobby": "Computer Programming","createdAt": "2016-08-08T03:13:08.000Z","updatedAt": "2016-08-08T03:20:17.000Z"},{"id": 7,"name": "Eminem","age": 42,"hobby": "Rapping","createdAt": "2016-08-08T03:21:24.000Z","updatedAt": "2016-08-08T03:21:24.000Z"}]```


| Route Hit | Response |
| --- | --- |
| GET /api/v1/users/:id | ```{"id": 5,"name": "RicanChica","age": 21,"hobby": "Computer Programming","createdAt":"2016-08-08T03:13:08.000Z","updatedAt":"2016-08-08T03:20:17.000Z","apps": []}```


| Route Hit | Response |
| --- | --- |
| POST /api/v1/users/:id  | ```{"id": 7,"name": "LL Cool J","age": 42,"hobby": "Rapping","createdAt": "2016-08-08T03:21:24.000Z","updatedAt": "2016-08-08T03:46:27.000Z"}```

| Route Hit | Response |
| --- | --- |
| DELETE  /api/v1/users/:id| ```1```

##Apps Crud Routes

| Route Hit | Response |
| --- | --- |
| POST /api/v1/apps/ | ```" {"title": "Battle Field","description": "Pokemon Battle Ground","releaseDate": "2017-08-12"}```


| Route Hit | Response |
| --- | --- |
| GET /api/v1/apps/:id | ```{"id": 8,"title": "Pokemon Go","description": "A mobile app designed to catch live pokemon","releaseDate": "2016-07-11","createdAt": "2016-08-08T03:12:05.000Z","updatedAt": "2016-08-08T03:12:05.000Z","userID": null}```


| Route Hit | Response |
| --- | --- |
| GET /api/v1/users/:id/apps | ```[]```


| Route Hit | Response |
| --- | --- |
| GET /api/v1/apps | ```[{"id": 7,"title": "Battle Field","description": "Pokemon Battle Ground","releaseDate": "2017-08-12","createdAt": "2016-08-08T03:10:05.000Z","updatedAt": "2016-08-08T03:10:05.000Z","userID": null},{"id": 8,"title": "Pokemon Go","description": "A mobile app designed to catch live pokemon","releaseDate": "2016-07-11","createdAt": "2016-08-08T03:12:05.000Z","updatedAt": "2016-08-08T03:12:05.000Z","userID": null}]```

| Route Hit | Response |
| --- | --- |
| POST /api/v1/apps/:id| ```{"id": 7,"title": "Batman VS Superman","description": "Battle of the Heroes","releaseDate": "2020-12-06","createdAt": "2016-08-08T03:10:05.000Z","updatedAt": "2016-08-08T03:10:05.000Z","userID": null}```


| Route Hit | Response |
| --- | --- |
| DELETE /api/v1/apps/:id | ```1```
