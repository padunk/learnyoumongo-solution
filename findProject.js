
var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';
var minAge = process.argv[2];

mongo.connect(url, function(err, conn) {
	if (err) return console.error(err);

	var data = conn.db('learnyoumongo');
	var collection = data.collection('parrots');

	collection.find().toArray(function(eror, docs) {
		var result = [];

		if(eror) return console.error(eror);

		for(d of docs) {
			if (d.age > minAge) {
				result.push({name : d.name, age : d.age}) 
			}
		}

		console.log(result);
	})

	conn.close();
})

