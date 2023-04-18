# Week 6/7 — Deploying Containers & Solving CORS with a Load Balancer and Custom Domain

## Required Homework
This week was very challenging! I created ECR repo from AWS and from gitpod using AWS cLI and Bash scripts. I created task definitions and deployed images from AWS and using AWS CLI. I was able to provision and Load Balancers with target groups. I created and managed a new domain using Route53 via hosted zones. Created a SSL certificate via ACM and set SSM parameters via System Manager. I set up health checks for the services, tasks and load balancers. I refactored the directories in gitpod to make files more efficient and I streamlined the docker compose file to clean it up (using Ruby and Bash script to generate environment variables). But the thing that stood out to me most about this week, was the Trouble-shooting!!

### Create ECR Repo and Deploy 
Here I show each ECR action I implemented using bash script (login, build, push, etc). I put them under the bin/backend directory. Notice I also moved the bin directory to become a top directory as opposed to being located under the backend-flask directory. This made more sense because there are actions needed under the bin directory that were not exclusive to the backend-flask. 

![screenshot of ECR actions](assets/bash-script-ecr-actions.png)

Below you see both the Backend-Flask service and the Frontend-react-js service successfully deployed to AWS ECR Fargate.

![screenshot of AWS services deployed](assets/Deploy-Backend-and-Frontend-Services-Fargate.png)

Below is a cluster overview of those services to confirm that each task is Healthy.

![screenshot of services healthy](assets/Fargate-HEALTHY-backend-frontend.png)
