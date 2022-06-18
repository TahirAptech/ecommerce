// import de from 'dotenv';
// de.config();
// const cloudinaryConfig = {
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_SECRET_KEY,
//     secure: true
// };
// export default cloudinaryConfig;

// import { config, uploader } from 'cloudinary'
// import dotenv from 'dotenv';
// dotenv.config();
// const cloudinaryConfig = (req, res, next) => {
//     config({
//         cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//         api_key: process.env.CLOUDINARY_API_KEY,
//         api_secret: process.env.CLOUDINARY_API_SECRET,
//     });
//     next();
// }
// export { cloudinaryConfig, uploader };

import cloudinary from "cloudinary";

cloudinary.v2.config({
    cloud_name: "dqib7gqnx",
    api_key: "486996966327663",
    api_secret: "tbpEZWhzAo5YMD7oAKBjM2DUzvc",
});

export default cloudinary.v2;