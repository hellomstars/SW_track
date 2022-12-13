const { Router } = require("express");
const { Student } = require("../models");

const router = Router();

router.delete("/:shortId", async (req, res) => {
  const { shortId } = req.params;
  await Student.deleteOne({ shortId });
  
  res.status(201).send();
});


module.exports = router;