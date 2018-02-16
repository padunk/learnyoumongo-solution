var mongo = require('mongodb').MongoClient;

var database = process.argv[2]
var url = 'mongodb://localhost:27017/' + database;

mongo.connect(url, function (err, db) {
	if (err) return console.error(err);

	var collection = db.db(database).collection('users');

	collection.update({
		username: 'tinatime'
	}, {
		$set: {
			age: 40
		}
	})

	db.close();
})