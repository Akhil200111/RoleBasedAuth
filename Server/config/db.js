import mongoose from "mongoose";

const mongoDBConnect = async() => {
   try {
    const res = await mongoose.connect(process.env.MONGO_URL,{dbName: "MyUsers"})
    console.log("MongoDb Connected Successfully:", res.connection.name);
   } catch (error) {
     console.log("MongoDb connection Failed: ",error);
   }
}

export default mongoDBConnect;