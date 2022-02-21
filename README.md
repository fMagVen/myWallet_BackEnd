# My Wallet :money_mouth_face: (Back End)
## Your wallet, in your pockets!
### :computer: Tech used
<p>
	<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/>
	<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
	<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"/>
	<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
	
</p>


## Overview
This is the API with which the [My Wallet App](https://github.com/fMagVen/MyWallet_FrontEnd) interacts.

## :hammer_and_wrench:Installation
### Make sure you have the following tools installed before you begin:
<p>
	<a href="https://git-scm.com/"><img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"/></a>
	<a href="https://nodejs.org"><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/></a>
	<a href="https://www.mongodb.com/"><img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/></a>
</p>
<p>Not needed but recommended: <a href="https://code.visualstudio.com/">VSCode</a></p>

#### This API was designed to work with  [My Wallet App](https://github.com/fMagVen/MyWallet_FrontEnd) 

Use a terminal interface such as bash or zsh, and enter the following:
```bash
#download
gh repo clone fMagVen/myWallet_BackEnd

#access the folder you downloaded it to
cd myWallet_BackEnd

#install dependencies
npm i
```
The app will run locally and you must configure a .env file with a port of your choosing. The default one is 3000.
## :gear:Running
```bash
#you can run the server with
node index.js
```
In another terminal instance, run the db
```bash
#you can start the db with
mongod --dbpath ~/.mongo
```

## :scroll:Documentation
### All requests are HTTP based
#### Login, Signup, Auth
To signup, send a post request to /auth/signup with a JSON with the following keys and values:
name: your name
email: your email
password: enter a password
confirmPassword: repeat the password from the previous key

To login, send a post request to /auth/login with a JSON with the following keys and values:
email: the email you registered with
password: your account's password

The API will return a token which will be used to authenticate every screen swap and transaction, to use it, please send a header with the following:
```bash
{ Authorization: Bearer <token> }
```
Where <token> is the token sent by the server

#### Transactions

To see transactions, use the header described above and send a get request to /transactions/all

##### new

To add a new transaction, send a post request to /transactions/new with the header above and a body with the following keys and values:

value: The value of your transacion. Integer numbers only. Please use only cents, their value are automatically corrected by factor 100. E.g.: if you want to add $5.00, enter 500
description: A description of what kind of transaction it is
expense: true if it is an expense, false if it is an income

##### delete

To delete an existing transaction, send a post request to /transactions/del, use the same keys and values above, with the header, and add this key with value, before all others:
id: the id of your transaction, returned by the get /transactions/all request

and this key and value, after all others:

UserId: your id in the db, returned by the post auth/login request

##### modify

To modify an existing transaction, send a post request to /transactions/mod, same keys and values of the deletion request.

### :man_technologist: Author
  
  <p>Made with care by</p>
<a href="https://github.com/fMagVen"><img  style="border-radius: 50%;"  src="https://avatars.githubusercontent.com/u/78576546?v=4"  width="100px;"  alt="Felipe Ventura"/></a>

[![Gmail Badge](https://img.shields.io/badge/-fmagven93@gmail.com-c14438?style=flat&logo=Gmail&logoColor=white&link=mailto:fmagven93@gmail.com)](mailto:fmagven93@gmail.com)

[![Linkedin Badge](https://img.shields.io/badge/-Felipe-Ventura?style=flat&logo=Linkedin&logoColor=white&color=blue&link=https://www.linkedin.com/in/fmagven/)](https://www.linkedin.com/in/fmagven/)
  
  <p>Contact me anytime!</p>
