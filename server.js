var express = require('express'),
bodyParser = require('body-parser'),
http = require('http'),
mongoose = require('mongoose'),
jsonApp = express(),
jsdom = require('jsdom'),
$ = require('jquery');
notes = {
    "SoftPlastic": [{
        "name": "Stick Worm",
        "description": "This stick worm..."
    }]
};

jsdom.env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }
 
    var $ = require("jquery")(window);
});

jsonApp.use(bodyParser.urlencoded({extended: false}));

$(".bait-input button").on("click", ()=>{
    var name_text = $(".name-input input").val();
    var desc_text = $(".desc-input inpit").val();

    $.post("notes", newNote, (response)=>{
        console.log("server post repsonse returned..." +response.toSoure());
    });
});

jsonApp.use(express.static(__dirname + "/public/"));

http.createServer(jsonApp).listen(3030);

mongoose.connect('mongodb://localhost/Baits');

var BaitSchema = mongoose.Schema({
    "type": String,
    "name":String,
    "description": String
});

var Bait = mongoose.model("Bait",BaitSchema);

jsonApp.post("/baits", (req, res)=>{
    var newBait = new Bait({
        "type": req.body.type,
        "name": req.body.name,
        "description": req.body.description
    });
    newBait.save((error, result)=>{
        if(error !== null){
            console.log(error);
            res.send("error reported");
        }
        else{
            Bait.find({}, (error, result)=>{
                res.json(result);
            });
        }
    });
});

jsonApp.get("/baits.json", (req, res)=>{
    Bait.find({}, (error, baits)=>{
        res.json(baits);
    });
});






