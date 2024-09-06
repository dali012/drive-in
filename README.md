# Carpooling App API

Welcome to the Carpooling App API project! This API is built using NestJS, Supabse(db + storage), and TypeORM, providing a robust backend solution for managing carpooling services.

## Table of Contents

- [Carpooling App API](#carpooling-app-api)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Application](#running-the-application)
  - [API Endpoints](#api-endpoints)
    - [Health Check and Metrics](#health-check-and-metrics)
    - [Documentation](#documentation)
    - [User Management](#user-management)
    - [Authentication Endpoints](#authentication-endpoints)
    - [File Management](#file-management)
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
   - Create a PostgreSQL database and user. Update your PostgreSQL configuration in the `.env` file. See [Configuration](#configuration) for more details.

## Configuration

- Copy the `.env.example` file to `.env` in the root directory of the project:

  ```bash
  mv .env.example .env
  ```

- Then configure the environment variables in the `.env` file

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

The API is organized into several categories:

### Health Check and Metrics

- **GET** `/health` - Check the health of the service.
- **GET** `/metrics` - Access service metrics.

### Documentation

- **GET** `/docs` - Access the API documentation.

### User Management

- **POST** `/api/users` (version: 1) - Create a new user.
- **GET** `/api/users` (version: 1) - Get all users.
- **GET** `/api/users/:id` (version: 1) - Get user by ID.
- **PATCH** `/api/users/:id` (version: 1) - Update user by ID.
- **DELETE** `/api/users/:id` (version: 1) - Delete user by ID.

### Authentication Endpoints

- **POST** `/api/auth/email/register` (version: 1) - Register a new user via email.
- **POST** `/api/auth/email/login` (version: 1) - Login with email.
- **POST** `/api/auth/email/confirm/new` (version: 1) - Request a new email confirmation.
- **POST** `/api/auth/forgot/password` (version: 1) - Request a password reset.
- **POST** `/api/auth/reset/password` (version: 1) - Reset the password.
- **GET** `/api/auth/me` (version: 1) - Get the authenticated user's details.
- **PATCH** `/api/auth/me` (version: 1) - Update the authenticated user's details.
- **DELETE** `/api/auth/me` (version: 1) - Delete the authenticated user.
- **POST** `/api/auth/refresh` (version: 1) - Refresh authentication tokens.
- **POST** `/api/auth/logout` (version: 1) - Logout the user.
- **POST** `/api/auth/google/login` (version: 1) - Login via Google OAuth.
- **GET** `/api/verification/confirm-email` (version: 1) - Confirm user email address.

### File Management

- **POST** `/api/files/upload` (version: 1) - Upload a file.

## Technologies

- [Redis (Upstash)](https://upstash.com)
- [NestJs](https://nestjs.com)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL (Supabase)](https://supabase.com)
- [Render (Hosting)](https://render.com)

## Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork the repository**
2. **Create a new branch (`git checkout -b feature-branch`)**
3. **Commit your changes (`git commit -am 'Add new feature'`)**
4. **Push to the branch (`git push origin feature-branch`)**
5. **Create a new Pull Request**

## License

This project is licensed under the MIT License.
