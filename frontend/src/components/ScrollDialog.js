import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { setOpenDialog } from "../redux/dataSlice";
import TaskForm from "./TaskForm.js";

export default function ScrollDialog() {
  const dispatch = useDispatch();
  const open = useSelector((store) => store.myData.openDialog);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    console.log(open);
    dispatch(setOpenDialog(true));
  };

  const handleClose = () => {
    dispatch(setOpenDialog(false));
  };

  const handleFormSubmit = (formData) => {
    console.log(formData);
    handleClose();
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Update Data</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <TaskForm onSubmit={handleFormSubmit} onCancel={handleClose} />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
