
var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, conn) {
    if (err) return console.error(err);

    const db  = conn.db('learnyoumongo');
    const data = db.collection('parrots');

    data.find().toArray(function(err, documents) {
      var result = documents.filter(doc => {
        return doc.age > parseInt(process.argv[2]);
      });

      console.log(result);
    })

    conn.close();
});
