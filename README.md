The Investment Calculator is a simple web-based tool that allows users to calculate the future value of an investment based on an initial amount, annual interest rate, and investment duration. The project provides users with an easy-to-use interface to input their investment details and instantly calculate the potential growth of their investment over time.

This project is intended to serve as a foundational web application, which can be extended with advanced features such as personalized user accounts, saving investment records, and handling real-world investments with backend functionality.

Features
Investment Calculation: Allows users to input their initial investment, annual interest rate, and investment duration to calculate the future value of the investment using the compound interest formula.

Responsive Design: The website is designed to be mobile-friendly and can be easily viewed on any device.

Simple User Interface: The interface is easy to use with minimal form fields and a clean design.

Final Amount Display: Users can view the calculated final amount based on their inputs.

Logout Feature: Users can log out and end their session to ensure security and privacy.

Tech Stack
Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express

Database: MongoDB (for storing user investment records, authentication)

Authentication: JWT (JSON Web Tokens) for secure user login and registration

Security: bcryptjs for password hashing and secure user authentication

Prerequisites
To run this project locally, you will need to have the following installed:

Node.js and npm (Node Package Manager)

MongoDB for database storage

Installing Node.js and MongoDB
Node.js: Download and install Node.js.

MongoDB: Download and install MongoDB.

Getting Started
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/investment-calculator.git
cd investment-calculator
2. Install Dependencies
bash
Copy
Edit
npm install
3. Setup MongoDB
Ensure that MongoDB is installed and running locally or use a cloud-based service like MongoDB Atlas.

4. Environment Variables
Create a .env file in the root directory of the project and add the following configuration:

ini
Copy
Edit
DB_URI=mongodb://localhost:27017/investmentWebsite
JWT_SECRET=your_secret_key
Replace your_secret_key with a strong, random string for securing JWT tokens.

5. Start the Application
To start the server, run:

bash
Copy
Edit
npm start
This will start the application on http://localhost:3000.

6. Access the Web Application
Open the index.html file in a browser to access the frontend.

You can also interact with the backend through the API by using tools like Postman.

How It Works
Frontend
Users input the investment amount, interest rate, and duration in years.

The website calculates the potential future value of the investment using the compound interest formula:

𝐴
=
𝑃
×
(
1
+
𝑟
100
)
𝑡
A=P×(1+ 
100
r
​
 ) 
t
 
where:

𝐴
A = the future value of the investment

𝑃
P = the principal (initial investment)

𝑟
r = the annual interest rate (as a percentage)

𝑡
t = the number of years the money is invested for.

Backend
User Authentication: Secure login and registration routes use JWT for authentication. Users' credentials are hashed using bcryptjs before storing in the database.

Investment Calculation API: Allows users to submit their investment details and receive the calculated final amount, which is stored in the database along with other user information.

Contributing
If you'd like to contribute to this project, feel free to submit a pull request or open an issue for improvements, bug fixes, or new feature ideas.

Fork the repository.

Create a new branch.

Make your changes.

Commit your changes and push them to your forked repository.

Open a pull request to the original repository.

License
This project is licensed under the MIT License - see the LICENSE file for details.
