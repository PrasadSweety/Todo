import * as React from "react";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API_END } from "../utils/constant";
import { setAllData, setData, setUpdated } from "../redux/dataSlice";
import { useCallback } from "react";

export default function TaskForm({ onSubmit, onCancel }) {
  const dispatch = useDispatch();
  const updatedData = useSelector((store) => store.myData.allIndiData);

  const [title, setTitle] = React.useState(updatedData.title);
  const [description, setDescription] = React.useState(updatedData.description);
  const [completed, setCompleted] = React.useState(updatedData.completed);
  const [_id, setID] = React.useState(updatedData._id);

  const handleSubmit = async (event) => {
    event.preventDefault();
    onSubmit({ title, description, completed });
    const myChData = {
      title,
      description,
      completed,
    };

    try {
      console.log(`=============${_id} name ${title} roll ${description}`);

      const upData = await axios.patch(`${API_END}/${_id}`, myChData);
      console.log(upData);
      dispatch(setUpdated(true));
      dispatch(setData(myChData)); // Update individual data item
      updatedNewData();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const updatedNewData = useCallback(async () => {
    try {
      let response = await axios.get(`${API_END}/`);
      dispatch(setAllData(response.data.message));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <TextField
        maxLength="200"
        label="Title"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
      />
      <TextField
        label="Description"
        variant="outlined"
        multiline
        rows={4}
        maxLength="400"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
            color="primary"
          />
        }
        label="Completed"
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
        <Button variant="outlined" color="secondary" onClick={onCancel}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
}
