
//IMPORTS
const express = require ('express');
const cors = require ( 'cors');
const {MongoClient} = require('mongodb')
const app = express();

//middleware

app.use(express.json())
app.use(cors());
app.use(express.urlencoded({ extended: true}))

//DATABASE

const url = 'mongodb://root:root@localhost:27017';
const dbName ="my_propertyDB"
const client = new MongoClient(url)

const quickSort=(list) =>{
    if (list.length<2)
    return list;
    let pivot = list[0];
    let left = [];
    let right =[];
  
    for (let i=1, total = list.length; i < total; i++){
      if (list[i].price < pivot.price)
             left.push(list[i]);
      else right.push(list[i])
    } 
    return [...quickSort(left),pivot,...quickSort(right)];
  }
  
  async function main(quickSort){
    
    await client.connect();
    console.log("Connected successfully to MONGO");
    const db = client.db(dbName);
    const collection = db.collection('propertyListCollection');
    const findResult = await collection.find().toArray();  
    console.log("FOund documnet ==>",quickSort(findResult)); 
    sorted_result= quickSort(findResult)     
  
    app.get('/', (req, res) => {   

      const {q} = req.query;
      console.log(q)
      const keys =["listing_id", "price", "deal",'address','url']
      const search = (data)=>{
        return data.filter((item)=>
        keys.some((key)=> item[key].toLowerCase().includes(q))
       );
      };

      res.json(search(sorted_result).splice(0,6));
    });   
     return "done";
  }

 
app.listen(3001,function() {
    console.log('Server is runing on post 3001');
})
main(quickSort)
.then(console.log)
.catch(console.error)
