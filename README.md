# EvenNumberSum

Backend: A minimal API (POST /api/even-sum) that accepts a list of numbers and returns the sum of even numbers.
Frontend: A form to input comma-separated numbers, send them to the backend, and display the result.

Setup Instructions
## 1. Clone the Repository
  Clone the project from your remote repository

  git clone https://github.com/your-username/EvenNumber.git
  cd EvenNumber

Replace https://github.com/your-username/EvenNumber.git with your repository URL.
## 2. Install Dependencies
Backend (API)
Navigate to the backend folder and restore .NET dependencies:

` cd API `
` dotnet restore `
` cd .. `

Frontend (client)
Navigate to the frontend folder and install Node.js dependencies:

`cd client`
`npm install`
`cd ..`

Root
Install concurrently for running both apps:
`npm install`

## 3. Run the Application
From the root EvenNumber folder, start both the frontend and backend with a single command:
npm start

Starts the Angular frontend on http://localhost:4200.
Starts the .NET Core backend on https://localhost:5000.

## 4. Access the Application

Frontend: Open http://localhost:4200 in a browser.
Enter comma-separated numbers (e.g., 1,2,3,4) and click "Calculate" to see the sum of even numbers (e.g., 6).


Backend: Test the API at https://localhost:5000/swagger.


Notes

The backend is a microservice with a single endpoint, designed for scalability.

