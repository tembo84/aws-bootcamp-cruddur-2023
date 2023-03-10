# Week 3 — Decentralized Authentication

## Required Homework
This week I focused on Authentication, where I implemented a sign-in page, a sign-up page and a recovery page in case someone forgets their sign-in credentials.

### Instrument Custom Sign-In Page
In this image I showed what the sign-in page looks after inputting incorrect sign-in credentails
![Screenshot of Sign-In Page](assets/sign-in-incorrect-username-password.png)


### Create a user pool and user in AWS Cognito
In this screenshot I use AWS Cognito to create a user pool in order to verify that the sign-in page works correctly.
![Screenshot of Cognito User Pool](assets/Cognito-user-pool.png)

Here is a screenshot showing successful sign-in after implementing the AWS Cognito User Pool information (notice the unique user information in the bottom left corner of the application)
![SCreenshot of successful sign-in](assets/Successful-sign-in.png)


### Implement Custom Sign-Up Page
Here is what the sign-up page will look like.
![Screenshot of Sign-Up Page](assets/Sign-up-page.png)

Here is a screenshot of the Comfirmation Page requesting confimation after signing up. 
![Screenshot of Confirmation Page](assets/Confirmation-page.png)


### Instrument Password Recovery
In this screenshot, I show the password recovery page. A user can create a new password if he/she cannot remember their credentials.
![Screenshot of Password Recovery Page](assets/Recover-password-page.png)


and here is what it will look like when the password is successfully reset.
![Screenshot of Successful Reset](assets/Password-reset-successful.png)
