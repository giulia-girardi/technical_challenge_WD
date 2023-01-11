const router = require("express").Router();
const jsonFile = require("../../../data/phones.json")

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/phones", (req, res, next) => {
  res.json(jsonFile);
});

router.get("/phones/:id", (req, res, next) => {
  const phoneId = req.params.id;
  const onePhone = jsonFile.filter(
    phone => Number(phone.id) === Number(phoneId)
  ) [0];
  res.json(onePhone);
});



module.exports = router;
