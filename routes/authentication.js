var express = require('express');
var router = express.Router();
var session = require('express-session');
var bcrypt = require('bcrypt');
var passport = require('passport'), LocalStrategy = require('passport-local').Strategy;

var mongojs = require('mongojs'); 
var db = mongojs("mongodb://manikandan:password@ds047085.mlab.com:47085/crm");



module.exports = {



  loginUser: function (req, res) {
    var loguser = req.body;
    console.log('checkUser');
    console.log(loguser);
    //  res.send("Welcome to this page for the first time!" + loguser.username);
    var sess = req.session;
    var query = {
      username: loguser.username
    };

    passport.use(new LocalStrategy(
    db.users.find(query).toArray(function (err, user) {
      if (err) {
        console.log('err', err)
        res.send(err);
      }
      // res.json(user);
      console.log(user.length);
      if (user.length == 1) {

        console.log("user is there");


        console.log(user);
        console.log(loguser.password);
        bcrypt.compare(loguser.password, user[0].password, function (err, resp) {
          // res == true
          console.log("hash checking");
          console.log(resp);
          if (resp) {
            sess.user = user[0];
            console.log("session user");
            console.log(sess.user);
            res.json(sess.user);
          } else {
            var wrong_pwd = {
              message: "Password is Wrong!"
            }
            res.json(wrong_pwd);
          }


        });
      } else {
        var no_user = {
          message: "No User Found!"
        }
        res.json(no_user);
      }

      // if(user[0].password == loguser.password){
      //     res.send("password is correct");

      // }
      // else{
      //     res.send("password is wrong");
      // }
    })));
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
