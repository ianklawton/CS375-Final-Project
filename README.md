# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Step One - Create package.json

Go to the Project directory in the Terminal and install all Modules needed to run the site. 
Here are all of the commands that should be executed:
### `npm install express`
### `npm install pg`
### `npm install cors`
### `npm install bcrypt`
### `npm install react-bootstrap bootstrap@5.1.3`
### `npm install --save styled-components`
### `npm install use-sound`
### `npm install react`
### `npm install react-router-dom`
### `npm install react-dom`

## Step Two - Create Database

Open the Terminal and run setUpDatabase.sql using this command:
### psql -u "username" -f .\setUpDatabase.sql
(Fill in username with your PostgresSQL username)

Create an env.json file that the sever can access on the outside of the main directory (for security reasons)
  
It should look something like this: 

{
	"user": "YOUR USERNAME",
	"host": "localhost",
	"database": "valleytxt",
	"password": "YOUR PASSWORD",
	"port": 5432
}
  
## Step Three - Start React App
In the project directory, run:

### `npm start`

This will run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. (Usually this will occur after running npm start)

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Step Four - Start Server.js

Open another instance of your Terminal and go to the Project directory

To start the server, run the command:

### `node server.js`


## At any point you need to stop the react app or server, hit either CTRL+C or COMMAND+C in the directory where they are running to close them. You can also just close your terminal window
