import express from "express";
import mongoose from "mongoose";
import todoRoutes from "../server/routes/routers"
import cors from "cors"
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const app = express();


app.use("/api", todoRoutes)

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(3001, () =>
      console.log(`Server Running on Port: http://localhost:3001`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));