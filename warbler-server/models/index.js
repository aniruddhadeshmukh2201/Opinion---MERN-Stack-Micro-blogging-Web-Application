const mongoose = require("mongoose");
mongoose.set("debug",true);
mongoose.Pormise = Promise;
mongoose.connect("mongodb://localhost/warbler", {
    keepAlive: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

module.exports.User = require("./user");
module.exports.Message = require("./message");