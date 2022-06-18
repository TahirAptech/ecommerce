import cloudinary from "cloudinary";
import fs from "fs";

const imageUpload = async (req, res) => {
  console.log(req.files);
  const path = req.files[0].path;

  cloudinary.v2.uploader.upload(path, (error, data) => {
    if (error) {
      return res.json({
        message: "Could not upload image to cloud , try again",
      });
    }
    ///delete file
    fs.unlinkSync(path);
    res.json(data);
  
  });
};

export default imageUpload;