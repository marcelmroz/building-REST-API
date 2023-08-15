# building-REST-API
REST API made using Node.js, Express, TypeScript and MongoDB Atlas
## Features
- register user
- login
- display users if you're logged in
- delete user if you are the owner
- update your username

examples:
Register a user:
![Alt text](./github_images/postman_register.png)
New user in DB:
![Alt text](./github_images/registered_user_DBview.png)
User logged in:
![Alt text](./github_images/postman_login.png)
User tries to log in - incorrect password = no authentication
![Alt text](./github_images/postman_login_forbidden.png)
User get sessionToken:
![Alt text](./github_images/postman_login_success_cookies.png)
User displays all users using sessionToken:
![Alt text](./github_images/postman_getUsers-tokensession.png)
