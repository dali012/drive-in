# Carpooling App API

Welcome to the Carpooling App API project! This API is built using NestJS, PostgreSQL, and TypeORM, providing a robust backend solution for managing carpooling services.

## Table of Contents

- [Carpooling App API](#carpooling-app-api)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Application](#running-the-application)
  - [API Endpoints](#api-endpoints)
    - [Health Check](#health-check)
    - [Authentication Endpoints](#authentication-endpoints)
  - [Technologies](#technologies)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- User management: Registration, profile management, and user authentication.
- Carpooling management: Create, update, and delete carpool trips.
- Booking system: Users can book trips and manage their bookings.
- Search functionality: Search for available carpool trips based on various criteria.

## Installation

Follow these steps to set up the Carpooling App API on your local machine.

1. **Clone the Repository**

   ```bash
   git clone https://github.com/dali012/drive-in.git
   cd drive-in
   ```

2. **Install Dependencies**

   ```bash
    pnpm install

   ```

3. **Setup PostgreSQL**
   - Create a PostgreSQL database and user. Update your PostgreSQL configuration in the .env file see [Configuration](#configuration).

## Configuration

- Create a .env file in the root directory of the project and configure the environment variables:

  ```bash
  DATABASE_HOST=localhost
  DATABASE_PORT=5432
  DATABASE_USERNAME=your-username
  DATABASE_PASSWORD=your-password
  DATABASE_NAME=carpooling_app
  API_KEY=your-secret-key
  ```

## Running the Application

1. **Run Migrations**

   ```bash
   pnpm migration:up
   ```

2. **Start the Application**

   - Run the application in development mode:

   ```bash
   pnpm start:dev
   ```

   - Run the application in production mode:

   ```bash
   pnpm start
   ```

## API Endpoints

- The API is organized into the following endpoints:

- **GET** `/api/users` (version: 1)
- **GET** `/api/users/me` (version: 1)
- **PATCH** `/api/users/me` (version: 1)
- **DELETE** `/api/users/me` (version: 1)
- **PATCH** `/api/users/ban/:userId` (version: 1)
- **GET** `/api/users/:userId` (version: 1)
- **PATCH** `/api/users/:userId` (version: 1)
- **DELETE** `/api/users/delete/:userId` (version: 1)

### Health Check

- **GET** `/health`

### Authentication Endpoints

- **POST** `/api/auth/register` (version: 1)
- **POST** `/api/auth/login` (version: 1)
- **POST** `/api/auth/logout` (version: 1)
- **POST** `/api/auth/google-login` (version: 1)
- **PATCH** `/api/auth/change-password` (version: 1)
- **POST** `/api/auth/forgot-password` (version: 1)
- **POST** `/api/auth/set-new-password` (version: 1)
- **POST** `/api/auth/refresh-token` (version: 1)

## Technologies

- [Redis (Upstash)](https://upstash.com)
- [NestJs](https://nestjs.com)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL (Supabase)](https://supabase.com)
- [Render (Hosting)](https://render.com)

## Contributing

- Contributions are welcome! Please follow these guidelines:

  1. **Fork the repository**
  2. **Create a new branch (git checkout -b feature-branch)**.
  3. **Commit your changes (git commit -am 'Add new feature')**.
  4. **Push to the branch (git push origin feature-branch)**.
  5. **Create a new Pull Request**.

## License

This project is licensed under the MIT License.
