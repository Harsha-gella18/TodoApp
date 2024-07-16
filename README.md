# TodoApp

TodoApp is a simple web application built with Express.js and MongoDB for managing todo items.

## Features

- **View Todos:** See all existing todos sorted by creation date.
- **Add Todo:** Add new todo items with a title and optional description.
- **Update Todo:** Edit existing todos.
- **Delete Todo:** Remove todos from the list.

## Technologies Used

- **Frontend:** HTML, CSS (with Bootstrap for styling), EJS templates.
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose ORM

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up MongoDB:
   - Install MongoDB locally or use a cloud-based service.
   - Update the MongoDB connection URL in `index.js` or `.env` file if used.

4. Start the server:
   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:7000` to see the application.

## Usage

- Navigate to `http://localhost:7000` to view your todos.
- Use the "Add Todo" link to create new todos.
- Click on "Edit" to update existing todos.
- Use the "Delete" button to remove todos.

## Contributing

Contributions are welcome. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

