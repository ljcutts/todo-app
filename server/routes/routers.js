import express from "express";

import { createTodo } from "../../controllers";

const router = express.Router()

router.post("/", createTodo);

export default router