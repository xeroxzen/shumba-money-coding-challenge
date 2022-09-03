# Shumba Money Coding Challenge

Shumba Money is a money transfer service that allows one to send money from countries in the diaspora to recipients in Zimbabwe. You are required to build a basic web platform that Shumba Money customers can use to list their recipients. Your web platform should also make it possible for senders to update, create or delete recipients.

## Challenge Specifications
### The web platform must meet the following specifications:
1. It should comprise both a REST API and a web application
2. The REST API should be built using Spring Boot, NodeJS or NestJS
3. The REST API data must be persisted using MySQL, MongoDB or Postgres
4.  The REST API must also use the de facto object relational mapper of the framework you choose to build it in (e.g Typeorm or Mongoose for NodeJs and Hibernate for Spring Boot)
5. The web application should be built using Angular 2+ or ReactJS
6. Your web application must also be user friendly and aesthetically pleasing in a way that adheres to the Shumba Money brand

## API Structure
1. Customer in this case will also be a user of the web application.Different users can have multiple recipients. 
2. A recipient can belong to multiple users in the same application
3. A user can have multiple transactions

### Customer Model
```json
{
    "id": "string",
    "firstName": "string",
    "middleName": "string",
    "lastName": "string",
    "email": "string",
    "countryOfResidence": "string",
    "phoneCode": "string",
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