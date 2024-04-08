import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import {router} from "./routes";

//Set up port for our app
//If it is not available it would be port 8081
const PORT = process.env.PORT || 8081;
//Create an instance of express
const app = express();
//cors allows us to make requests to our API
app.use(cors());
//config express to use json
app.use(express.json());

app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

