# Week 10/11 — CloudFormation (CFN) Part 1

## Required Homework
This week consisted of coverting the ClickOps infrastructure to CloudFormation and SAM templates.

### Implement Cloudformation and TOML installation 
We started off this week by installing CFN and CFN-Toml packages to gitpod and implementing it to our AWS accounts. Here you can see the install process.

![screenshot of CFN/TOML Install](assets/Install-CFN-and-TOML.png)

### Implement CFN Networking Layer
Here I create and Networking Template yaml file and a config toml file, for the purpose of implementing and identifying the Networking Stack in Cloudformation. I also create a networking Bash script to deploy the stack to AWS Cloudformation.

![screenshot of CFN networking template file](assets/CFN-networking-template-yml.png)

Here is the config.toml file.

![image](https://github.com/tembo84/aws-bootcamp-cruddur-2023/assets/125076485/086d16b7-37e5-4112-9f58-b25a3b7f02af)

And here is the Networking bash script used to deploy the stack.

![image](https://github.com/tembo84/aws-bootcamp-cruddur-2023/assets/125076485/ba4a6424-5bb3-4db4-af17-b9728602268c)



