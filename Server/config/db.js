import mongoose from "mongoose";

const mongoDBConnect = async() => {
   try {
    const res = await mongoose.connect("",{dbName: ""})
    console.log("MongoDb Connected Successfully: ", res.connection.name);
   } catch (error) {
     console.log("MongoDb connection Failed: ",error);
   }
}

export default mongoDBConnect;