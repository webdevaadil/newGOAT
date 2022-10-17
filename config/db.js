const mongoose = require("mongoose");

const connectDB =  () => {
   mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
    console.log("connected");
}).catch(()=>{
    console.log(error);
})
};


module.exports = connectDB;










