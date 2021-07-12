// Using router for modules

//Example==> building e-commerce application
/*
  Create E-commerce application 
    -users
    -products
    -items
    -reviews
    -comments
    -images
    -videos
    -returns
    -orders
  CRUD operations
*/

var express = require("express");
var products = require('./routes/products');
var users = require('./routes/users');
var orders = require('./routes/orders');
var items = require('./routes/items');
var app = express();

app.use('/products', products);
app.use('/users', users);
app.use('/orders', orders);
app.use('/items', items);

app.listen(6000);



