/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('mongodbVSCodePlaygroundDB');

// Insert a few documents into the sales collection.
db.getCollection('sales').insertMany([
  { 'item': 'abc', 'price': 10, 'quantity': 2, 'date': new Date('2014-03-01T08:00:00Z') },
  { 'item': 'jkl', 'price': 20, 'quantity': 1, 'date': new Date('2014-03-01T09:00:00Z') },
  { 'item': 'xyz', 'price': 5, 'quantity': 10, 'date': new Date('2014-03-15T09:00:00Z') },
  { 'item': 'xyz', 'price': 5, 'quantity': 20, 'date': new Date('2014-04-04T11:21:39.736Z') },
  { 'item': 'abc', 'price': 10, 'quantity': 10, 'date': new Date('2014-04-04T21:23:13.331Z') },
  { 'item': 'def', 'price': 7.5, 'quantity': 5, 'date': new Date('2015-06-04T05:08:13Z') },
  { 'item': 'def', 'price': 7.5, 'quantity': 10, 'date': new Date('2015-09-10T08:43:00Z') },
  { 'item': 'abc', 'price': 10, 'quantity': 5, 'date': new Date('2016-02-06T20:20:13Z') },
]);

// Run a find command to view items sold on April 4th, 2014.
const salesOnApril4th = db.getCollection('sales').find({
  date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-05') }
}).count();

// Print a message to the output window.
console.log(`${salesOnApril4th} sales occurred in 2014.`);

// Here we run an aggregation and open a cursor to the results.
// Use '.toArray()' to exhaust the cursor to return the whole result set.
// You can use '.hasNext()/.next()' to iterate through the cursor page by page.
db.getCollection('sales').aggregate([
  // Find all of the sales that occurred in 2014.
  { $match: { date: { $gte: new Date('2014-01-01'), $lt: new Date('2015-01-01') } } },
  // Group the total sales for each product.
  { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: [ '$price', '$quantity' ] } } } }
]);
const { devNull } = require("os");


// The current database to use.
use('comments');

// Create a new document in the collection.
// db.getCollection('user').insertMany(
//     [
//         {
//             "Name":"Hossain",
//             "Father Name" : "Khorshed alom",
//             "Mother Name" : "Rowshan akters",
//             "sallary" : "40000"
//         },
//         {
//             "Name" : "ics",
//             "Father Name" : "Anower Ullah",
//             "Mother name" : "Rowhsan akter",
//             "sallary" : "25000"
//         },
//         {
//             "Name" : "adnan",
//             "Phone": "0546544551",
//             "sallary" : "27000"
//         },
//         {
//             "Name" : "farin",
//             "age" : "65",
//             "sallary" : "26000"
//         },
//         {
//             "Name" : "Kashem",
//             "Phone" : "46464",
//             "city" : "lakshmipur",
//             "sallary" : "10000"
//         }
//     ]
// );

//...insert database username and password;
// db.user.insertOne(
//     {
//         "user" : "shakil12",
//         "password" : "centerfr1234"
//     }
// )

// //...find username: 
// db.user.findOne(
//     {"password" : "centerfr1234"}
// );


// //...find query;
// db.user.findOne(
//     {"Name" : "Shakil Hossain"}
// )


// /.../projection concept:
// db.user.find(
//     {},
//     {_id:0, name:0}
// )

//...query operator:
// db.user.find(
//    {
//     sallary : {$gt : "30000"}
//    }
// )


//....element query operator $exists:
// db.user.find(
//     {
//         Name: {$type :2}
//     }
// )

// //.... insertMany data;
// db.user.insertMany(
//     [
//         {
//             "Product" : "Clothes",
//             "budget" :"500",
//             "spent" : "450"
//         },
//         {
//             "Product" : "Lunggi",
//             "budget" : "600",
//             "spent" : "700"
//         },
//         {
//             "Product" : "T shirt",
//             "budget"  : "300",
//             "spent" : "350"
//         },
//         {
//             "Product" : "Table",
//             "budget" : "2000",
//             "spent" : "1600"
//         }
//     ]
// )

//Evaluation Query Operator:
// db.user.find(
//     {
//         $expr : 
//         {
//             $gt : ["$budget", "$spent"]
//         }
//     }
// )
// db.user.find(
//     {
//         $expr:
//         {
//             $lt : ["$budget", "$spent"];
//         }
//     }
// )
//$regex
// db.user.find(
//     {
//         Name : {$regex : "kh"}
//     }
// )

//$where operator;
// db.user.find(
//     {
//         $where :  "this.budget < this.spent"
//     }
// )

//regex opeartor
// db.user.find(
//     {
//         name: {$regex: "Ra"}
//     }
// )

//where operator

// db.user.find(
//     {
//         $where: "this.budget < this.spent"
//     }
// )



