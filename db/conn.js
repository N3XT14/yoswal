const { MongoClient } = require("mongodb");
const Db = process.env.MONGODB_URI;
const client = new MongoClient(Db, {
  // auth: {
  //   username: process.env.AWS_ACCESS_KEY_ID,
  //   password: process.env.AWS_SECRET_ACCESS_KEY
  // },
  //   authSource: '$external',
  //   authMechanism: 'MONGODB-AWS'
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (db) {
        _db = db.db(process.env.DB_NAME);
        console.log("Successfully connected to MongoDB.");
      }
      return callback(err);
    });
  },

  getDb: function () {
    return _db;
  },
};
