# node_api
Simple node api, CRUDE functionality

Setup:
  -install nodejs (https://nodejs.org/en/) and mongoDB (https://www.mongodb.com/)
  -open command line, change directory to node_api-master and run command 'npm install'
  -run command 'node server' to start the server
  -you can now interract with the api (localhost:3000/products), the prefered method is via Postman (https://www.getpostman.com/)
  
The API supports the following Routes:
  -[get] /products
  -[get] /products/:productId
  -[post] /products
  -[put] /products/:productId
  -[delete] /products/:productId
  
An example post request (JSON):
{"name": "computer 1", "price": 10, "available": true, "dateCreated": ""}

Thank you for reading, Gašper.
