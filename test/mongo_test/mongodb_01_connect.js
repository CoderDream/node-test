// https://www.npmjs.com/package/mongodb
// Connect to MongoDB
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

let options = {
    useNewUrlParser: true,
    auto_reconnect: true,
    poolSize: 10
};

// Use connect method to connect to the server
MongoClient.connect(url, options, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    client.db(dbName);

    client.close();
});
