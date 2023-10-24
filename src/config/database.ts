import mongoose from "mongoose";

export const configure = async () => {
  try {
    await mongoose.connect("mongodb+srv://nicoortizpe:917364825@myapp.hmjkzaq.mongodb.net/?retryWrites=true&w=majority");
    console.log("🟢 Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};
 //fgfgfgfgd
