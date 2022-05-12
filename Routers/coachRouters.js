const express = require('express');
const router = express.Router();
const Coach = require('../Models/coachSchema')
const {coach}= require('../controllers/coach')

//ADD
router.post("/addCoach",authMiddleware,coach)

//UPDATE
router.put("/:id", async (req, res) => {
  
    try {
      const updatedCoach = await Coach.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedCoach);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //DELETE
  router.delete("/:id", async (req, res) => {
    try {
      await Coach.findByIdAndDelete(req.params.id);
      res.status(200).json("Coach has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });

    //GET COACH
router.get("/find/:id", async (req, res) => {
    try {
      const user = await Coach.findById(req.params.id);
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //GET ALL COACHS
  router.get("/", async (req, res) => {
    const query = req.query.new;
    try {
      const coachs = query
        ? await Coach.find().sort({ _id: -1 }).limit(5)
        : await Coach.find();
      res.status(200).json(coachs);
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports = router