# Week 10/11 — CloudFormation (CFN)

## Required Homework
This week consisted of coverting the ClickOps infrastructure to CloudFormation and SAM templates.

### Implement Cloudformation and TOML installation 
We started off this week by installing CFN and CFN-Toml packages to gitpod and implementing it to our AWS accounts. Here you can see the install process.

![screenshot of CFN/TOML Install](assets/Install-CFN-and-TOML.png)

### Implement CFN Networking Layer
Here I create a Networking Template yaml file and a config toml file, for the purpose of implementing and identifying the Networking Stack in Cloudformation. I also create a networking Bash script to deploy the stack to AWS Cloudformation.

![screenshot of CFN networking template file](assets/CFN-networking-template-yml.png)

Here is the config.toml file.

![image](https://github.com/tembo84/aws-bootcamp-cruddur-2023/assets/125076485/086d16b7-37e5-4112-9f58-b25a3b7f02af)

And here is the Networking bash script used to deploy the stack.

![image](https://github.com/tembo84/aws-bootcamp-cruddur-2023/assets/125076485/ba4a6424-5bb3-4db4-af17-b9728602268c)


### Implement CFN Cluster Layer
Here I create a Cluster Template yaml file and a config toml file, for the purpose of implementing and identifying the Cluster Stack in Cloudformation. I also create a cluster Bash script to deploy the stack to AWS Cloudformation.

![image](https://github.com/tembo84/aws-bootcamp-cruddur-2023/assets/125076485/700cbf01-566d-451c-bdf6-833db3008df5)

Here is the config.toml file.

![image](https://github.com/tembo84/aws-bootcamp-cruddur-2023/assets/125076485/fc1c417c-f1cf-4abd-ad98-0b371728b660)

And here is the Cluster bash script used to deploy the stack.

![image](https://github.com/tembo84/aws-bootcamp-cruddur-2023/assets/125076485/4a0fe7ce-2326-43f7-8829-6ae6ee36e44e)


### Implement CFN Service Layer for Backend
Here I create a Backend Service Template yaml file and a config toml file, for the purpose of implementing and identifying the Backend Service Stack in Cloudformation. I also create a Backend Service Bash script to deploy the stack to AWS Cloudformation.

![image](https://github.com/tembo84/aws-bootcamp-cruddur-2023/assets/125076485/c531d19d-7680-454c-b68c-659f8ec29b1e)

Here is the config.toml file.

![image](https://github.com/tembo84/aws-bootcamp-cruddur-2023/assets/125076485/262793aa-6477-4b61-b35c-c4345662dc08)

And here is the backend service bash script used to deploy the stack.

![image](https://github.com/tembo84/aws-bootcamp-cruddur-2023/assets/125076485/e1362903-1758-4462-bee5-0fea28709752)


### Implement CFN Database (RDS) Layer
Here I create a Database Template yaml file and a config toml file, for the purpose of implementing and identifying the Database Stack in Cloudformation. I also create a Database Bash script to deploy the stack to AWS Cloudformation.

![image](https://github.com/tembo84/aws-bootcamp-cruddur-2023/assets/125076485/5b9beb8d-f31e-4011-8408-b76495be7866)

Here is the config.toml file.

![image](https://github.com/tembo84/aws-bootcamp-cruddur-2023/assets/125076485/ddf7fd40-d7b7-4f00-9690-cacbb9a73d49)

And here is the Database bash script used to deploy the stack.

![image](https://github.com/tembo84/aws-bootcamp-cruddur-2023/assets/125076485/0bbc6e5a-d5f2-4a48-a1de-1cdc9488b1bd)


### Implement Continuous Integration and Continuous Deployment (CICD) Layer
Here I create a CICD Template yaml file and also a nested codebuild yaml file (that will deploy a nested stack on cloudformation) and a config toml file, for the purpose of implementing and identifying the CICD Stack in Cloudformation. I also create a CICD Bash script to deploy the stack to AWS Cloudformation.

![image](https://github.com/tembo84/aws-bootcamp-cruddur-2023/assets/125076485/de3e4ae4-77bb-4b34-9cc2-399d7528a21a)

Here is the config.toml file.

![image](https://github.com/tembo84/aws-bootcamp-cruddur-2023/assets/125076485/549c6cec-a4da-43df-9d77-f466e1d28dc9)

And here is the CICD bash script used to deploy the stack.

![image](https://github.com/tembo84/aws-bootcamp-cruddur-2023/assets/125076485/c44f64ce-08ec-49f6-b700-6a9900b37c24)


### Implement DynamoDB us Serverless Application Model (SAM)
First I install the SAM packages to gitpod and implementing it to our AWS accounts. Here you can see the install process. 

![image](https://github.com/tembo84/aws-bootcamp-cruddur-2023/assets/125076485/47dca641-f2ad-4bbe-aa77-37707db9283d)

Then I create a SAM DynamoDB Template yaml file for the purpose of implementing and identifying the DynamoDB Stack in Cloudformation. 

![image](https://github.com/tembo84/aws-bootcamp-cruddur-2023/assets/125076485/c25f4b2e-e3e1-401b-89a6-8f62ae71af63)

Here is the config.toml file.

![image](https://github.com/tembo84/aws-bootcamp-cruddur-2023/assets/125076485/a95f3be2-386e-40e8-b312-3bf070def172)

And here are the SAM DynamoDB bash scripts used to deploy the stack. They consist of a Build Bash script, and Package bash script and a Deploy bash script as you can see from the screenshots below.

![image](https://github.com/tembo84/aws-bootcamp-cruddur-2023/assets/125076485/2dc4ef40-254f-4422-aa1b-2c0414736bf6)

![image](https://github.com/tembo84/aws-bootcamp-cruddur-2023/assets/125076485/c2a3e19a-b453-4c46-b430-7d88c224f832)

![image](https://github.com/tembo84/aws-bootcamp-cruddur-2023/assets/125076485/d3a80ec2-a04f-49f5-ac7c-05bca4ffc473)


### Implement CFN Static Website Hosting for Frontend
Lastly I create a Frontend Template yaml file and a config toml file, for the purpose of implementing and identifying the Frontend Stack in Cloudformation. I also create a Frontend Bash script to deploy the stack to AWS Cloudformation.

![image](https://github.com/tembo84/aws-bootcamp-cruddur-2023/assets/125076485/36da31d3-12ab-4694-a50f-870dac4996b9)

Here is the config.toml file.

![image](https://github.com/tembo84/aws-bootcamp-cruddur-2023/assets/125076485/8fac45e3-b009-4b95-9bb6-27558e1c927f)

And here is the frontend bash script used to deploy the stack.

![image](https://github.com/tembo84/aws-bootcamp-cruddur-2023/assets/125076485/2b1213d8-879d-413b-a0e9-9e4157d80c59)

### All Cloudformation Stacks SUCCESSFULLY Deployed
Here is a screenshot showing that all the Cloudformation Stacks that were implemented above in gitpod were successfully deployed in Cloudformation.

![image](https://github.com/tembo84/aws-bootcamp-cruddur-2023/assets/125076485/66cafa5b-c7a6-4b64-b96d-cf3052663be4)

![](assets/Cruddur-Diagram.drawio.xml)

