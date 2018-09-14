// https://www.npmjs.com/package/mongodb
// Find Documents with a Query Filter
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

const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Insert some documents
    collection.insertMany([
        {a : 1}, {a : 2}, {a : 3}
    ], function(err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
};

const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Find some documents
    collection.find({'a': 3}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs);
        callback(docs);
    });
};

// Use connect method to connect to the server
MongoClient.connect(url, options, function (err, client) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    const db = client.db(dbName);

    insertDocuments(db, function() {
        // Only the documents which match 'a' : 3 should be returned.
        findDocuments(db, function() {
            client.close();
        });
    });
});
