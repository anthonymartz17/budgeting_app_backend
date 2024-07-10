# Budget App Backend

## Overview

This is the backend for a budget application that allows users to manage their transactions. The application provides functionality to create, read, update, and delete transactions.

Deployed Server: https://bugeting-app-backend.onrender.com

## Technologies Used

- Node.js
- Express
- Nanoid
- dotenv
- CORS

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/anthonymartz17/budgeting_app_backend.git
   cd budget-app-backend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:

   ```env
   PORT=3000
   ```

### Running the Server

Start the server with:

```sh
npm start
```

The server will run on the port specified in your `.env` file (default is 3000).

## API Endpoints

### Transactions

- **Get all transactions**

  ```http
  GET /transactions
  ```

  Response:

  ```json
  [
    {
      "id": "gRB9aGkGQItzXsNsSeMep",
      "item_name": "Salary",
      "amount": 5000,
      "date": "2024-07-01",
      "merchant": "Employer",
      "category": "Income",
      "isDeposit": true
    },
    ...
  ]
  ```

- **Get a single transaction by ID**

  ```http
  GET /transactions/:id
  ```

  Response (example for a successful fetch):

  ```json
  {
  	"id": "gRB9aGkGQItzXsNsSeMep",
  	"item_name": "Salary",
  	"amount": 5000,
  	"date": "2024-07-01",
  	"merchant": "Employer",
  	"category": "Income",
  	"isDeposit": true
  }
  ```

- **Create a new transaction**

  ```http
  POST /transactions
  ```

  Request Body:

  ```json
  {
  	"item_name": "Freelance",
  	"amount": 1200,
  	"date": "2024-07-06",
  	"merchant": "Client",
  	"category": "Income",
  	"isDeposit": true
  }
  ```

  Response:

  ```json
  {
  	"id": "newlyGeneratedId",
  	"item_name": "Freelance",
  	"amount": 1200,
  	"date": "2024-07-06",
  	"merchant": "Client",
  	"category": "Income",
  	"isDeposit": true
  }
  ```

- **Update an existing transaction**

  ```http
  PUT /transactions/:id
  ```

  Request Body (example to update the amount):

  ```json
  {
  	"amount": 1300
  }
  ```

  Response:

  ```json
  {
  	"id": "gRB9aGkGQItzXsNsSeMep",
  	"item_name": "Salary",
  	"amount": 1300,
  	"date": "2024-07-01",
  	"merchant": "Employer",
  	"category": "Income",
  	"isDeposit": true
  }
  ```

- **Delete a transaction**

  ```http
  DELETE /transactions/:id
  ```

  Response (example for a successful delete):

  ```json
  {
  	"id": "gRB9aGkGQItzXsNsSeMep",
  	"item_name": "Salary",
  	"amount": 5000,
  	"date": "2024-07-01",
  	"merchant": "Employer",
  	"category": "Income",
  	"isDeposit": true
  }
  ```

## Project Structure

- `app.js`: Main application setup
- `controllers/transactionController.js`: Handles transaction routes and logic
- `models/transactionModel.js`: Transaction data model
- `.env`: Environment variables

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is public.
