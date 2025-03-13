import multer from "multer";
import path from "path";

// Configure storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(process.cwd(), "public/uploads/"));
    },
    filename: (req, file, cb) => {
        const timestamp = Date.now();
        cb(null, `${timestamp}_${file.originalname}`);
    },
});

// Multer middleware
const upload = multer({ storage });

export default upload;
