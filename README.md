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

##Routes

| Route Hit | Response |
| --- | --- |
| GET /api/v1/apps  | ```"id":"330571-002","title":"Battle Field","description":"An app designed to gather trainer's in one area to defend their levels.","releaseDate":"2018-03-05T22:9:20.000ZUTC"}[{"id":"32818-001","title":"Trainer's Gym","description":"An API that can be used to operate inside of a Pokemon gym for users.","releaseDate":"2017-010-13T22:12:20.000ZUTC"}```


| Route Hit | Response |
| --- | --- |
| GET /api/v1/users  | ```[{"user":{"id":"025","name":"Pikachu","type":"Electric"}} {"user":{"id":"004","name":"Charmander","type":"Fire"}}{"user": {"id":"007","name":"Squirtle","type":"Water"}}]```


| Route Hit | Response |
| --- | --- |
| GET /api/v1/apps/:id  | ```{"id":"63131-003","title":"Pokedex","description":"An app created to share and engage with others of comic book characters.","releaseDate":"2018-08-05T22:12:00.000ZUTC"}```


| Route Hit | Response |
| --- | --- |
| GET /api/v1/users/:id  | ```{"id":"004","name":"Charmander","type":"Fire"}```
