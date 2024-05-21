1. extract frontend and backend folder
2. open backend in eclips
3. go com.library
	/open file LibraryApplication 
	/click and "Run as" after
 	"Java Application"
3. open frontend in vs code
4. open terminal
	 and "npm install --force" 
	and after "npm start"



4) Steps to Build and Run Docker Containers:

First ensure that you have installed docker and docker compose in your machine.

Directory Structure in your machine
Ensure your project directory structure looks something like this:

/project-root
|-- /backend
|   |-- Dockerfile
|   |-- target
|       |-- your-app.jar
|-- /frontend
|   |-- Dockerfile
|   |-- package.json
|   |-- package-lock.json
|   |-- public
|   |-- src
|   |-- server.js
|-- docker-compose.yml


1) Navigate to your project root directory:
cd /path/to/project-root

2) Build and start the Docker containers:
docker-compose up --build

3) Verify the Services:

Backend: Open http://localhost:8080 to check if your Spring Boot application is running.
Frontend: Open http://localhost:3000 to check if your React application is running, served by the Express server.
