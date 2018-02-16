var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';

var size = String(process.argv[2]);

mongo.connect(url, function (err, db) {
	if (err) return console.error(err);

	var col = db.db('learnyoumongo').collection('prices');

	col.aggregate([
		{ $match: { size: size }},
		{ $group: {
			_id: 'price',
			price: {
				$avg: '$price'
			}
		}}
	]).toArray(function(e, r) {
		if (e) return console.error(e);
		var result = r[0].price.toFixed(2);
		console.log(result);
	})

	db.close();
})