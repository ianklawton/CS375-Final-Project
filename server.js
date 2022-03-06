//Final Project
//Set up code when the server first starts up
const pg = require("pg");
const bcrypt = require("bcrypt");
const express = require("express");
<<<<<<< HEAD
const cors = require('cors')

const app = express();
const port = 8080;
=======

const app = express();
const port = 3000;
>>>>>>> 3397c8c6b71aa45ecaf4087051328868afcc2134
const hostname = "localhost";

const saltRounds = 10;

const env = require("../env.json");

//base stats
let baseHeath = 100;
let baseDefense = 0;
let baseAttack = 2;
let baseSpeed = 10;
let baseInventory = {"inventory": ""};

//Connect to the database
const Pool = pg.Pool;
const pool = new Pool(env);
pool.connect().then(function () {
    console.log(`Connected to database ${env.database}`);
});

app.use(express.json());
app.use(express.static("public"));
<<<<<<< HEAD
app.use(cors());
//Post funtion to add a user to the database
app.post("/signup", function (req, res) {


    let username = req.body.username;
    let plaintextPassword = req.body.plaintextPassword;


=======

//Post funtion to add a user to the database
app.post("/signUp", function (req, res) {
    let username = req.body.username;
    let plaintextPassword = req.body.plaintextPassword;
	
>>>>>>> 3397c8c6b71aa45ecaf4087051328868afcc2134
	//If statement to check if the Username and Password is in the correct format
	if (!req.body.hasOwnProperty("username") ||
        !req.body.hasOwnProperty("plaintextPassword") ||
		!isNaN(username) ||
		!isNaN(plaintextPassword) ||
		username.length < 1 ||
		username.length > 20 ||
		plaintextPassword.length < 5 ||
		plaintextPassword.length > 36
	){
<<<<<<< HEAD
		res.status(401).json({"error" : "Username or Password is doesn't have the expected format"});
=======
		res.status(401).json({"error": "Username or Password is doesn't have the expected format"});
>>>>>>> 3397c8c6b71aa45ecaf4087051328868afcc2134
	} else{
		//Pulling the usernames from the database
		pool.query("SELECT username FROM users WHERE username = $1", [
			username,
		])
			.then(function (response) {
				//If statement to check if there are usernames in the database
				if (response.rows.length !== 0) {
					let usernameOld = response.rows[0].username;
					//If statement to check if the username already exist
					if (username === usernameOld) {
						res.status(401).json({"error": "Username already exists"});
					}
				} else{
					//Function to incript the users password and save it to the database
					bcrypt
						.hash(plaintextPassword, saltRounds)
						.then(function (hashedPassword) {
							pool.query(
<<<<<<< HEAD
								"INSERT INTO users (username, password) VALUES ($1, $2)",
=======
								"INSERT INTO users (username, hashed_password) VALUES ($1, $2)",
>>>>>>> 3397c8c6b71aa45ecaf4087051328868afcc2134
								[username, hashedPassword]
							)
								.then(function (response) {
									pool.query(
										"INSERT INTO stats (username, heath, attack, defense, speed, inventory) VALUES ($1, $2, $3, $4, $5, $6)",
										[username, baseHeath, baseAttack, baseDefense, baseSpeed, baseInventory]
									)
										.then(function (response) {
											//account and base stats successfully created
<<<<<<< HEAD
											res.status(200).json({"success": "Account Creation Successful, Now Log In To Access Valley.txt"});
=======
											res.status(200).send();
>>>>>>> 3397c8c6b71aa45ecaf4087051328868afcc2134
										})
										.catch(function (error) {
											console.log(error);
											res.status(500).json({"error": "Internal Server Error"}); // server error
										});
								})
								.catch(function (error) {
									console.log(error);
									res.status(500).json({"error": "Internal Server Error"}); // server error
								});
						})
						.catch(function (error) {
							console.log(error);
							res.status(500).json({"error": "Internal Server Error"}); // server error
						});

				}
			});
	}
});

<<<<<<< HEAD
app.post("/signin", function (req, res) {
    let username = req.body.username;
    let plaintextPassword = req.body.plaintextPassword;
	//Pulling the usernames from the database
    pool.query("SELECT password FROM users WHERE username = $1", [
=======
app.post("/signIn", function (req, res) {
    let username = req.body.username;
    let plaintextPassword = req.body.plaintextPassword;
	//Pulling the usernames from the database
    pool.query("SELECT hashed_password FROM users WHERE username = $1", [
>>>>>>> 3397c8c6b71aa45ecaf4087051328868afcc2134
        username,
    ])
        .then(function (response) {
			//Check if the username doesn't exist
            if (response.rows.length === 0) {
                return res.status(401).json({"error": "Username doesn't exist"});
            }
<<<<<<< HEAD
            let hashedPassword = response.rows[0].password;
=======
            let hashedPassword = response.rows[0].hashed_password;
>>>>>>> 3397c8c6b71aa45ecaf4087051328868afcc2134
            //Funtion to check if the Passwords match
			bcrypt
                .compare(plaintextPassword, hashedPassword)
                .then(function (isSame) {
                    if (isSame) {
                        // password matched
<<<<<<< HEAD
                        res.status(200).send({"token": true});
=======
                        res.status(200).send();
>>>>>>> 3397c8c6b71aa45ecaf4087051328868afcc2134
                    } else {
                        // password didn't match
                        res.status(401).json({"error": "Incorrect password"});
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    res.status(500).json({"error": "Internal Server Error"}); // server error
                });
        })
        .catch(function (error) {
            console.log(error);
            res.status(500).json({"error": "Internal Server Error"}); // server error
        });
<<<<<<< HEAD
});

app.listen(8080, () => {
    console.log('Listening on port 8080')
})
=======
});
>>>>>>> 3397c8c6b71aa45ecaf4087051328868afcc2134
