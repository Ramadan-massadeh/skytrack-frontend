SkyTrack – Frontend

SkyTrack is a front-end web application built using React.
The project represents the frontend part of a full-stack flight tracking system, developed as part of a course project.

The frontend communicates with a Spring Boot backend API to display and manage real flight and airport data stored in a database.

⸻

Technologies Used
•	React
•	React Router
•	JavaScript (ES6)
•	CSS
•	Fetch API

⸻

Pages Overview

Home
•	Landing page for the application
•	Simple introduction and navigation links

Flights
•	Displays a list of flights fetched from the backend API
•	Shows real data stored in the database
•	Each flight displays:
•	Origin airport
•	Destination airport
•	Airline
•	Flight status

Airports
•	Displays a list of airports fetched from the backend API
•	Airports are stored and retrieved from the database

Admin
•	Admin panel used to add new flights
•	Sends flight data to the backend API using POST requests
•	Newly added flights appear automatically on the Flights page

⸻

Current Functionality
•	Client-side routing using React Router
•	Data fetched from backend using REST API calls
•	Integration with a Spring Boot backend
•	Admin form to create new flights
•	Styled using basic CSS (no UI libraries)

⸻

Backend Integration
•	The frontend is connected to a Spring Boot backend
•	Data is retrieved from a MySQL database
•	The backend runs locally during development
•	API base URL:
http://localhost:8082

How to Run the Project
1.	Install dependencies:
      npm install

2.Start the React app:
npm start

3.	Open in browser:
      http://localhost:3000
Note: The backend server must be running locally for the frontend to display data correctly.


Author

Ramadan Massadeh