var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var mongojs = require('mongojs');
var db = mongojs("mongodb://manikandan:password@ds047085.mlab.com:47085/crm");

module.exports = {
   
    checkUser: function (req, res) {
         var loguser = req.body;
         console.log(loguser);
       //  res.send("Welcome to this page for the first time!" + loguser.username);

          var query = { username: loguser.username }; 

        db.users.find(query).toArray(function (err, user) {
            if (err) {
                res.send(err);
            }
           // res.json(user);
           console.log(user.length);
           if(user.length == 1){

               console.log("user is there");
          

           console.log(user);
            console.log(loguser.password);
            bcrypt.compare(loguser.password, user[0].password, function(err, res) {
    // res == true
                console.log("hash checking");
                    console.log(res);
                if(res){
                    req.session.user = user[0];
                    console.log("session user");
                    console.log(req.session.user);
                }


                });
                 }
                 else{
                     res.render('/', {message: "Invalid credentials!"});
                 }

            // if(user[0].password == loguser.password){
            //     res.send("password is correct");

            // }
            // else{
            //     res.send("password is wrong");
            // }
        });
    }

//   checkUser: function (req, res) {
//    if(req.session.page_views){
//       req.session.page_views++;
//       res.send("You visited this page " + req.session.page_views + " times");
//    } else {
//       req.session.page_views = 1;
//       res.send("Welcome to this page for the first time!");
//    }
// }

    
    

   

};