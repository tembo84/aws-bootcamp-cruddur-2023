# Week 4 — Postgres and RDS

## Required Homework
This week I focused on Databases, where I implemented databases through AWS using Postgres on AWS RDS. I was also able to create a user on my Cruddur App via AWS Cognito through the AWS RDS database.

### Create a Postgres Instance
In this image I a Postgres Instance in my AWS RDS.
![Screenshot of Postgres Instance](assets/postgres%20instance.png)


### Bash Script of DB actions
This is a screenshot of the one of the bash script files I created to execute the PostgreSQL commands.
![Screenshot of bash script](assets/bash-script-db-actions.png)


### Connect Gitpod Postgres to AWS RDS
I established a connect of the Gitpod Postgres IP address to my AWS RDS instance.
![Screenshot of Gitpod Postgres to RDS connection](assets/Connect-Gitpod-Postgress-IP-to-AWS-RDS.png)


### Save Postgres Commands to Gitpod.yml file
In order for the Postgres commands to install whenever I start a new Gitpod workspace, I installed the commands into my gitpod yaml file.
![Screenshot of Postgres commands in gitpod.yml](assets/Install-Postgres-to-backend-via-gitpod-yml.png)


### AWS Lambda Function
I connected an AWS Lambda function to my RDS instance so that I could configure my Cruddur code to AWS.
![Screenshot of AWS Lambda Function](assets/Create-Lambda-Function.png)


### Create Congnito Trigger for Lambda Function
I created a trigger with AWS Cognito for the Lambda Function, so the Crudder App can create users and also log data using AWS cloudwatch.
![Screenshot of Cognito Trigger for Lambda Function](assets/Create-Cognito-Trigger-for-Lambda-Function.png)





Here is the user being created on Cognito from signing up through the Crudder app and verifying the confirmation email.
![Screenshot of Cognito user created](assets/user-created-in-cognito.png)



Here is an image of the VPC security group connecting Gitpod, Lambda/RDS and Cognito
![Screenshot of VPC](assets/vpc%20created.png)

### Cloudwatch Log data from Lambda Function
and here is the cloudwatch log data generated from the lambda fucntion after creating the cognito user.
![Screenshot of log data from lambda](assets/logs%20from%20error.png)
