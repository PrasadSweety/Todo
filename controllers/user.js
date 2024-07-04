import { User } from "../models/DataSchema.js";

export const enterData = async (req, resp) => {
  const { title, description, completed } = req.body;

  try {
    if (!title || !description) {
      return resp.status(401).json({
        message: "Missing Data",
        success: false,
      });
    }

    const user = await User.create({ title, description, completed });

    return resp.status(201).json({
      message: "Added Successfully!",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const allData = async (req, resp) => {
  try {
    const myData = await User.find();
    console.log(myData);

    return resp.status(200).json({
      message: myData,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateMyData = async (req, resp) => {
  try {
    const id = req.params.id;

    const myUser = await User.updateOne({ _id: id }, req.body);

    if (myUser.matchedCount === 0) {
      return resp.status(404).json({
        message: "No user found with the provided id",
        success: false,
      });
    }

    return resp.status(200).json({
      message: "Data Updated successfully!",
      success: true,
    });
  } catch (error) {
    console.error(error);
  }
};

export const deleteMyData = async (req, resp) => {
  try {
    const _id = req.params.id;

    const data = await User.deleteOne({ _id });

    return resp.status(200).json({
      message: "Deleted your Data!",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
