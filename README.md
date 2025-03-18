# My W01-Project API

This is a simple REST API for managing contacts, built with Node.js, Express, and MongoDB for course work in BYU CSE341 Web Services.

## Prerequisites

* Node.js (>= 14)
* npm or yarn
* MongoDB

## Installation

1. Clone the repository: `git clone <repository_url>`
2. Change into the project directory: `cd <project_directory>`
3. Install dependencies: `npm install` (or `yarn install`)
4. Configure environment variables:
	* Create a `.env` file in the root directory.
	* Add the following environment variable: `MONGODB_URI=mongodb://localhost:27017/myproject1`
	* Replace `mongodb://localhost:27017/myproject1` with your MongoDB connection string.
5. Start the server: `node server.js`

The server will run on http://localhost:3000.

## API Endpoints

### GET /api/contacts

Get all contacts.

### GET /api/contacts/:contactId

Get a contact by ID.

### POST /api/contacts

Create a new contact.

### PATCH /api/contacts/:contactId

Update a contact by ID.

### DELETE /api/contacts/:contactId

Delete a contact by ID.

## Swagger Documentation

The API documentation is available at http://localhost:3000/api-docs.

## Using the API with .rest files

A `routes.rest` file is provided for quick testing with VS Code's REST Client extension. Open `contacts.rest` in VS Code and send requests by clicking "Send Request" above each request block.

Example content of `contacts.rest`:

