var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';

var firstName = process.argv[2];
var lastName = process.argv[3];

mongo.connect(url, function(err, db) {
	if (err) return console.error(err);

	var col = db.db('learnyoumongo').collection('docs');

	var newData = {
		firstName,
		lastName
	}

	col.insertOne(newData, function (e, r) {
		console.log(JSON.stringify(newData));
	});

	db.close();
});