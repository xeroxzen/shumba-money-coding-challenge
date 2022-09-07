# Shumba Money Coding Challenge

Author: [Andile Jaden Mbele](https://andilembele.netlify.app/)

Shumba Money is a money transfer service that allows one to send money from countries in the diaspora to recipients in Zimbabwe. You are required to build a basic web platform that Shumba Money customers can use to list their recipients. Your web platform should also make it possible for senders to update, create or delete recipients.

## Challenge Specifications

### The web platform must meet the following specifications:

1. It should comprise both a REST API and a web application
2. The REST API should be built using Spring Boot, NodeJS or NestJS. I chose NodeJS
3. The REST API data must be persisted using MySQL, MongoDB or Postgres
4. The REST API must also use the de facto object relational mapper of the framework you choose to build it in (e.g Typeorm or Mongoose for NodeJs and Hibernate for Spring Boot). I chose Mongoose
5. The web application should be built using Angular 2+ or ReactJS. I chose ReactJS
6. Your web application must also be user friendly and aesthetically pleasing in a way that adheres to the Shumba Money brand

## API Structure

1. Customer in this case will also be a user of the web application.Different users can have multiple recipients.
2. A recipient can belong to multiple users in the same application
3. A user can have multiple transactions

### API Design

```json
{
  "id": "string",
  "firstName": "string",
  "middleName": "string",
  "lastName": "string",
  "email": "string",
  "countryOfResidence": "string",
  "phoneNumber": "string",
  "password": "string",
  "recipients": [
    {
      "id": "string",
      "firstName": "string",
      "middleName": "string",
      "lastName": "string",
      "email": "string",
      "phoneNumber": "string",
      "countryOfResidence": "string",
      "cityOrTown": "string",
      "transactions": [
        {
          "id": "string",
          "amount": "number",
          "currency": "string",
          "status": "string",
          "sender": "string",
          "recipient": "string",
          "createdAt": "date",
          "updatedAt": "date"
        }
      ]
    }
  ]
}
```

## Frontend Design

The frontend design should be as simple as possible. It should have the following pages:

1. An auth page
2. A landing page
3. A page to list all recipients
4. A page to create a new recipient
5. A page to update a recipient

## How to use the API

### 1. Start the project on localhost

```bash
$ npm start
```

### 2. Create a customer

```json
{
  "firstName": "Andile",
  "middleName": "Jaden",
  "lastName": "Mbele",
  "email": "andilembele020@gmail.com",
  "countryOfResidence": "Australia",
  "phoneNumber": "778613888",
  "phoneCode": "+61",
  "password": "qwerty#2022"
}
```

### 3. Login

```json
{
  "email": "andilembele020@gmail.com",
  "password": "Qwerty#2022"
}
```

### 4. Create a recipient

```json
{
  "firstName": "Mzimkhulu",
  "middleName": "Michael",
  "lastName": "Mbele",
  "email": "mziemichael@gmail.com",
  "phoneNumber": "+263 77 941 5078",
  "countryOfResidence": "Zimbabwe",
  "cityOrTown": "Bulawayo",
  "sender": ["631222cda962f6e21fd3e014"]
}
```

### 5. Update a recipient

```json
{
  "firstName": "Mzimkhulu",
  "middleName": "Michael",
  "lastName": "Mbele",
  "email": "mziemichael@gmail.com",
  "phoneNumber": "+263 77 941 5078",
  "countryOfResidence": "Zimbabwe",
  "cityOrTown": "Bulawayo"
}
```

### 6. Delete a recipient

API Endpoint: http://localhost:5001/api/v1/recipients/6313018f7f44a99dfd853b7a

```json
{
  "deletedRecipient": {
    "_id": "6313018f7f44a99dfd853b7a",
    "firstName": "Thandeka",
    "middleName": "Phumzile",
    "lastName": "Mbele",
    "email": "thandeka.mbele@gmail.com",
    "phoneNumber": "+263 71 703 2717",
    "countryOfResidence": "Zimbabwe",
    "cityOrTown": "Filabusi",
    "sender": "63125f3677173b2ebf25d482",
    "createdAt": "2022-09-03T07:26:07.457Z",
    "__v": 0
  }
}
```

### 7. List all recipients

```json
{
  "recipients": [
    {
      "_id": "6312feeb4e9eb11b3e360473",
      "firstName": "Nobuhle",
      "middleName": "Melody",
      "lastName": "Ntakana",
      "email": "nobuhle.ntakana@gmail.com",
      "phoneNumber": "+263 77 456 5845",
      "countryOfResidence": "Zimbabwe",
      "cityOrTown": "Bulawayo",
      "sender": {
        "_id": "63125f3677173b2ebf25d482",
        "firstName": "Andile",
        "middleName": "Jaden",
        "lastName": "Mbele",
        "email": "andilembele020@gmail.com",
        "countryOfResidence": "USA",
        "phoneNumber": "778613888",
        "phoneCode": "+1",
        "password": "$2a$10$4YsawhhAVaIQM50xHYMbt.Te.6mv9v8kIGd0Y44YKsISRdjpllVKu",
        "recipients": [
          "6312edd577173b2ebf25d48d",
          "6312ee2277173b2ebf25d491",
          "6312ee7777173b2ebf25d495"
        ],
        "createdAt": "2022-09-02T19:53:26.533Z",
        "__v": 5,
        "recipient": ["6313018f7f44a99dfd853b7a", "631308b6700de6f47b142d31"]
      },
      "createdAt": "2022-09-03T07:14:51.591Z",
      "__v": 0
    },
    {
      "_id": "6312ff384e9eb11b3e360476",
      "firstName": "Primrose",
      "middleName": "Thethelani",
      "lastName": "Magutshwa",
      "email": "primrose.magutshwa@gmail.com",
      "phoneNumber": "+263 78 341 3728",
      "countryOfResidence": "Zimbabwe",
      "cityOrTown": "Bulawayo",
      "sender": {
        "_id": "63125f3677173b2ebf25d482",
        "firstName": "Andile",
        "middleName": "Jaden",
        "lastName": "Mbele",
        "email": "andilembele020@gmail.com",
        "countryOfResidence": "USA",
        "phoneNumber": "778613888",
        "phoneCode": "+1",
        "password": "$2a$10$4YsawhhAVaIQM50xHYMbt.Te.6mv9v8kIGd0Y44YKsISRdjpllVKu",
        "recipients": [
          "6312edd577173b2ebf25d48d",
          "6312ee2277173b2ebf25d491",
          "6312ee7777173b2ebf25d495"
        ],
        "createdAt": "2022-09-02T19:53:26.533Z",
        "__v": 5,
        "recipient": ["6313018f7f44a99dfd853b7a", "631308b6700de6f47b142d31"]
      },
      "createdAt": "2022-09-03T07:16:08.833Z",
      "__v": 0
    },
    {
      "_id": "6313018f7f44a99dfd853b7a",
      "firstName": "Thandeka",
      "middleName": "Phumzile",
      "lastName": "Mbele",
      "email": "thandeka.mbele@gmail.com",
      "phoneNumber": "+263 71 703 2717",
      "countryOfResidence": "Zimbabwe",
      "cityOrTown": "Filabusi",
      "sender": {
        "_id": "63125f3677173b2ebf25d482",
        "firstName": "Andile",
        "middleName": "Jaden",
        "lastName": "Mbele",
        "email": "andilembele020@gmail.com",
        "countryOfResidence": "USA",
        "phoneNumber": "778613888",
        "phoneCode": "+1",
        "password": "$2a$10$4YsawhhAVaIQM50xHYMbt.Te.6mv9v8kIGd0Y44YKsISRdjpllVKu",
        "recipients": [
          "6312edd577173b2ebf25d48d",
          "6312ee2277173b2ebf25d491",
          "6312ee7777173b2ebf25d495"
        ],
        "createdAt": "2022-09-02T19:53:26.533Z",
        "__v": 5,
        "recipient": ["6313018f7f44a99dfd853b7a", "631308b6700de6f47b142d31"]
      },
      "createdAt": "2022-09-03T07:26:07.457Z",
      "__v": 0
    },
    {
      "_id": "6313089b2c8261e88ee16800",
      "firstName": "Akhona",
      "middleName": "Sasha",
      "lastName": "Mbele",
      "email": "akhona.mbele@gmail.com",
      "phoneNumber": "+263 77 184 8651",
      "countryOfResidence": "Zimbabwe",
      "cityOrTown": "Harare",
      "sender": {
        "_id": "63125f3677173b2ebf25d482",
        "firstName": "Andile",
        "middleName": "Jaden",
        "lastName": "Mbele",
        "email": "andilembele020@gmail.com",
        "countryOfResidence": "USA",
        "phoneNumber": "778613888",
        "phoneCode": "+1",
        "password": "$2a$10$4YsawhhAVaIQM50xHYMbt.Te.6mv9v8kIGd0Y44YKsISRdjpllVKu",
        "recipients": [
          "6312edd577173b2ebf25d48d",
          "6312ee2277173b2ebf25d491",
          "6312ee7777173b2ebf25d495"
        ],
        "createdAt": "2022-09-02T19:53:26.533Z",
        "__v": 5,
        "recipient": ["6313018f7f44a99dfd853b7a", "631308b6700de6f47b142d31"]
      },
      "createdAt": "2022-09-03T07:56:11.745Z",
      "__v": 0
    },
    {
      "_id": "631308b6700de6f47b142d31",
      "firstName": "Akhona",
      "middleName": "Sasha",
      "lastName": "Mbele",
      "email": "akhona.mbele@gmail.com",
      "phoneNumber": "+263 77 184 8651",
      "countryOfResidence": "Zimbabwe",
      "cityOrTown": "Harare",
      "sender": {
        "_id": "63125f3677173b2ebf25d482",
        "firstName": "Andile",
        "middleName": "Jaden",
        "lastName": "Mbele",
        "email": "andilembele020@gmail.com",
        "countryOfResidence": "USA",
        "phoneNumber": "778613888",
        "phoneCode": "+1",
        "password": "$2a$10$4YsawhhAVaIQM50xHYMbt.Te.6mv9v8kIGd0Y44YKsISRdjpllVKu",
        "recipients": [
          "6312edd577173b2ebf25d48d",
          "6312ee2277173b2ebf25d491",
          "6312ee7777173b2ebf25d495"
        ],
        "createdAt": "2022-09-02T19:53:26.533Z",
        "__v": 5,
        "recipient": ["6313018f7f44a99dfd853b7a", "631308b6700de6f47b142d31"]
      },
      "createdAt": "2022-09-03T07:56:38.751Z",
      "__v": 0
    }
  ]
}
```

### 8. Create a transaction

```json
{
  "amount": 100,
  "currency": "USD",
  "status": "PENDING",
  "sender": "string"
}
```

### 9. Update a transaction

```json
{
  "amount": 100,
  "currency": "USD",
  "status": "AUTHORIZED",
  "sender": "string"
}
```

### 10. Delete a transaction

```json
{
  "amount": 100,
  "currency": "USD",
  "status": "PENDING",
  "sender": "string"
}
```

### 11. List all transactions

```json
{
  "amount": 100,
  "currency": "USD",
  "status": "PENDING",
  "sender": "string"
}
```

## How to use the Reactjs Fronted App connected to the API

### 1. Start the project on localhost

1. The project has two separate folders, one for the backend and the other for the frontend. To start the project, you need to start the backend first and then the frontend.
2. To start the backend, open the terminal and navigate to the backend folder. Then run the following command:

```bash
npm start
```

3. The project will start on localhost:5001 as I set it to.
4. To start the frontend, open the terminal and navigate to the frontend folder. Then run the following command:

```bash
npm start
```

5. The frontend project will start on localhost:3000

```bash
$ npm start
```

### 2. Open your browser

## Submission

1. Fork this repository
2. Create a new branch with your name
3. Commit your code to the branch you created
4. Create a pull request to the master branch of this repository
5. Send an email to [email](mailto:andilembele020@gmail.com)
