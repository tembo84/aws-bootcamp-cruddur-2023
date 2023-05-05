# Week 8 — Serverless Image Processing

## Required Homework
This week we used Serverless Image Processing to uplaod assets to an s3 bucket, that we could send to out application via cloudfront. We can also upload an asset to the bucket directly from our application using a presigned URL. Not only did I have to deal with the regular troubleshooting issues that I tend to cause myself, but Flask and Gitpod decided to pile-on and cause me additional headaches. These issues definitely set me back, but we joined together as a family in the bootcamp to resolve some of the issues (mainly Flask deprecation stuff). Then Andrew came to the rescue and helped us defeat the mighty Gitpod port "detecting" issue that sidelined a percentage of the bootcamp.

### Implement CDK Stack 
We started off this week by installing AWS CDK package to gitpod and implementing it to our AWS accounts. Here you can see the install process and all the packages/files listed on the directories.  

![screenshot of CDK Implementation](assets/implement-CDK-stack.png)

### Create S3 Bucket 
Here I create an S3 Bucket that will store processed images. I can store the image directly from AWS S3, or from Gitpod to S3 or directly from the application to S3.

![Screenshot of S3 Bucket](assets/S3-bucket.png)

### Serve Assets via Cloudfront 
Here I create an Cloudfront Distribution that I will use to serve Assets from the S3 bucket to my application.

![Screenshot of Cloudfront Distribution](assets/Cloudfront.png)

### Lambda for Image Processing w/ S3 Trigger 
Here I show the Javascript file used to process the images/assets that will be stored in the S3 bucket.

![Screenshot of S3 image processing JS](assets/S3-image-processing-javascript.png)


Here is the Image Processing Lambda with the S3 trigger implemented.

![Screenshot of Lamdba with S3 Trigger](assets/image-processing-lambda.png)

### Migration
Here I show the bash script file that we implemented to migrate the backend over to the Cruddur application.

![Screenshot of Backend Migration](assets/Migration.png)

### API Gateway
Here is an image of the API Gateway I implemented to that the Crudder application can access the backend services.

![Screenshot of API Gateway](assets/API-Gateway.png)


Here is a picture showing the Avatars/Key_Upload route of the API Gateway, and showing the it is configured with Authorization (to protect the API against unauthorized requests) and Integration to the backend services.

![Screenshot of API Gateway Route](assets/API-Gateway-Routes.png)


And in the screenshot, a Lambda Authorizer has been implemented with the API Gateway as the trigger.

![Screenshot of API Gateway Lambda](assets/API-Gateway-Lambda.png)

### Presigned URL Generation via Ruby Lambda
Here I implement a Lambda ruby function to generate a presigned URL.

![Screenshot of Lambda for Presigned URL](assets/Presigned-URL-Lambda-Ruby.png)


Here is the Ruby file that generates a presigned URL.

![Screenshot of Ruby File for Presigned URL](assets/Presigned-URL-Ruby-File.png)


### Render Avatars in App via CloudFront
Here is a screenshot of avatar being uploaded to a bucket client-side using a presigned URL. Essentially allowing me to upload the asset directly from the application.

![Screenshot of Image upload from App](assets/Upload-Image-From-App.png)





## TROUBLESHOOTING
