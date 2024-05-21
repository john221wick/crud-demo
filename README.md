# CRUD Application 

This project demonstrates a basic CRUD (Create, Read, Update, Delete) application using Svelte for the front-end, Supabase for the back-end database, and Express as the server framework.

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)


## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v14 or later)
- pnpm (package manager)
- Supabase account and project



## Installation

1. **Clone the repo**

   ```sh
   git clone https://github.com/john221wick/crud-demo.git
   cd crud-demo
   ```

2. **Install dependencies**

   ```sh
   pnpm install
   ```

## Running the Application

### Starting the Express Server

1. Navigate to the `server` directory (if it's in a separate directory).

   ```sh
   cd server
   ```

2. Install server dependencies.

   ```sh
   pnpm install
   ```

3. Start the server.

   ```sh
   pnpm start
   ```

### Starting the Svelte Application

1. Navigate back to the root directory of your project.

   ```sh
   cd ..
   ```

2. Start the Svelte development server.

   ```sh
   pnpm run dev
   ```

3. Open your browser and navigate to `http://localhost:5000`.

## Usage

1. **Create** - Fill out the form and click the "Create" button to add a new person.
2. **Read** - Click the "Read" button to fetch and display details of a person using their ID.
3. **Update** - Modify the details in the form and click the "Update" button to update the person's information.
4. **Delete** - Enter the ID and click the "Delete" button to remove a person from the database.

## API Endpoints

The following endpoints are available:

- `POST /create` - Create a new person
- `GET /read/:id` - Get a person by ID
- `PUT /update` - Update a person's details
- `DELETE /delete` - Delete a person by ID
