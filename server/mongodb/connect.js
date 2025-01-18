import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set('strictQuery', true); // Used when working with search functionality

  mongoose
    .connect(url)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err)); // Properly attach the catch block
};

export default connectDB;