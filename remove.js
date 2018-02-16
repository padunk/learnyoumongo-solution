var mongo = require('mongodb').MongoClient;

var database = process.argv[2];
var collection = process.argv[3];
var idName = process.argv[4];

var url = 'mongodb://localhost:27017/' + database;

mongo.connect(url, function (err, db) {
	if (err) return console.error(err);

	var col = db.db(database).collection(collection);

	col.deleteOne({
		_id: idName
	})

	db.close();
})