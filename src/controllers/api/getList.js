const db = require('../../entitles/Database');

module.exports = async (req, res) => {
    const list = db.find();
    console.log(list);
    res.json(list);
}