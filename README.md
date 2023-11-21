# cs361Proj

Microservice for Handling Form Submissions
This Node.js microservice is designed to handle form submissions, parsing form data and saving the content of a text area to a file. Follow the steps below to set up and run the microservice.

Prerequisites
Before you begin, ensure that you have Node.js installed on your machine. If not, you can download it from here.

Installation
    
    Open a terminal or command prompt.

Navigate to the directory where you have the microservice code.

Install the formidable package using npm:

    npm install formidable
    
This will install the necessary dependencies for parsing form data.

Running the Microservice
After installing the dependencies, start the microservice by typing the following command in the terminal:
    
    node server.js
    
You should see a message indicating that the server is running on http://localhost:3000.
Your microservice is now waiting for POST requests. This typically happens when a form on your web application is submitted. Make sure your web application sends POST requests specifically to the file where this microservice code is located.

Code Explanation:
    - The microservice uses the formidable package to parse form data.
    - When a POST request is received, the microservice extracts the value of the textAreaData field from the form data.
    - The extracted text content is then written to a file named output.txt in the same directory as the microservice.
    - A response is sent back to the client, indicating that the data has been received and processed.
    - If the request is not a POST request, a "Method Not Allowed" response is sent.

Configuration
    The microservice is configured to run on http://localhost:3000. You can change the port by modifying the const port = 3000; line in the server.js file.

Notes
    - Ensure that your web application sends POST requests to the correct endpoint where this microservice is running.
    - This microservice is a basic example and may need adjustments based on the specific requirements of your project.
    - The microservice will save the text content to a file named output.txt. You can modify the file name or path in the code as needed.
