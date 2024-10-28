const path = require("path");

const LOAD = async (req, res) => {
    try {
        res.render("index");
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    LOAD
}