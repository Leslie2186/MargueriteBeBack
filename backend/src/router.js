const express = require("express");

const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "public/assets/images");
  },
  filename(req, file, callback) {
    callback(null, "monfichier.jpg");
  },
});

const upload = multer({
  storage,
});
// ({ dest: "images/" });

// Define Your API Routes Here

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const authControllers = require("./controllers/authControllers");
const candidatControllers = require("./controllers/candidatControllers");
// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);
router.post("/login", authControllers.log);
router.post("/candidat", upload.single("image"), candidatControllers.add);

const candidatControllers = require("./controllers/candidatControllers");

router.get("/candidats", candidatControllers.browse);
router.get("/candidats/:id", candidatControllers.read);

router.get("/retenu", candidatControllers.retenu);

module.exports = router;
