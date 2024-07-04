import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setData, setOpenDialog } from "../redux/dataSlice";
import { API_END } from "../utils/constant";

const IndiTask = ({ _id, title, description, completed, deleteHandler }) => {
  const [chTitle, setchTitle] = useState(title);
  const [chDescription, setchDescription] = useState(description);
  const [chCompleted, setchCompleted] = useState(completed);
  const dispatch = useDispatch();
  const isOpen = useSelector((store) => store.myData.openDialog);

  const updateHandler = async () => {
    dispatch(setOpenDialog(true));
    const myChData = {
      _id,
      title: chTitle,
      description: chDescription,
      completed: chCompleted,
    };
    dispatch(setData(myChData));
    // try {
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete?")) {
      deleteHandler(_id);
    }
  };

  return (
    <div className="flex bg-gray-400 p-10 items-center justify-between opacity-80">
      <div className="flex-1 space-y-4">
        <input
          className="rounded-md mx-2 px-4 py-2 placeholder-black w-full"
          value={chTitle}
          onChange={(e) => setchTitle(e.target.value)}
          type="text"
          disabled
        />
        <textarea
          className="rounded-md mx-2 px-4 py-2 placeholder-black w-full h-16 resize-none"
          value={chDescription}
          onChange={(e) => setchDescription(e.target.value)}
          disabled
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={chCompleted}
            onChange={(e) => setchCompleted(e.target.checked)}
            className="rounded-md mx-2 px-4 py-2 placeholder-black"
            disabled
          />
          <span
            className={`text-${chCompleted ? "green" : "red"}-600 font-bold`}
          >
            {chCompleted ? "Completed" : "Incomplete"}
          </span>
        </label>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={updateHandler}
          className=" mx-4 bg-green-600 px-4 py-2 rounded-lg text-white"
        >
          Update
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-600 px-4 py-2 rounded-lg text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default IndiTask;
