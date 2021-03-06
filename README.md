[ ![Codeship Status for Smvargas787/App--Store](https://codeship.com/projects/29b76e20-4976-0134-7a5b-56bd1d4e9b8b/status?branch=master)](https://codeship.com/projects/169532)

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
##Unit Testing

To initiate the Unit Tests
```
mocha
```

To See All Errors and Debugs of the Unit Tests
```
DEBUG=true mocha
```

##Usage

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

You must have at least one set of User & App Data in your database to get positive results for the 'Find All Gym Locations' test when unit testing.
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

##Workflow

Steps to follow when setting up your feature branch work stations via command line:

1. Create a 2nd branch aside from your master branch

  ```
  git checkout -b newBranch
  ```

2. Merge new branch with your master branch

  ```
  git merge master
  ```

3. Push merged code up to newBranch for updated version

  ```
  git push origin newBranch
  ```

4. Check newBranch repo to see if it's up to date with the master branch.  



##Deployment

In order to deploy your final adjustments to your work you must first check/realize if you are on the current branch that you want to deploy out.

Via command line:

1. Check what branch you are currently on

  ```
  git branch
  ```

2. If you're not on the correct branch, change it to the branch that you wish to deploy

  ```
  git checkout deployreadyBranch
  ```

3. Commit any code changes made to the soon deployed branch before deployment

  **git add all:**
  ```
  git gaa
  ```

  **git commit message:**
  ```
  git commit -m "Added readme file to complete for deployment
  ```

  **git push:**
  ```
  git push origin deployreadyBranch
  ```

4. Merge updated code from ```deployreadyBranch``` to master branch for final deployment

  ```
  git merge master
  ```

5. Check codeship to see if your code is passing to get automatically deployed to heroku
