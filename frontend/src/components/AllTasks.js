import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAllData } from "../redux/dataSlice";
import IndiTask from "./IndiTask";
import { API_END } from "../utils/constant";

const AllTasks = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const myAllData = useSelector((store) => store.myData.allData);

  const formHandler = () => {
    navigate("/");
  };

  const myData = useCallback(async () => {
    try {
      let response = await axios.get(`${API_END}/`);
      setUserData(response.data.message);
      dispatch(setAllData(response.data.message));
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);

  useEffect(() => {
    myData();
  }, [myData]);

  const deleteHandler = async (id) => {
    try {
      let del = await axios.delete(`${API_END}/${id}`);
      if (del.status === 200) {
        const updatedUserData = userData.filter((item) => item._id !== id);
        dispatch(setAllData(updatedUserData));
        setUserData(updatedUserData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-400 flex flex-col items-center justify-center">
      <div className="bg-gray-400 p-5 inline-block items-center justify-center opacity-80 w-full">
        <button
          onClick={formHandler}
          className="absolute top-4 left-4 bg-red-600 px-4 py-2 rounded-lg text-white z-10"
        >
          Back
        </button>
        {!myAllData || myAllData.length === 0 ? (
          <div className="text-3xl mt-4">No Data Found!</div>
        ) : (
          myAllData.map((item) => (
            <IndiTask
              key={item._id}
              _id={item._id}
              title={item.title}
              description={item.description}
              completed={item.completed}
              deleteHandler={deleteHandler}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default AllTasks;
