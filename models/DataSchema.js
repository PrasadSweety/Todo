import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  completed: {
    type: Boolean,
    require: true,
  },
});

export const User = new mongoose.model("User", DataSchema);
