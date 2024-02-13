const { MongoClient } = require("mongodb");

// MongoDB connection URI
const uri = process.env.ATLAS_URI;

// Create a new MongoClient instance
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Initialize the database connection
let _db;

module.exports = {
  connectToServer: function (callback) {
    // Use the connect method to connect to the server
    client.connect(function (err, db) {
      if (err) {
        console.error("Error connecting to MongoDB:", err);
        return callback(err);
      }
      _db = db.db("employees");
      console.log("Successfully connected to MongoDB.");
      return callback(null);
    });
  },

  getDb: function () {
    // Return the database object
    return _db;
  },
};
