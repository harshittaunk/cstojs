const mongodb = require("mongodb").MongoClient;
const csvtojson = require("csvtojson");
csvtojson()
    .fromFile("plot.csv")
    .then(csvData =>
    {
    console.log(csvData);
  
(async function() {
  let client;

  try {
    client = await mongodb.connect("mongodb://localhost:27017/", { 
      useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Database connected");

    const db = client.db("mydb");
    res = await db.collection('category').insertMany(csvData);
  
  console.log(`Inserted: ${res.insertedCount} rows`);
       
  } catch (err) {
    console.log(err.stack);
  }
  client.close();
})();
});
