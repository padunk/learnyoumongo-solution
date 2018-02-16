var mongo = require('mongodb').MongoClient;

//var database = String(process.argv[2]);

var url = 'mongodb://localhost:27017/learnyoumongo'
var age = Number(process.argv[2]);

mongo.connect(url, function (err, db) {
	if (err) return console.error(err);

	var collection = db.db('learnyoumongo').collection('parrots');

	collection.count({
		age: {
			$gt: age
		}
	}, function(err, count) {
		if (err) throw err;

		console.log(count);
	})

	db.close();
})