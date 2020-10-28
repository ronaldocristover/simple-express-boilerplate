const { User } = require("./model");
const { ERROR, MESSAGE } = require("../../config/constant");
const wrapper = require("../../helpers/wrapper");

const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    const users = await User.find().sort("name");
    if (users.length < 1) {
        res.send(ERROR.NOT_FOUND, {
            message: MESSAGE.DATA_NOT_FOUND,
        });
    }

    return wrapper.pagination(
        res,
        users,
        req,
        users.length,
        200,
        MESSAGE.DATA_FOUND
    );
});

router.get("/:id", async (req, res) => {
    const users = await User.findById(req.params.id);

    if (!users)
        return res.send(ERROR.NOT_FOUND, {
            message: MESSAGE.DATA_NOT_FOUND,
        });

    res.send(users);
});

router.post("/", async (req, res) => {
    console.log(req.body);
    let users = new User({
        name: req.body.name,
    });
    users = await users.save();

    res.send(users);
});

module.exports = router;
