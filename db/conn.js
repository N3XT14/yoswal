const { MongoClient } = require("mongodb");
const Db = process.env.MONGODB_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
  connectToServer: async function (callback) {
    console.log("Reached connectToServer");
    try {
      const db = await client.connect();
      console.log("Inside connectToServer");
      _db = db.db(process.env.DB_NAME);
      console.log("Successfully connected to MongoDB.");
      return callback(null);
    } catch (err) {
      return callback(err);
    }
    console.log("Reached connectToServer End");
  },

  getDb: function () {
    return _db;
  },
};
