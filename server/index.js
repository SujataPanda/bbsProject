import express from "express";
import {router} from "./src/route.js"
import cors from "cors"
const app = express();


app.use(cors()) ;
app.use(express.json());
app.use('/api', [
  router
]);

app.listen(3001 || process.env.PORT, () => {
  console.log("server is running on port 3001");
});
