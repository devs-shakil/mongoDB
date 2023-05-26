const {mongoClient} = require ('./dbconfig');
const insertSingleDoc = async () =>{
    try{
        const database = client.db("shakil");
        const haiku = database.collection("haiku");
    }catch(er){

    }finally {

    }
}