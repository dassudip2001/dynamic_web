# Static Website Generator

This project implements a Static Website Generator using Prisma ORM. It includes entities for managing heroes, their services, their works, and contact messages.

## Schema Overview

### Models

#### Hero

The `Hero` model represents a hero with the following attributes:

-   `id` (Int): Unique identifier for the hero, auto-incremented.
-   `name` (String): The name of the hero.
-   `description` (String?): Optional description of the hero.
-   `image_url` (String?): Optional URL for the hero's image.
-   `services` (Service[]): A list of services associated with the hero.
-   `works` (Work[]): A list of works associated with the hero.
-   `createdAt` (DateTime): Timestamp when the hero was created, defaults to the current time.
-   `updatedAt` (DateTime): Timestamp when the hero was last updated, auto-updated.

#### Service

The `Service` model represents a service provided by a hero with the following attributes:

-   `id` (Int): Unique identifier for the service, auto-incremented.
-   `name` (String): The name of the service.
-   `description` (String?): Optional description of the service.
-   `image_url` (String?): Optional URL for the service's image.
-   `hero` (Hero): Relation to the `Hero` who provides this service.
-   `heroId` (Int): Foreign key referencing the `Hero`.
-   `createdAt` (DateTime): Timestamp when the service was created, defaults to the current time.
-   `updatedAt` (DateTime): Timestamp when the service was last updated, auto-updated.

#### Work

The `Work` model represents a piece of work by a hero with the following attributes:

-   `id` (Int): Unique identifier for the work, auto-incremented.
-   `title` (String): The title of the work.
-   `subtitle` (String?): Optional subtitle of the work.
-   `description` (String?): Optional description of the work.
-   `image_url` (String?): Optional URL for the work's image.
-   `hero` (Hero): Relation to the `Hero` who completed this work.
-   `heroId` (Int): Foreign key referencing the `Hero`.
-   `createdAt` (DateTime): Timestamp when the work was created, defaults to the current time.
-   `updatedAt` (DateTime): Timestamp when the work was last updated, auto-updated.

#### Contact

The `Contact` model represents a contact message with the following attributes:

-   `id` (Int): Unique identifier for the contact message, auto-incremented.
-   `name` (String): The name of the person sending the message.
-   `email` (String): The email address of the sender.
-   `phone` (String): The phone number of the sender.
-   `message` (String): The content of the message.
-   `createdAt` (DateTime): Timestamp when the message was created, defaults to the current time.
-   `updatedAt` (DateTime): Timestamp when the message was last updated, auto-updated.

## Features

-   **Hero Management**: Add, update, and manage heroes along with their associated services and works.
-   **Service Management**: Link services to heroes and manage their details.
-   **Work Management**: Link works to heroes and manage their details.
-   **Contact Management**: Store and manage contact messages from users.

## Database Relationships

-   A `Hero` can have multiple `Service` and `Work` entries.
-   Each `Service` and `Work` belongs to a specific `Hero`.

## Getting Started

### Prerequisites

-   Node.js
-   Prisma CLI
-   A relational database (e.g., PostgreSQL, MySQL, SQLite)

### Setup

1. Clone the repository:

    ```bash
    git clone <repository_url>
    cd hero-management-system
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Configure the database in the `prisma/schema.prisma` file.

4. Apply the migrations:

    ```bash
    npx prisma migrate dev --name init
    ```

5. Start the development server:
    ```bash
    npm run dev
    ```

### Prisma Commands

-   Generate Prisma Client:

    ```bash
    npx prisma generate
    ```

-   Apply Migrations:

    ```bash
    npx prisma migrate dev
    ```

-   Access Prisma Studio:
    ```bash
    npx prisma studio
    ```

## API Endpoints

### Hero

-   **GET** `/heroes`: Retrieve all heroes.
-   **POST** `/heroes`: Create a new hero.
-   **PUT** `/heroes/:id`: Update a hero.
-   **DELETE** `/heroes/:id`: Delete a hero.

### Service

-   **GET** `/services`: Retrieve all services.
-   **POST** `/services`: Create a new service.
-   **PUT** `/services/:id`: Update a service.
-   **DELETE** `/services/:id`: Delete a service.

### Work

-   **GET** `/works`: Retrieve all works.
-   **POST** `/works`: Create a new work.
-   **PUT** `/works/:id`: Update a work.
-   **DELETE** `/works/:id`: Delete a work.

### Contact

-   **GET** `/contacts`: Retrieve all contact messages.
-   **POST** `/contacts`: Submit a new contact message.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Contributing

Contributions are welcome! Please follow the [contributing guidelines](CONTRIBUTING.md) when submitting a pull request.
