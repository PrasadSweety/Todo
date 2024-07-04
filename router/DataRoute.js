import express from "express";
import {
  allData,
  deleteMyData,
  enterData,
  updateMyData,
} from "../controllers/user.js";
const router = express.Router();

router.route("/").post(enterData);
router.route("/").get(allData);
router.route("/:id").patch(updateMyData);
router.route("/:id").delete(deleteMyData);

export default router;
