# FOOD COURT
This is a backend app for food court powered by Nodejs, Express and TS

## Requirements
- NodeJS runtime
- NPM or Yarn package manager
- Postgres Database

## Features
- Completely written in [Typescript](https://typescriptlang.org/)
- [Express](https://expressjs.com/) Nodejs framework
- [PostgreSQL](https://www.postgresql.org/docs/) Open Source Relational Database
- [Objection.js](https://vincit.github.io/objection.js/) SQL ORM for Nodejs
- [Knexjs](https://knexjs.org/) SQL query builder

## How to install
- Clone the repository
- `git clone https://github.com/OjerIsaac/food_court.git`
- `cd food_court`
- Install dependencies
- `npm install`
- Setup environment variable
- `cp .env.sample .env`
- Fill in data for db (MySQL or Postgres)
- Run Migration
- `npm run migrate:latest`
- To seed db
- `npm run seed:run`
- Run the server in dev env
- `npm run dev`

## Documentation
### Add brand

POST
```shell
http://localhost:2020/brands/add-brand
```
PAYLOAD DATA

```shell
{
    "name": "Cabin"
}
```

### Create new meal

POST
```shell
http://localhost:2020/brands/2/addons
```
PAYLOAD DATA

```shell
{
    "name": "Bread & eggs",
    "description": "Hot",
    "price": "300",
    "category": "Breakfast"
}
```

### Get all meal

GET
```shell
http://localhost:2020/brands/3/addons
```

### Get one meal

GET
```shell
http://localhost:2020/brands/3/addons/7
```

### Update meal

PUT
```shell
http://localhost:2020/brands/2/addons/8
```
PAYLOAD DATA

```shell
{
    "name": "Bread & eggs",
    "description": "Hot",
    "price": "450",
    "category": "Breakfast"
}
```