# Use a base image with OpenJDK 17
FROM openjdk:17-jre-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the JAR file into the container
COPY target/Library.jar app.jar

# Expose the port that your Spring Boot application uses
EXPOSE 8080

# Run the JAR file
ENTRYPOINT ["java", "-jar", "Library.jar"]
