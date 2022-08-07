


const Mongoose = require("mongoose")
const RemoteDB = 'mongodb connetion string database'
const connectDB = async () => {
  Mongoose.connect(RemoteDB)
  .then(client => {
    console.log("MongoDB Connected")
  })
}
module.exports = connectDB