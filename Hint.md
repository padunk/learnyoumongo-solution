## Find Hints Challenge

To get a collection, one can use `db.db('<database name>').collection('<collection name>')`.

## Insert Hints Challenge

To insert a document, one would need to call `insertOne()` on the collection, like this:


    // inserting document
    // { a : 2 }
    collection.insertOne({
      a: 2
    }, function(err, data) {
      // handle error

      // other operations
    })

## Remove Hints Challenge

To remove a document, one would need to call `deleteOne()` on the collection.

Ex.


    collection.deleteOne({
      name: 'foo'
    }, callback)

The first argument to `deleteOne()` is the query.
