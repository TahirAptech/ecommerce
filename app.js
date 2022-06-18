import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/routes';
// import dotenv from 'dotenv';
// import cloudnary from 'cloudinary';
// import cloudinaryConfig from './config/cloudinary';
// dotenv.config();
// const cloudinary = cloudnary.v2;
// cloudinary.config(cloudinaryConfig);
const app = express();

const Password = "admin";
const DB_Name = "userdb";
//const uri = `mongodb+srv://admin:${Password}@cluster0.66qn3.mongodb.net/${DB_Name}?retryWrites=true&w=majority`;
const uri = `mongodb://localhost:27017/${DB_Name}`;


//#region Middlewares.
app.use(express.json()); //Body Allow <- express default Json Body Parser.
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(router);
//#endregion

app.all('*', (req, res) => {
    res.send('Sorry Wrong URL');
});

mongoose.connect(uri)
    .then(() => app.listen(process.env.PORT || 5000, console.log('Server is running..')))
    .catch(error => console.log(error));

