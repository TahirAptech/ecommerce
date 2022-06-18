import multer from 'multer';

/*const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: function (req, file, cb) {
        cb(null, `${new Date().getTime()}-${file.originalname}`);
    },
})

const upload = multer({
    storage,
    limits: { fieldSize: 1024 * 1024 * 20 },
    fileFilter: function (req, file, cb) {
        if (file.mimetype.split("/")[1].match(/jpeg|jpg|png/)) {
            cb(null, true);
        }
        else{
            cb("Invalid image type", true);
        }
    },
});
*/

const upload = multer({
    storage : multer.diskStorage({}),
});

export default upload;
