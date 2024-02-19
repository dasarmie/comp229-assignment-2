# COMP 229 - Assignment 2
Dress Store Application – Node.js, Express REST APIs & MongoDB

## Overview: Create the Node.js Express exports REST APIs that interacts with MongoDB Database using Mongoose ODM for a Dress Store application (Note: The Front-end of the application is not included in this Assignment)

**Instructions :**

The Dress Store application:

1.	Using MongoDB database, create:

    a.	A database by name DressStore. 
    b.	Create the following collections with their respective property.

        I.	**products**
            name: string
            description: string
            price: number
            published: Boolean
            category: string

        II.	**categories**
            name: string

the categories of products to be included are Men, Women, teens.

    c.	Obtain your connection string ( url or uri).
    d.	Provide the screen snapshot of your MongoDB database showing the above steps from 1a – c.

2.	Using Visual studio code as the IDE:

    a.	 create a node.js App for the DressStore by setting up the Express web server. Ensure to install all the necessary modules: express, mongoose, cors e.t.c.
    b.	Run the app and provide a screen snapshot of it running in the browser as follows:

    <image src="/img/image1.png">

3.	After creating the Express web server next:

    a.	Add the configuration for the MongoDB database.
    b.	Create the product model with Mongoose.
    c.	Write the controller.
    d.	Define the routes for handling all CRUD operations.

    Below is an overview of the REST APIs that will be exported:

    <image src="/img/image2.png">

4.	
    a.	Test the REST APIs using Postman, Thunder client or any tool you are familiar.
    b.	Provide the screen snapshot of the test.