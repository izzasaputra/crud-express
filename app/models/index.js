const mongoose= require("mongoose");
const dbconfig= require("../config/database");

module.exports = {
    mongoose,
    url: dbconfig.url,
    mahasiswa: require('./mahasiswa.model.js')(mongoose)
}