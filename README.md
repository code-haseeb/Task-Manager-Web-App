# Task Manager Web App

This is a simple Task Manager web application built with HTML, CSS, JavaScript for the frontend and Java with Spring Boot for the backend.

## Frontend

The frontend of the application is built using HTML, CSS, and JavaScript. It provides a user interface to add, edit, and delete tasks. The main files for the frontend are:

- `index.html`: The main HTML file that represents the user interface of the application.
- `styles.css`: The CSS file that styles the application's user interface.
- `script.js`: The JavaScript file that contains the frontend logic for handling tasks.

## Backend

The backend of the application is built using Java with the Spring Boot framework. It provides the RESTful API endpoints to perform CRUD (Create, Read, Update, Delete) operations on tasks. The main files for the backend are:

- `MyTaskManagerAppApplication.java`: The main Spring Boot application class.
- `TaskController.java`: The Spring Boot controller class that handles HTTP requests related to tasks.
- `Task.java`: The Java model class representing the Task entity.
- `TaskRepository.java`: The Spring Data MongoDB repository interface for tasks.

## How to Run

1. Make sure you have MongoDB installed and running on your local machine.
2. Clone this repository to your local machine.
3. Open the project in your favorite IDE (e.g., IntelliJ IDEA, Eclipse).
4. Build and run the `MyTaskManagerAppApplication.java` class to start the backend server.
5. Open the `index.html` file in a web browser to access the frontend.

## Dependencies

- Spring Boot Starter Web: For building web applications with Spring MVC.
- Spring Boot Starter Data MongoDB: For integrating MongoDB with Spring Data.
- MongoDB Java Driver: MongoDB Java driver for interacting with the database.
- Bootstrap: For responsive and mobile-first front-end development.

Feel free to explore and modify the code as needed for your own use or learning purposes.

Happy coding! 🚀
