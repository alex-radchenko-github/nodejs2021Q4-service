# RS School REST service

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Running application

```
npm start
```

After starting the app on port (4000 as default) you can open
in your browser OpenAPI documentation by typing http://localhost:4000/doc/.
For more information about OpenAPI/Swagger please visit https://swagger.io/.


## Running application with Docker

After git clone {repository URL}
```
npm install
docker-compose up --build
```
В редких случаях может не запускаться приложение на windows(На mac всё ОК)
Тогда нужно в docker-compose.yml удалить слешь
в 8 после первого logs
      - logs:/app/logs/
и 28 строке после первого db
      - db:/var/lib/postgresql/data/

      
 

## Working with TypeORM migration

Mskung new migration after changes:
1. In the .env file : TYPEORM_HOST = localhost
```
docker-compose down
docker-compose up --build
```
2.  
```
npm run generate
```
The new migration file should appear in the folder "src/migration"

3. In the .env file : TYPEORM_HOST = postgres

4.
```
docker-compose down
docker-compose up --build
```

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm test
```

To run only one of all test suites (users, boards or tasks)

```
npm test <suite name>
```

To run all test with authorization

```
npm run test:auth
```

To run only specific test suite with authorization (users, boards or tasks)

```
npm run test:auth <suite name>
```

## Development

If you're using VSCode, you can get a better developer experience from integration with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions.

### Auto-fix and format

```
npm run lint
```

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging



--------------------------------------
EXPRESS SERVER
--------------------------------------
Phase started: load 50 users (index: 0, duration: 20s) 14:54:13(-0500)

--------------------------------------
Metrics for period to: 14:54:20(-0500) (width: 6.638s)
--------------------------------------

http.codes.200: ................................................................ 123
http.codes.201: ................................................................ 67
http.codes.400: ................................................................ 80
http.codes.404: ................................................................ 64
http.request_rate: ............................................................. 50/sec
http.requests: ................................................................. 336
http.response_time:
  min: ......................................................................... 2
  max: ......................................................................... 382
  median: ...................................................................... 25.8
  p95: ......................................................................... 111.1
  p99: ......................................................................... 308
http.responses: ................................................................ 334
vusers.completed: .............................................................. 334
vusers.created: ................................................................ 336
vusers.created_by_name.Create user: ............................................ 68
vusers.created_by_name.Update user user: ....................................... 80
vusers.created_by_name.delete users: ........................................... 58
vusers.created_by_name.get all users: .......................................... 65
vusers.created_by_name.get user by id: ......................................... 65
vusers.session_length:
  min: ......................................................................... 3.9
  max: ......................................................................... 390.6
  median: ...................................................................... 30.3
  p95: ......................................................................... 113.3
  p99: ......................................................................... 314.2


Phase completed: load 50 users (index: 0, duration: 20s) 14:54:33(-0500)

--------------------------------------
Metrics for period to: 14:54:30(-0500) (width: 9.987s)
--------------------------------------

http.codes.200: ................................................................ 192
http.codes.201: ................................................................ 98
http.codes.400: ................................................................ 98
http.codes.404: ................................................................ 111
http.request_rate: ............................................................. 50/sec
http.requests: ................................................................. 500
http.response_time:
  min: ......................................................................... 1
  max: ......................................................................... 102
  median: ...................................................................... 22
  p95: ......................................................................... 74.4
  p99: ......................................................................... 92.8
http.responses: ................................................................ 499
vusers.completed: .............................................................. 499
vusers.created: ................................................................ 500
vusers.created_by_name.Create user: ............................................ 99
vusers.created_by_name.Update user user: ....................................... 98
vusers.created_by_name.delete users: ........................................... 87
vusers.created_by_name.get all users: .......................................... 106
vusers.created_by_name.get user by id: ......................................... 110
vusers.session_length:
  min: ......................................................................... 3.6
  max: ......................................................................... 104.7
  median: ...................................................................... 26.3
  p95: ......................................................................... 79.1
  p99: ......................................................................... 94.6


--------------------------------------
Metrics for period to: 14:54:40(-0500) (width: 3.267s)
--------------------------------------

http.codes.200: ................................................................ 63
http.codes.201: ................................................................ 32
http.codes.400: ................................................................ 32
http.codes.404: ................................................................ 40
http.request_rate: ............................................................. 50/sec
http.requests: ................................................................. 164
http.response_time:
  min: ......................................................................... 2
  max: ......................................................................... 97
  median: ...................................................................... 22
  p95: ......................................................................... 74.4
  p99: ......................................................................... 94.6
http.responses: ................................................................ 167
vusers.completed: .............................................................. 167
vusers.created: ................................................................ 164
vusers.created_by_name.Create user: ............................................ 30
vusers.created_by_name.Update user user: ....................................... 32
vusers.created_by_name.delete users: ........................................... 23
vusers.created_by_name.get all users: .......................................... 39
vusers.created_by_name.get user by id: ......................................... 40
vusers.session_length:
  min: ......................................................................... 3.6
  max: ......................................................................... 99.8
  median: ...................................................................... 26.8
  p95: ......................................................................... 90.9
  p99: ......................................................................... 96.6


All VUs finished. Total time: 21 seconds

--------------------------------
Summary report @ 14:54:34(-0500)
--------------------------------

http.codes.200: ................................................................ 378
http.codes.201: ................................................................ 197
http.codes.400: ................................................................ 210
http.codes.404: ................................................................ 215
http.request_rate: ............................................................. 50/sec
http.requests: ................................................................. 1000
http.response_time:
  min: ......................................................................... 1
  max: ......................................................................... 382
  median: ...................................................................... 23.8
  p95: ......................................................................... 80.6
  p99: ......................................................................... 210.6
http.responses: ................................................................ 1000
vusers.completed: .............................................................. 1000
vusers.created: ................................................................ 1000
vusers.created_by_name.Create user: ............................................ 197
vusers.created_by_name.Update user user: ....................................... 210
vusers.created_by_name.delete users: ........................................... 168
vusers.created_by_name.get all users: .......................................... 210
vusers.created_by_name.get user by id: ......................................... 215
vusers.session_length:
  min: ......................................................................... 3.6
  max: ......................................................................... 390.6
  median: ...................................................................... 27.9
  p95: ......................................................................... 85.6
  p99: ......................................................................... 214.9

---
FASTIFY SERVER
---
Phase started: load 50 users (index: 0, duration: 20s) 14:57:39(-0500)

--------------------------------------
Metrics for period to: 14:57:40(-0500) (width: 0.555s)
--------------------------------------

http.codes.200: ................................................................ 12
http.codes.201: ................................................................ 7
http.codes.400: ................................................................ 3
http.codes.404: ................................................................ 10
http.request_rate: ............................................................. 32/sec
http.requests: ................................................................. 32
http.response_time:
  min: ......................................................................... 18
  max: ......................................................................... 340
  median: ...................................................................... 82.3
  p95: ......................................................................... 290.1
  p99: ......................................................................... 320.6
http.responses: ................................................................ 32
vusers.completed: .............................................................. 32
vusers.created: ................................................................ 32
vusers.created_by_name.Create user: ............................................ 7
vusers.created_by_name.Update user user: ....................................... 3
vusers.created_by_name.delete users: ........................................... 6
vusers.created_by_name.get all users: .......................................... 6
vusers.created_by_name.get user by id: ......................................... 10
vusers.session_length:
  min: ......................................................................... 20.6
  max: ......................................................................... 351.5
  median: ...................................................................... 96.6
  p95: ......................................................................... 301.9
  p99: ......................................................................... 333.7


Phase completed: load 50 users (index: 0, duration: 20s) 14:57:59(-0500)

--------------------------------------
Metrics for period to: 14:57:50(-0500) (width: 9.884s)
--------------------------------------

http.codes.200: ................................................................ 222
http.codes.201: ................................................................ 83
http.codes.400: ................................................................ 106
http.codes.404: ................................................................ 89
http.request_rate: ............................................................. 50/sec
http.requests: ................................................................. 500
http.response_time:
  min: ......................................................................... 1
  max: ......................................................................... 136
  median: ...................................................................... 23.8
  p95: ......................................................................... 80.6
  p99: ......................................................................... 104.6
http.responses: ................................................................ 500
vusers.completed: .............................................................. 500
vusers.created: ................................................................ 500
vusers.created_by_name.Create user: ............................................ 83
vusers.created_by_name.Update user user: ....................................... 106
vusers.created_by_name.delete users: ........................................... 107
vusers.created_by_name.get all users: .......................................... 115
vusers.created_by_name.get user by id: ......................................... 89
vusers.session_length:
  min: ......................................................................... 3.6
  max: ......................................................................... 139.2
  median: ...................................................................... 29.7
  p95: ......................................................................... 85.6
  p99: ......................................................................... 106.7


--------------------------------------
Metrics for period to: 14:58:00(-0500) (width: 9.225s)
--------------------------------------

http.codes.200: ................................................................ 189
http.codes.201: ................................................................ 89
http.codes.400: ................................................................ 99
http.codes.404: ................................................................ 91
http.request_rate: ............................................................. 50/sec
http.requests: ................................................................. 468
http.response_time:
  min: ......................................................................... 2
  max: ......................................................................... 107
  median: ...................................................................... 23.8
  p95: ......................................................................... 74.4
  p99: ......................................................................... 94.6
http.responses: ................................................................ 468
vusers.completed: .............................................................. 468
vusers.created: ................................................................ 468
vusers.created_by_name.Create user: ............................................ 89
vusers.created_by_name.Update user user: ....................................... 99
vusers.created_by_name.delete users: ........................................... 93
vusers.created_by_name.get all users: .......................................... 96
vusers.created_by_name.get user by id: ......................................... 91
vusers.session_length:
  min: ......................................................................... 3.4
  max: ......................................................................... 108.7
  median: ...................................................................... 28.5
  p95: ......................................................................... 80.6
  p99: ......................................................................... 100.5


All VUs finished. Total time: 21 seconds

--------------------------------
Summary report @ 14:58:00(-0500)
--------------------------------

http.codes.200: ................................................................ 423
http.codes.201: ................................................................ 179
http.codes.400: ................................................................ 208
http.codes.404: ................................................................ 190
http.request_rate: ............................................................. 41/sec
http.requests: ................................................................. 1000
http.response_time:
  min: ......................................................................... 1
  max: ......................................................................... 340
  median: ...................................................................... 24.8
  p95: ......................................................................... 85.6
  p99: ......................................................................... 147
http.responses: ................................................................ 1000
vusers.completed: .............................................................. 1000
vusers.created: ................................................................ 1000
vusers.created_by_name.Create user: ............................................ 179
vusers.created_by_name.Update user user: ....................................... 208
vusers.created_by_name.delete users: ........................................... 206
vusers.created_by_name.get all users: .......................................... 217
vusers.created_by_name.get user by id: ......................................... 190
vusers.session_length:
  min: ......................................................................... 3.4
  max: ......................................................................... 351.5
  median: ...................................................................... 29.7
  p95: ......................................................................... 89.1
  p99: ......................................................................... 149.9
