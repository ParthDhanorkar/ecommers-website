import mongoose from "mongoose";
import colors from "colors";

const connectDB = async (req, res) => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to mongoDB database ${conn.connection.host}`.bgMagenta.white);
  } catch (error) {
    console.log(`Error in connection : ${error}`.bgRed.white);
  }
};

export default connectDB;
